
export default class TorrenceBanner extends HTMLElement {
  connectedCallback() {
    const fullSize = document.getElementById("fullsize");
    const smallSize = document.getElementById("smallsize");

    window.addEventListener("scroll", (ev) => {
      if (window.scrollY > 300) {
        fullSize.style.display = "none";
        smallSize.style.display = "block";
        this.style.boxShadow = "0 0 .5em rgba(0, 0, 0, .5)";
      } else if (window.scrollY < 50) {
        fullSize.style.display = "block";
        smallSize.style.display = "none";
      }
    });
  }


}


