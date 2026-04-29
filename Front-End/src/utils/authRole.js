import { jwtDecode } from "jwt-decode";

const ROLE_CLAIM_URI = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";

export function getUserRoleFromToken() {
  try {
    const token = localStorage.getItem("generatedJWT_Token");
    if (!token) return null;

    const decoded = jwtDecode(token);
    return decoded?.role || decoded?.[ROLE_CLAIM_URI] || null;
  } catch {
    return null;
  }
}
