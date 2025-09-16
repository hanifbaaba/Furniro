const API_URL = "https://furniro-7nnb.onrender.com/api/";

export async function apiFetch(endpoint, options = {}) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const res = await fetch(API_URL + endpoint, {
    ...options,
    headers: { ...headers, ...options.headers },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.detail || "API request failed");
  }

  return res.json();
}
