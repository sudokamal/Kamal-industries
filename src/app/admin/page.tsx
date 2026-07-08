"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface Enquiry {
  id: string;
  fullName: string;
  companyName: string | null;
  phone: string;
  whatsapp: string | null;
  email: string | null;
  state: string | null;
  city: string | null;
  productRequired: string | null;
  stoneType: string;
  requiredSize: string | null;
  thickness: string | null;
  quantity: string;
  deliveryLocation: string | null;
  deliveryDate: string | null;
  projectType: string | null;
  additionalRequirements: string | null;
  status: string;
  createdAt: string;
}

const STATUS_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  New:       { bg: "rgba(239,246,255,1)", text: "#1d4ed8", dot: "#3b82f6" },
  Contacted: { bg: "rgba(254,252,232,1)", text: "#92400e", dot: "#f59e0b" },
  Completed: { bg: "rgba(240,253,244,1)", text: "#166534", dot: "#22c55e" },
};

export default function AdminDashboard() {
  const router = useRouter();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selected, setSelected] = useState<Enquiry | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [exporting, setExporting] = useState(false);

  const fetchEnquiries = useCallback(async () => {
    try {
      const res = await fetch("/api/enquiries");
      if (res.status === 401) { router.push("/admin/login"); return; }
      const data: Enquiry[] = await res.json();
      setEnquiries(data);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  }, [router]);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { fetchEnquiries(); }, [fetchEnquiries]);

  const filtered = enquiries.filter((e) => {
    const q = search.toLowerCase();
    const matchSearch = !q ||
      e.fullName.toLowerCase().includes(q) ||
      (e.companyName ?? "").toLowerCase().includes(q) ||
      e.phone.includes(q) ||
      (e.email ?? "").toLowerCase().includes(q) ||
      e.stoneType.toLowerCase().includes(q) ||
      (e.city ?? "").toLowerCase().includes(q) ||
      (e.state ?? "").toLowerCase().includes(q);
    const matchStatus = statusFilter === "all" || e.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const stats = {
    total: enquiries.length,
    new: enquiries.filter((e) => e.status === "New").length,
    contacted: enquiries.filter((e) => e.status === "Contacted").length,
    completed: enquiries.filter((e) => e.status === "Completed").length,
  };

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/enquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, status } : e)));
    if (selected?.id === id) setSelected((prev) => prev ? { ...prev, status } : null);
  };

  const deleteEnquiry = async (id: string) => {
    if (!confirm("Permanently delete this enquiry? This cannot be undone.")) return;
    setDeleting(id);
    await fetch(`/api/enquiries/${id}`, { method: "DELETE" });
    setEnquiries((prev) => prev.filter((e) => e.id !== id));
    if (selected?.id === id) setSelected(null);
    setDeleting(null);
  };

  const handleExport = async () => {
    setExporting(true);
    window.open("/api/enquiries/export", "_blank");
    setTimeout(() => setExporting(false), 2000);
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

  // ─── Styles ───────────────────────────────────────────────────────────────
  const S = {
    page:     { minHeight: "100vh", background: "#f1f5f9", fontFamily: "system-ui, -apple-system, sans-serif" },
    header:   { background: "#0f172a", padding: "0 32px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" },
    logo:     { display: "flex", alignItems: "center", gap: "12px" },
    logoText: { color: "#C5A880", fontSize: "16px", fontWeight: "800", letterSpacing: "2.5px" },
    main:     { padding: "28px 32px", maxWidth: "1600px", margin: "0 auto" },
    statGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" },
    statCard: (color: string) => ({ background: "#fff", borderRadius: "12px", padding: "20px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderLeft: `4px solid ${color}` }),
    controls: { display: "flex", gap: "12px", marginBottom: "20px", alignItems: "center" },
    input:    { flex: 1, padding: "10px 16px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "14px", outline: "none", background: "#fff", color: "#1e293b" },
    select:   { padding: "10px 16px", border: "1px solid #e2e8f0", borderRadius: "8px", fontSize: "14px", outline: "none", background: "#fff", color: "#1e293b", cursor: "pointer" },
    btn:      (bg: string, color = "#fff") => ({ padding: "10px 20px", background: bg, color, border: "none", borderRadius: "8px", fontSize: "13px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap" as const }),
    table:    { width: "100%", borderCollapse: "collapse" as const, background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" },
    th:       { padding: "12px 16px", background: "#f8fafc", fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase" as const, letterSpacing: "0.5px", borderBottom: "1px solid #e2e8f0", textAlign: "left" as const, whiteSpace: "nowrap" as const },
    td:       { padding: "12px 16px", fontSize: "13px", color: "#374151", borderBottom: "1px solid #f1f5f9", verticalAlign: "middle" as const },
    badge:    (status: string) => { const c = STATUS_COLORS[status] ?? STATUS_COLORS.New; return { display: "inline-flex", alignItems: "center", gap: "5px", padding: "3px 10px", borderRadius: "20px", background: c.bg, color: c.text, fontSize: "11px", fontWeight: "700" }; },
    modalBg:  { position: "fixed" as const, inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" },
    modal:    { background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "680px", maxHeight: "85vh", overflow: "auto", boxShadow: "0 24px 64px rgba(0,0,0,0.3)" },
  };

  return (
    <div style={S.page}>
      {/* Header */}
      <header style={S.header}>
        <div style={S.logo}>
          <span style={{ fontSize: "22px" }}>🏭</span>
          <div>
            <div style={S.logoText}>KAMAL INDUSTRIES</div>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase" }}>Admin Dashboard</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a href="/" target="_blank" style={{ ...S.btn("rgba(255,255,255,0.08)", "rgba(255,255,255,0.7)"), textDecoration: "none" }}>
            🌐 View Website
          </a>
          <button style={S.btn("#ef4444")} onClick={handleLogout}>Sign Out</button>
        </div>
      </header>

      <main style={S.main}>
        {/* Page title */}
        <div style={{ marginBottom: "24px" }}>
          <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#0f172a", margin: 0 }}>Enquiry Dashboard</h1>
          <p style={{ color: "#64748b", fontSize: "13px", margin: "4px 0 0" }}>Manage and track all customer quote requests</p>
        </div>

        {/* Stats */}
        <div style={S.statGrid}>
          {[
            { label: "Total Enquiries", value: stats.total, color: "#244B7A", icon: "📋" },
            { label: "New",             value: stats.new,   color: "#3b82f6", icon: "🔵" },
            { label: "Contacted",       value: stats.contacted, color: "#f59e0b", icon: "🟡" },
            { label: "Completed",       value: stats.completed, color: "#22c55e", icon: "🟢" },
          ].map((s) => (
            <div key={s.label} style={S.statCard(s.color)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>{s.label}</div>
                  <div style={{ fontSize: "32px", fontWeight: "800", color: "#0f172a" }}>{s.value}</div>
                </div>
                <span style={{ fontSize: "24px" }}>{s.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div style={S.controls}>
          <input
            id="admin-search"
            style={S.input}
            placeholder="🔍 Search by name, company, phone, email, stone type, city…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select id="admin-status-filter" style={S.select} value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="all">All Statuses</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Completed">Completed</option>
          </select>
          <button id="admin-export-btn" style={S.btn(exporting ? "#94a3b8" : "#244B7A")} onClick={handleExport} disabled={exporting}>
            📥 {exporting ? "Exporting…" : "Export Excel"}
          </button>
          <button id="admin-refresh-btn" style={S.btn("#f1f5f9", "#374151")} onClick={fetchEnquiries}>
            🔄 Refresh
          </button>
        </div>

        {/* Results count */}
        <div style={{ marginBottom: "12px", fontSize: "13px", color: "#64748b" }}>
          Showing <strong>{filtered.length}</strong> of <strong>{enquiries.length}</strong> enquiries
        </div>

        {/* Table */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "60px", color: "#64748b", fontSize: "15px" }}>Loading enquiries…</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px", color: "#64748b", background: "#fff", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>📭</div>
            <div style={{ fontSize: "16px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>No enquiries found</div>
            <div style={{ fontSize: "13px" }}>{search || statusFilter !== "all" ? "Try adjusting your search or filter." : "Submit the form to create your first enquiry."}</div>
          </div>
        ) : (
          <div style={{ overflowX: "auto", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
            <table style={S.table}>
              <thead>
                <tr>
                  {["Date & Time", "Name / Company", "Contact", "Stone Type", "Quantity", "Location", "Project", "Status", "Actions"].map((h) => (
                    <th key={h} style={S.th}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((e) => (
                  <tr
                    key={e.id}
                    style={{ cursor: "pointer", transition: "background 0.15s" }}
                    onMouseEnter={(ev) => (ev.currentTarget.style.background = "#f8fafc")}
                    onMouseLeave={(ev) => (ev.currentTarget.style.background = "transparent")}
                  >
                    <td style={{ ...S.td, fontSize: "12px", color: "#64748b" }}>{formatDate(e.createdAt)}</td>
                    <td style={S.td} onClick={() => setSelected(e)}>
                      <div style={{ fontWeight: "600", color: "#0f172a" }}>{e.fullName}</div>
                      {e.companyName && <div style={{ fontSize: "11px", color: "#64748b" }}>{e.companyName}</div>}
                    </td>
                    <td style={S.td} onClick={() => setSelected(e)}>
                      <div>{e.phone}</div>
                      {e.email && <div style={{ fontSize: "11px", color: "#64748b" }}>{e.email}</div>}
                    </td>
                    <td style={S.td} onClick={() => setSelected(e)}>
                      <div style={{ fontWeight: "600" }}>{e.stoneType}</div>
                      {e.requiredSize && <div style={{ fontSize: "11px", color: "#64748b" }}>{e.requiredSize}</div>}
                    </td>
                    <td style={S.td} onClick={() => setSelected(e)}>{e.quantity}</td>
                    <td style={S.td} onClick={() => setSelected(e)}>
                      {e.city && e.state ? `${e.city}, ${e.state}` : e.state ?? e.city ?? "—"}
                    </td>
                    <td style={{ ...S.td, maxWidth: "120px" }} onClick={() => setSelected(e)}>
                      <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.projectType ?? "—"}</div>
                    </td>
                    <td style={S.td}>
                      <select
                        value={e.status}
                        onChange={(ev) => { ev.stopPropagation(); updateStatus(e.id, ev.target.value); }}
                        style={{ ...S.badge(e.status), border: "none", cursor: "pointer", outline: "none", paddingRight: "8px" }}
                      >
                        <option value="New">🔵 New</option>
                        <option value="Contacted">🟡 Contacted</option>
                        <option value="Completed">🟢 Completed</option>
                      </select>
                    </td>
                    <td style={S.td}>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <button
                          onClick={() => setSelected(e)}
                          style={{ padding: "5px 10px", background: "#f0f9ff", color: "#0369a1", border: "1px solid #bae6fd", borderRadius: "6px", fontSize: "11px", fontWeight: "600", cursor: "pointer" }}
                          title="View details"
                        >👁 View</button>
                        <button
                          onClick={() => deleteEnquiry(e.id)}
                          disabled={deleting === e.id}
                          style={{ padding: "5px 10px", background: "#fef2f2", color: "#b91c1c", border: "1px solid #fecaca", borderRadius: "6px", fontSize: "11px", fontWeight: "600", cursor: "pointer" }}
                          title="Delete"
                        >{deleting === e.id ? "…" : "🗑"}</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Detail Modal */}
      {selected && (
        <div style={S.modalBg} onClick={() => setSelected(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            {/* Modal header */}
            <div style={{ background: "#0f172a", padding: "24px 28px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <h2 style={{ color: "#C5A880", fontSize: "18px", fontWeight: "700", margin: 0, letterSpacing: "1px" }}>{selected.fullName}</h2>
                {selected.companyName && <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginTop: "2px" }}>{selected.companyName}</div>}
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <select
                  value={selected.status}
                  onChange={(e) => updateStatus(selected.id, e.target.value)}
                  style={{ padding: "6px 12px", borderRadius: "20px", border: "none", fontSize: "12px", fontWeight: "700", cursor: "pointer", background: STATUS_COLORS[selected.status]?.bg, color: STATUS_COLORS[selected.status]?.text }}
                >
                  <option value="New">🔵 New</option>
                  <option value="Contacted">🟡 Contacted</option>
                  <option value="Completed">🟢 Completed</option>
                </select>
                <button onClick={() => setSelected(null)} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", cursor: "pointer", borderRadius: "6px", padding: "6px 10px", fontSize: "16px" }}>✕</button>
              </div>
            </div>

            {/* Modal body */}
            <div style={{ padding: "24px 28px" }}>
              {[
                { section: "Contact Information", rows: [
                  ["Phone", selected.phone], ["WhatsApp", selected.whatsapp], ["Email", selected.email],
                  ["State", selected.state], ["City", selected.city],
                ]},
                { section: "Product Requirements", rows: [
                  ["Stone Type", selected.stoneType], ["Product Required", selected.productRequired],
                  ["Required Size", selected.requiredSize], ["Thickness", selected.thickness],
                  ["Quantity", selected.quantity],
                ]},
                { section: "Delivery & Project", rows: [
                  ["Delivery Location", selected.deliveryLocation], ["Expected Delivery Date", selected.deliveryDate],
                  ["Project Type", selected.projectType],
                ]},
                { section: "Additional Requirements", rows: [
                  ["Notes", selected.additionalRequirements],
                ]},
                { section: "Metadata", rows: [
                  ["Enquiry ID", selected.id], ["Submitted On", formatDate(selected.createdAt)],
                ]},
              ].map(({ section, rows }) => (
                <div key={section} style={{ marginBottom: "20px" }}>
                  <div style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#244B7A", borderBottom: "2px solid #e2e8f0", paddingBottom: "6px", marginBottom: "10px" }}>{section}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    {rows.map(([label, value]) => value ? (
                      <div key={label} style={{ background: "#f8fafc", borderRadius: "6px", padding: "10px 12px" }}>
                        <div style={{ fontSize: "10px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "2px" }}>{label}</div>
                        <div style={{ fontSize: "13px", color: "#0f172a", wordBreak: "break-word" }}>{value}</div>
                      </div>
                    ) : null)}
                  </div>
                </div>
              ))}

              {/* Modal actions */}
              <div style={{ display: "flex", gap: "10px", marginTop: "8px", paddingTop: "16px", borderTop: "1px solid #e2e8f0" }}>
                {selected.phone && (
                  <a href={`tel:${selected.phone}`} style={{ ...S.btn("#244B7A"), textDecoration: "none" }}>📞 Call</a>
                )}
                {selected.whatsapp && (
                  <a href={`https://wa.me/${selected.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" style={{ ...S.btn("#25D366"), textDecoration: "none" }}>💬 WhatsApp</a>
                )}
                {selected.email && (
                  <a href={`mailto:${selected.email}`} style={{ ...S.btn("#f1f5f9", "#374151"), textDecoration: "none" }}>✉ Email</a>
                )}
                <button
                  onClick={() => deleteEnquiry(selected.id)}
                  style={{ ...S.btn("#ef4444"), marginLeft: "auto" }}
                >🗑 Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
