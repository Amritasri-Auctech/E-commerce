"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Pill, UserPlus } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (form.mobile && !/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = "Enter a valid 10-digit mobile number";
    if (form.password.length < 6) e.password = "Password must be at least 6 characters";
    if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (serverError) setServerError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setSubmitting(true);
    try {
      await register(form.name, form.email, form.password, form.mobile);
      router.push("/");
    } catch (err) {
      setServerError(err.message || "Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors bg-white ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-200"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 justify-center">
            <div className="bg-blue-600 p-2.5 rounded-xl"><Pill className="w-6 h-6 text-white" /></div>
            <span className="text-2xl font-bold text-gray-900">Pharma<span className="text-blue-600">Care</span></span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-1">Create an account</h1>
          <p className="text-gray-500 text-sm">Join PharmaCare today</p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          {serverError && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-6">{serverError}</div>
          )}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {[
              { id: "name", label: "Full Name", type: "text", placeholder: "Your full name", autoComplete: "name" },
              { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com", autoComplete: "email" },
              { id: "mobile", label: "Mobile Number", type: "tel", placeholder: "10-digit mobile number", autoComplete: "tel", optional: true, maxLength: 10 },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1.5">
                  {field.label} {field.optional ? <span className="text-gray-400 text-xs">(optional)</span> : <span className="text-red-500">*</span>}
                </label>
                <input id={field.id} name={field.id} type={field.type} value={form[field.id]}
                  onChange={handleChange} placeholder={field.placeholder} autoComplete={field.autoComplete}
                  maxLength={field.maxLength} className={inputClass(field.id)} />
                {errors[field.id] && <p className="text-red-500 text-xs mt-1">{errors[field.id]}</p>}
              </div>
            ))}

            {[
              { id: "password", label: "Password", show: showPassword, toggle: () => setShowPassword(!showPassword), placeholder: "Min. 6 characters" },
              { id: "confirmPassword", label: "Confirm Password", show: showConfirm, toggle: () => setShowConfirm(!showConfirm), placeholder: "Re-enter your password" },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1.5">
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input id={field.id} name={field.id} type={field.show ? "text" : "password"}
                    value={form[field.id]} onChange={handleChange} placeholder={field.placeholder}
                    autoComplete="new-password" className={`${inputClass(field.id)} pr-11`} />
                  <button type="button" onClick={field.toggle}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label={field.show ? "Hide password" : "Show password"}>
                    {field.show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors[field.id] && <p className="text-red-500 text-xs mt-1">{errors[field.id]}</p>}
              </div>
            ))}

            <button type="submit" disabled={submitting}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-100 mt-2">
              {submitting ? (
                <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Creating account...</>
              ) : (
                <><UserPlus className="w-4 h-4" /> Create Account</>
              )}
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
