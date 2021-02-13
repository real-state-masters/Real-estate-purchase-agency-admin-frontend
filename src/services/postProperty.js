export default async function postProperty(URI, token, data) {
  const res = await fetch(URI, {
    method: "POST",
    body: data,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return await res.json();
}
