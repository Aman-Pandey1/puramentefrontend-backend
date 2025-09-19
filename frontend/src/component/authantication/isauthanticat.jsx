import { clearCart as clearCartDB } from "../newcomponent/db";

export function Isauthanticate() {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
}
export function IsAdmin() {
  return localStorage.getItem("role") === "admin";
}



export async function Logout() {
  try {
    await clearCartDB();
  } catch (_) {}
  localStorage.removeItem("cart");
  localStorage.removeItem("userId");
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  window.location.reload();
}
