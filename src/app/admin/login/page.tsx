"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Login failed. Please try again.");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}>
      {/* Background pattern */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle at 25% 25%, rgba(197,168,128,0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(36,75,122,0.1) 0%, transparent 50%)", pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: "440px", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "56px", height: "56px", background: "linear-gradient(135deg, #244B7A, #1a3552)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(197,168,128,0.2)" }}>
              <span style={{ fontSize: "24px" }}>🏭</span>
            </div>
            <div>
              <div style={{ fontSize: "18px", fontWeight: "800", letterSpacing: "3px", color: "#C5A880", textTransform: "uppercase" }}>KAMAL INDUSTRIES</div>
              <div style={{ fontSize: "11px", letterSpacing: "2px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginTop: "2px" }}>Admin Dashboard</div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "40px 36px", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}>
          <h1 style={{ color: "#fff", fontSize: "20px", fontWeight: "700", marginBottom: "6px", textAlign: "center" }}>Sign In</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", textAlign: "center", marginBottom: "32px" }}>Enter your credentials to access the dashboard</p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "8px" }}>Username</label>
              <input
                id="admin-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                placeholder="Enter username"
                style={{ width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#fff", fontSize: "14px", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                onFocus={(e) => (e.target.style.borderColor = "#C5A880")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            <div style={{ marginBottom: "28px" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "8px" }}>Password</label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="Enter password"
                style={{ width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#fff", fontSize: "14px", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                onFocus={(e) => (e.target.style.borderColor = "#C5A880")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {error && (
              <div style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: "8px", padding: "12px 16px", marginBottom: "20px", color: "#fca5a5", fontSize: "13px", textAlign: "center" }}>
                {error}
              </div>
            )}

            <button
              id="admin-login-btn"
              type="submit"
              disabled={loading}
              style={{ width: "100%", padding: "14px", background: loading ? "rgba(197,168,128,0.4)" : "linear-gradient(135deg, #C5A880, #b8935a)", border: "none", borderRadius: "8px", color: "#1a2533", fontSize: "14px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", cursor: loading ? "not-allowed" : "pointer", transition: "all 0.2s", boxShadow: loading ? "none" : "0 4px 16px rgba(197,168,128,0.3)" }}
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>

        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.2)", fontSize: "11px", marginTop: "24px" }}>
          Kamal Industries · Private Admin Area
        </p>
      </div>
    </div>
  );
}
