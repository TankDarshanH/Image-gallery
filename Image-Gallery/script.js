const accessKey = "Zjtq8FoMWvY3OiNoro4t4ii3B1nk_OmkHQ-5_AAkSYI";
const container = document.getElementById("container");
const area = document.getElementById("area");
const Result = document.getElementById("result");
const showmore = document.getElementById("show-more");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = area.value;
  const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=100`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;
  // var div = document.getElementById("myDiv");
  while (Result.firstChild) {
    Result.removeChild(Result.firstChild);
  }

  results.map((result) => {
    // console.log("result :>> ", result);
    result.preview_photos.map((imagData) => {
      // console.log("imagData :>> ", imagData);
      const image = document.createElement("img");
      image.src = imagData.urls.small;
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.appendChild(image);
      Result.appendChild(imageLink);
      // return image;
    });
  });
    showmore.style.display="block";
}

container.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});


showmore.addEventListener('click' , () => {
  page++;
  searchImages();
})