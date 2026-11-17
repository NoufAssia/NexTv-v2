const API_URL = "https://6af3246ed2377d6c370496dd.mockapi.io/api/v1/channels";

export async function dataFetch() {
  try {
    console.log("fech strated");
    const response = await fetch(API_URL);

    // const response = new Response(null, {
    //   status: 500,
    //   statusText: "Internal  Error",
    // });
    console.log("http status", response.status);
    console.log("http ok", response.ok);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Channels not found. Please try again.");
      }
      if (response.status === 500) {
        throw new Error("Server error. we're working to fix it.");
      }
      throw new Error("Something went wrong. Please try again.");
    }
    const channels = await response.json();
    console.log("data received:", channels);
    return channels;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

// update the favorite and blacklist

export async function updateChannel(channelId, channelData) {
  const response = await fetch(`${API_URL}/${channelId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(channelData),
  });
  if (!response.ok) {
    throw new Error("something went wrong with fetching");
  }
  return await response.json();
}


//add a new channel

export async function addChannel(channelObject){
  const response = await fetch (API_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(channelObject),
  });
  if(!response.ok){
    throw new Error("error with fetch in addChannel");
  }
  return await response.json();
}

//delete a channel

export async function deleteChannel(channelId){
  const response = await fetch(`${API_URL}/${channelId}`, {
    method: "DELETE",
  });
  if(!response.ok){
    throw new Error("error with fetch in  deleteChannel");
  }
  return true;
}