export async function fetchAvailablePlaces() {
  const res = await fetch("http://localhost:3000/Places");
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch available places");
  }
  return data.places;
}

export async function fetchUserPlaces() {
  const res = await fetch("http://localhost:3000/user-places");
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch user-places");
  }
  return data.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-Places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed to update user data");
  }
  return data.message;
}
