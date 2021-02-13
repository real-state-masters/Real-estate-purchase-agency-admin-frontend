export default async function getProperties(URI, token) {
  const res = await fetch(URI, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return await res.json();
}
