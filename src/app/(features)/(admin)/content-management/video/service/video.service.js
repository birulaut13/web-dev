export const fetchVideos = async () => {
  try {
    const response = await fetch("/api/video/getAll", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch video data");
    }
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateVideo = async (id, body) => {
  try {
    const response = await fetch(`/api/video/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("service: Failed to fetch video data");
    }
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
