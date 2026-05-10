export const styles = {
  global: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: #f3f4f6;
      color: #1a1a2e;
      line-height: 1.6;
    }
  `,

  container: {
    display: 'flex',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '2rem auto',
    padding: '0 1.5rem',
    minHeight: '100vh',
  },

  // Sidebar Styles
  sidebar: {
    width: '280px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e5e7eb',
    height: 'fit-content',
    position: 'sticky',
    top: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },

  avatarContainer: {
    position: 'relative',
    display: 'inline-block',
  },

  avatarButton: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    backgroundColor: '#059669',
    border: '3px solid #ffffff',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#ffffff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.2s ease',
  },

  userInfo: {
    textAlign: 'center',
  },

  userName: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: '0.25rem',
  },

  userEmail: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },

  logoutButton: {
    width: '100%',
    padding: '12px 20px',
    backgroundColor: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    color: '#6b7280',
    fontSize: '0.95rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: '#fef2f2',
      color: '#dc2626',
      borderColor: '#dc2626',
    },
  },

  // Main Content Styles
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },

  pageHeader: {
    marginBottom: '0.5rem',
  },

  pageTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: '0.5rem',
  },

  pageSubtitle: {
    fontSize: '1rem',
    color: '#6b7280',
    lineHeight: '1.5',
  },

  sectionsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  // Section Card Styles
  sectionCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e5e7eb',
  },

  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #e5e7eb',
  },

  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.25rem',
    marginBottom: '1.5rem',
  },

  // Input Styles
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '0.95rem',
    color: '#1a1a2e',
    backgroundColor: '#ffffff',
    transition: 'border-color 0.2s ease',
    outline: 'none',
    '::placeholder': {
      color: '#9ca3af',
    },
    ':focus': {
      borderColor: '#059669',
      boxShadow: '0 0 0 3px rgba(5, 150, 105, 0.1)',
    },
  },

  select: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '0.95rem',
    color: '#1a1a2e',
    backgroundColor: '#ffffff',
    outline: 'none',
    cursor: 'pointer',
    ':focus': {
      borderColor: '#059669',
      boxShadow: '0 0 0 3px rgba(5, 150, 105, 0.1)',
    },
  },

  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.5rem',
  },

  errorText: {
    color: '#dc2626',
    fontSize: '0.8rem',
    marginTop: '0.25rem',
  },

  // Photo Section
  photoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.25rem',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    marginBottom: '1.5rem',
  },

  photoInfo: {
    flex: 1,
  },

  photoTitle: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: '0.25rem',
  },

  photoSubtitle: {
    fontSize: '0.8rem',
    color: '#6b7280',
    marginBottom: '0.75rem',
  },

  photoButton: {
    padding: '8px 16px',
    backgroundColor: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    color: '#374151',
    fontSize: '0.85rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: '#f3f4f6',
    },
  },

  // Action Buttons
  actionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.75rem',
  },

  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    color: '#6b7280',
    fontSize: '0.95rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },

  saveButton: {
    padding: '12px 24px',
    backgroundColor: '#059669',
    border: 'none',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: '#047857',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)',
    },
  },

  // History Section
  historySection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e5e7eb',
  },

  historyTitle: {
    fontSize: '1.15rem',
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: '0.25rem',
  },

  historySubtitle: {
    fontSize: '0.9rem',
    color: '#6b7280',
  },

  historyButton: {
    padding: '12px 24px',
    backgroundColor: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    color: '#059669',
    fontSize: '0.95rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
    ':hover': {
      backgroundColor: '#f0fdf4',
      borderColor: '#059669',
    },
  },

  // Avatar Component Styles
  avatarCircle: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: '700',
    color: '#6b7280',
    overflow: 'hidden',
    border: '4px solid #ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },

  avatarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  // Toast Notification Styles
  toast: {
    position: 'fixed',
    top: '24px',
    right: '24px',
    padding: '16px 24px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
    border: '1px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: '1000',
    animation: 'slideIn 0.3s ease',
  },

  toastSuccess: {
    borderLeft: '4px solid #059669',
  },

  toastError: {
    borderLeft: '4px solid #dc2626',
  },

  toastMessage: {
    fontSize: '0.95rem',
    color: '#1a1a2e',
    fontWeight: '500',
  },

  toastClose: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#6b7280',
    fontSize: '1.2rem',
    padding: '0',
    lineHeight: '1',
  },
};