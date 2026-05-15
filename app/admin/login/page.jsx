"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (password === "PB@123") {
            document.cookie = "admin-token=secret123; path=/";
            router.push("/admin");
        } else {
            alert("Wrong password!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
                <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">
                    Login
                </h1>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="relative">
                        <Mail className="absolute left-3 top-3.5 text-gray-600" size={20} />
                        <input
                            type="email"
                            placeholder="Admin Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-500"
                            required
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-3.5 text-gray-600" size={20} />
                        <input
                            type={showPass ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-12 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-500"
                            required
                        />

                        {/* Eye Button */}
                        <button
                            type="button"
                            onClick={() => setShowPass(!showPass)}
                            className="absolute right-3 top-3.5 text-gray-600 hover:text-gray-800"
                        >
                            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                        Login
                    </button>

                    <p className="text-center text-sm text-gray-900">
                        © {new Date().getFullYear()} Promozione Branding
                    </p>
                </form>
            </div>
        </div>
    );
}