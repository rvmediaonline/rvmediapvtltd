import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { supabase } from "../../lib/supabaseClient";
import type { ContactSubmission } from "../../lib/supabaseClient";
import { LogOut, RefreshCw, Inbox, CheckCircle, Phone, Mail } from "lucide-react";

const STATUS_COLORS: Record<string, string> = {
  new: "#06B6D4",
  contacted: "#F59E0B",
  qualified: "#10B981",
  closed: "#7C3AED",
};

export function AdminPage() {
  const [session, setSession] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [leads, setLeads] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(!!data.session);
      if (data.session) fetchLeads();
    });
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setLoginError(error.message);
    } else {
      setSession(true);
      fetchLeads();
    }
    setLoginLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(false);
    setLeads([]);
  };

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setLeads(data);
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("contact_submissions").update({ status }).eq("id", id);
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: status as ContactSubmission["status"] } : l)));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
  };

  const filtered = filter === "all" ? leads : leads.filter((l) => l.status === filter);

  if (!session) {
    return (
      <div style={{ minHeight: "100vh", background: "#040411", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            width: "100%",
            maxWidth: 420,
            padding: "2.5rem",
            borderRadius: 24,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(124,58,237,0.3)",
            margin: "0 1rem",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "white", marginBottom: 8 }}>
              Admin Login
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
              Rv Media Online — Lead Dashboard
            </div>
          </div>
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />
            {loginError && (
              <div style={{ color: "#EF4444", fontFamily: "'Inter', sans-serif", fontSize: "0.82rem" }}>{loginError}</div>
            )}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loginLoading}
              style={{
                padding: "12px",
                borderRadius: 12,
                background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                border: "none",
                color: "white",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                opacity: loginLoading ? 0.7 : 1,
              }}
            >
              {loginLoading ? "Signing In..." : "Sign In"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#040411", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "white" }}>
              Lead Dashboard
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", marginTop: 4 }}>
              {leads.length} total submissions
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <motion.button whileHover={{ scale: 1.05 }} onClick={fetchLeads}
              style={{ padding: "8px 16px", borderRadius: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              <RefreshCw size={14} /> Refresh
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} onClick={handleLogout}
              style={{ padding: "8px 16px", borderRadius: 10, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#EF4444", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              <LogOut size={14} /> Logout
            </motion.button>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
          {["all", "new", "contacted", "qualified"].map((s) => {
            const count = s === "all" ? leads.length : leads.filter((l) => l.status === s).length;
            return (
              <motion.button key={s} whileHover={{ scale: 1.02 }} onClick={() => setFilter(s)}
                style={{
                  padding: "1rem", borderRadius: 14,
                  background: filter === s ? `${STATUS_COLORS[s] || "#7C3AED"}15` : "rgba(255,255,255,0.02)",
                  border: `1px solid ${filter === s ? (STATUS_COLORS[s] || "#7C3AED") + "40" : "rgba(255,255,255,0.07)"}`,
                  cursor: "pointer", textAlign: "center",
                }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: STATUS_COLORS[s] || "white" }}>{count}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textTransform: "capitalize" }}>{s}</div>
              </motion.button>
            );
          })}
        </div>

        {/* Leads Table */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "4rem", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>Loading leads...</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem" }}>
            <Inbox size={48} color="rgba(255,255,255,0.15)" style={{ margin: "0 auto 1rem" }} />
            <div style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>No submissions yet</div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {filtered.map((lead, i) => (
              <motion.div key={lead.id || i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                style={{ padding: "1.25rem 1.5rem", borderRadius: 16, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: "1rem", alignItems: "center" }}>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "white", marginBottom: 4 }}>{lead.name}</div>
                  <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#06B6D4", display: "flex", alignItems: "center", gap: 4 }}>
                      <Mail size={11} />{lead.email}
                    </span>
                    {lead.phone && (
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 4 }}>
                        <Phone size={11} />{lead.phone}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  {lead.service && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#A78BFA", marginBottom: 2 }}>{lead.service}</div>}
                  {lead.budget && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>{lead.budget}</div>}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
                  {lead.created_at ? new Date(lead.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "—"}
                </div>
                <select
                  value={lead.status || "new"}
                  onChange={(e) => lead.id && updateStatus(lead.id, e.target.value)}
                  style={{
                    padding: "6px 10px", borderRadius: 8,
                    background: `${STATUS_COLORS[lead.status || "new"]}15`,
                    border: `1px solid ${STATUS_COLORS[lead.status || "new"]}40`,
                    color: STATUS_COLORS[lead.status || "new"],
                    fontFamily: "'Inter', sans-serif", fontSize: "0.78rem",
                    cursor: "pointer", outline: "none",
                  }}
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="closed">Closed</option>
                </select>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
