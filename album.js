const param = new URLSearchParams(window.location.search);
console.log(param);
const productId = param.get("id");
console.log("RESOURCE ID: ", productId);

if (productId) {
  fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=hip-hop&album" +
      productId,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "971f3683c1mshd0d96937de5880fp110e78jsn1242e8b2381c",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log("API Response:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
