export const styles = {
  global: `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #f1f5f9; }
    input:focus, select:focus { outline: none; }
    button { cursor: pointer; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
  `,

  container: {
    minHeight: "100vh",
    background: "#f1f5f9",
    fontFamily: "'DM Sans', sans-serif",
    display: "flex",
  },

  // Sidebar styles
  sidebar: {
    width: 280,
    minHeight: "100vh",
    background: "linear-gradient(180deg, #1e3a5f 0%, #1e40af 100%)",
    padding: "32px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: 0,
    position: "sticky",
    top: 0,
    height: "100vh",
    overflowY: "auto",
  },

  logo: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: 26,
    color: "#fff",
    letterSpacing: 1,
    width: "100%",
    marginBottom: 28,
  },

  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },

  avatarButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: "#2563eb",
    border: "2px solid #fff",
    color: "#fff",
    fontSize: 14,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  userInfo: {
    textAlign: "center",
    marginBottom: 24,
  },

  userName: {
    fontWeight: 600,
    fontSize: 16,
    color: "#fff",
  },

  userEmail: {
    fontSize: 12,
    color: "#93c5fd",
    marginTop: 4,
  },

  userBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    background: "#0ea5e944",
    color: "#7dd3fc",
    padding: "3px 12px",
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 600,
    marginTop: 8,
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8,
    width: "100%",
    marginBottom: 28,
  },

  statCard: {
    background: "#ffffff15",
    borderRadius: 10,
    padding: "10px 8px",
    textAlign: "center",
    border: "1px solid #ffffff20",
  },

  statValue: {
    fontWeight: 700,
    fontSize: 18,
    color: "#fff",
  },

  statLabel: {
    fontSize: 11,
    color: "#93c5fd",
    marginTop: 2,
  },

  navItem: {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 8,
    color: "#93c5fd",
    fontSize: 13,
    cursor: "pointer",
    marginBottom: 4,
    borderLeft: "3px solid transparent",
  },

  navItemActive: {
    background: "#ffffff20",
    color: "#fff",
    fontWeight: 600,
    borderLeft: "3px solid #7dd3fc",
  },

  // Main content styles
  main: {
    flex: 1,
    padding: "32px 32px 64px",
    maxWidth: 1200,
  },

  pageHeader: {
    marginBottom: 28,
  },

  pageTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: 28,
    color: "#1e3a5f",
    marginBottom: 4,
  },

  pageSubtitle: {
    color: "#64748b",
    fontSize: 14,
  },

  sectionsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    marginBottom: 24,
  },

  card: {
    background: "#fff",
    borderRadius: 14,
    border: "1.5px solid #e2e8f0",
    overflow: "hidden",
    boxShadow: "0 1px 3px #0001",
  },

  cardHeader: {
    padding: "16px 24px",
    borderBottom: "1.5px solid #e2e8f0",
    background: "#f8fafc",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  cardHeaderAccent: {
    width: 4,
    height: 20,
    borderRadius: 2,
    background: "linear-gradient(180deg,#1e3a5f,#2563eb)",
  },

  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: 16,
    color: "#1e3a5f",
  },

  cardContent: {
    padding: "24px",
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0 20px",
  },

  label: {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "#475569",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    fontFamily: "'DM Sans', sans-serif",
  },

  input: {
    width: "100%",
    height: 44,
    padding: "0 14px",
    fontSize: 14,
    border: "1.5px solid #cbd5e1",
    borderRadius: 8,
    background: "#f8fafc",
    color: "#1e293b",
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: "border-box",
    transition: "border-color .2s, box-shadow .2s",
  },

  errorText: {
    color: "#dc2626",
    fontSize: 11,
    marginTop: 4,
    display: "block",
  },

  photoSection: {
    marginTop: 8,
    padding: 16,
    background: "#f0f7ff",
    borderRadius: 10,
    border: "1.5px dashed #93c5fd",
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 20,
  },

  photoInfo: {
    flex: 1,
  },

  photoTitle: {
    fontWeight: 600,
    fontSize: 14,
    color: "#1e3a5f",
  },

  photoSubtitle: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 8,
  },

  photoButton: {
    height: 32,
    padding: "0 14px",
    borderRadius: 6,
    border: "1.5px solid #2563eb",
    background: "#fff",
    color: "#2563eb",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 12,
    cursor: "pointer",
  },

  actionButtons: {
    display: "flex",
    gap: 12,
    justifyContent: "flex-end",
    marginTop: 8,
  },

  cancelButton: {
    height: 40,
    padding: "0 20px",
    borderRadius: 8,
    border: "1.5px solid #cbd5e1",
    background: "#fff",
    color: "#475569",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
  },

  saveButton: {
    height: 40,
    padding: "0 24px",
    borderRadius: 8,
    border: "none",
    background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
    color: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
    boxShadow: "0 2px 8px #2563eb33",
  },

  toast: {
    position: "fixed",
    top: 24,
    right: 24,
    color: "#fff",
    padding: "12px 20px",
    borderRadius: 10,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    zIndex: 9999,
    boxShadow: "0 4px 20px #0003",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  toastIcon: {
    fontSize: 16,
  },

  historySection: {
    background: "#fff",
    borderRadius: 14,
    border: "1.5px solid #e2e8f0",
    padding: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 1px 3px #0001",
  },

  historyTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: 16,
    color: "#1e3a5f",
    marginBottom: 4,
  },

  historySubtitle: {
    fontSize: 13,
    color: "#64748b",
  },

  historyButton: {
    height: 42,
    padding: "0 24px",
    borderRadius: 9,
    border: "none",
    background: "linear-gradient(135deg, #1e3a5f 0%, #0ea5e9 100%)",
    color: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
    whiteSpace: "nowrap",
    boxShadow: "0 2px 10px #0ea5e933",
    flexShrink: 0,
    marginLeft: 20,
  },

  // Styles pour la page des commentaires - CENTRÉE
  commentsPage: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "32px",
    width: "100%",
  },

  commentsContainer: {
    maxWidth: 1000,
    width: "100%",
    margin: "0 auto",
  },

  commentsHeader: {
    marginBottom: 32,
  },

  backButton: {
    background: "none",
    border: "none",
    color: "#2563eb",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    marginBottom: 16,
    padding: 0,
  },

  commentsTitle: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: 28,
    color: "#1e3a5f",
    marginBottom: 4,
  },

  commentsSubtitle: {
    color: "#64748b",
    fontSize: 14,
  },

  commentsStats: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
    marginBottom: 32,
  },

  statBox: {
    background: "#fff",
    borderRadius: 12,
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 2px 8px #0001",
    border: "1px solid #e2e8f0",
  },

  statBoxValue: {
    fontSize: 28,
    fontWeight: 700,
    color: "#1e3a5f",
    marginBottom: 4,
  },

  statBoxLabel: {
    fontSize: 12,
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  filtersSection: {
    display: "flex",
    gap: 12,
    marginBottom: 32,
    flexWrap: "wrap",
  },

  searchInput: {
    flex: 2,
    minWidth: 250,
    height: 44,
    padding: "0 14px",
    fontSize: 14,
    border: "1.5px solid #e2e8f0",
    borderRadius: 8,
    background: "#fff",
    fontFamily: "'DM Sans', sans-serif",
  },

  filterSelect: {
    flex: 1,
    minWidth: 150,
    height: 44,
    padding: "0 14px",
    fontSize: 14,
    border: "1.5px solid #e2e8f0",
    borderRadius: 8,
    background: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    cursor: "pointer",
  },

  commentsList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  commentCard: {
    background: "#fff",
    borderRadius: 12,
    padding: 20,
    border: "1.5px solid #e2e8f0",
    boxShadow: "0 2px 8px #0001",
  },

  commentHeader: {
    display: "flex",
    gap: 16,
    marginBottom: 16,
    alignItems: "center",
  },

  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    background: "#f1f5f9",
    objectFit: "cover",
  },

  commentHeaderInfo: {
    flex: 1,
  },

  productName: {
    fontWeight: 600,
    fontSize: 16,
    color: "#1e293b",
    marginBottom: 4,
  },

  commentMeta: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  commentDate: {
    fontSize: 12,
    color: "#64748b",
  },

  verifiedBadge: {
    fontSize: 11,
    color: "#059669",
    background: "#d1fae5",
    padding: "2px 8px",
    borderRadius: 12,
  },

  rating: {
    color: "#fbbf24",
    fontSize: 16,
    letterSpacing: 2,
  },

  commentText: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "#334155",
    marginBottom: 16,
  },

  commentFooter: {
    display: "flex",
    gap: 12,
    borderTop: "1px solid #e2e8f0",
    paddingTop: 16,
  },

  likeButton: {
    background: "#f1f5f9",
    border: "none",
    padding: "6px 12px",
    borderRadius: 20,
    fontSize: 12,
    color: "#475569",
    cursor: "pointer",
  },

  replyButton: {
    background: "none",
    border: "none",
    padding: "6px 12px",
    fontSize: 12,
    color: "#2563eb",
    cursor: "pointer",
  },

  noComments: {
    textAlign: "center",
    padding: 48,
    background: "#fff",
    borderRadius: 12,
    color: "#64748b",
    fontSize: 14,
  },
};