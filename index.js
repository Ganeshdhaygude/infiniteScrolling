const container = document.getElementById("container");

const url =
  "https://api.unsplash.com/photos/random/?client_id=_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY&count=20";

const fetchImage = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.forEach((ele) => {
      console.log(ele.urls.small);
      const img = document.createElement("img");
      img.src = ele.urls.small;
      container.appendChild(img);
    });
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

window.addEventListener("scroll", () => {
  console.log(window.innerHeight);
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    fetchImage();
  }
});

fetchImage();
