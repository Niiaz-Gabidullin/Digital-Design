// const anchors = document.querySelector('a[href*="#"]');

// for (let anchor of anchors) {
//   anchor.addEventListener("click", function (event) {
//     event.preventDefault();
//     const blockId = anchor.getAttribute("href")
//     document.querySelector('' + blockId).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// }

window.onload = function () {
  let scrolled;
  let timer;
  document.getElementById("top").onclick = function () {
    scrolled = window.pageYOffset;
    scrollToTop();
  };
  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 100;
      timer = setTimeout(scrollToTop, 100);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }
};
