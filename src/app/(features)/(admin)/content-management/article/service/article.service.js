export const fetchArticles = async () => {
  try {
    const response = await fetch("/api/article/getAll", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch article data");
    }
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateArticle = async (id, body) => {
  try {
    const response = await fetch(`/api/article/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("service: Failed to fetch article data");
    }
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticle = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/article/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete article");
    }

    const data = await response.json();
    console.log(data);
    return data.message || "Article deleted successfully";
  } catch (error) {
    console.log(error);
  }
};
