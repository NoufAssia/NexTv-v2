const API_URL = "https://6af3246ed2377d6c370496dd.mockapi.io/api/v1/channels";

export async function updateData(){
const response = await fetch(API_URL);
const channels = await response.json();

for(const channel of channels){
    await fetch(`${API_URL}/${channel.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({isFavorite: false, isBlacklisted: false}),
        });
    console.log(`good ${channel.name}`);
    }
    console.log("termine");}
