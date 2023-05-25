const API_BASE_URL = "http://localhost:5173";

export const signup = async (user) => {
  const response = await fetch(`${API_BASE_URL}/api/v1/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Signup failed");
  }

  return response.json();
};

export const login = async (user) => {
  const response = await fetch(`${API_BASE_URL}/api/v1/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};
