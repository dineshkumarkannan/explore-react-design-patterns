const API_BASE = "https://jsonplaceholder.typicode.com";

export const getPost = async (id) => {
  try {
    const res = await fetch(`${API_BASE}/posts/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch post:", error);
    throw new Error(error.message || "Network error");
  }
};

export const getComments = async (id) => {
  try {
    const res = await fetch(`${API_BASE}/posts/${id}/comments`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch comments:", error);
    throw new Error(error.message || "Network error");
  }
};

export const addComments = async (id, body) => {
  try {
    const res = await fetch(`${API_BASE}/posts/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to add comment:", error);
    throw new Error(error.message || "Network error");
  }
};
