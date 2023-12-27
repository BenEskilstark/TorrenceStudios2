
export default class TorrenceBanner extends HTMLElement {
  connectedCallback() {
    const fullSize = document.getElementById("fullsize");
    const smallSize = document.getElementById("smallsize");
    const links = document.getElementById("links");
    const space = document.getElementById("spacer");

    let STATE = "BIG"; // || SMALL

    window.addEventListener("scroll", (ev) => {
      if (window.scrollY > 300 && STATE == "BIG") {
        setSmall();
      } else if (window.scrollY < 50  && STATE == "SMALL") {
        setBig();
      }
    });

    const setBig = () => {
      STATE = "BIG";
      fullSize.style.display = "block";
      smallSize.style.display = "none";

      this.style.justifyContent = "center";
      spacer.style.display = "block";

      links.style.flexDirection = "column";
      links.style.alignItems = "end";
    };

    const setSmall = () => {
      STATE = "SMALL";
      fullSize.style.display = "none";
      smallSize.style.display = "block";

      this.style.justifyContent = "left";
      spacer.style.display = "none";

      links.style.flexDirection = "row";
      links.style.alignItems = "center";
    };
  }


}


