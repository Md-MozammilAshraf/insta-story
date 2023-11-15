var arr = [
  {
    dp: "faizal.jpeg",
    story: "pic1.jpeg",
    name: "fizz_5z",
    url: "https://instagram.com/fizz_5z?igshid=OGQ5ZDc2ODk2ZA==",
  },
  {
    dp: "ashraf1.jpeg",
    story: "ashraf2.jpeg",
    name: "ashraf_since..",
    url: "https://instagram.com/ashraf_since_2002?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==",
  },
  {
    dp: "varad.jpeg",
    story: "varad2.jpeg",
    name: "varadraj.k_off..",
    url: "https://instagram.com/varadraj.k_official?igshid=OGQ5ZDc2ODk2ZA==",
  },
  {
    dp: "sam.jpeg",
    story: "bike.jpeg",
    name: "sam.khxn_",
    url: "https://instagram.com/sam.khxn_?igshid=OGQ5ZDc2ODk2ZA==",
  },
  {
    dp: "veda.jpeg",
    story: "veda3.jpeg",
    name: "vedant_ran..",
    url: "https://instagram.com/vedant_ransingh_?igshid=OGQ5ZDc2ODk2ZA==",
  },
  {
    dp: "faizal.jpeg",
    story: "pic.jpeg",
    name: "fizz_5z",
    url: "https://instagram.com/fizz_5z?igshid=OGQ5ZDc2ODk2ZA==",
  },
];

var storiyan = document.querySelector("#storiyan");
var clutter = "";
arr.forEach(function (elem, idx) {
  console.log(elem, idx);
  clutter += ` 
  <div class="st-name-cont">
  <div class="story-ka-parent">
  <div class="story">

    <img class="st-img" id="${idx}" src="${elem.dp}" alt="">
      </div>
      </div>
      <a href=${elem.url}>${elem.name}</a>
      </div>
      `;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 2500);
});
