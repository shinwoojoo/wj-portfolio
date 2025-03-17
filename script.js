let contents = document.querySelectorAll(".content");
let btns = document.querySelector(".btns");
let con2 = document.querySelector(".con2");
let btnsChildren = btns.children;
con2.setAttribute("style", "opacity: 0; transform: translateY(50vh)");
window.addEventListener("scroll", () => {
  let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
  let mainText = document.querySelector(".main_text");
  let header = document.querySelector("header");
  mainText.setAttribute("style", "opacity: 1;");
  header.setAttribute("style", "opacity: 0;");

  if (scrollLocation >= 10 && mainText.getAttribute("style") == "opacity: 1;") {
    mainText.setAttribute("style", "opacity: 0; transform: translateY(-50vh);");
    con2.setAttribute("style", "opacity: 1;");
  } else {
    mainText.setAttribute("style", "opacity: 1;");
    con2.setAttribute("style", "opacity: 0; transform: translateY(50vh)");
  }
  if (scrollLocation >= 10 && header.getAttribute("style") == "opacity: 0;") {
    header.setAttribute("style", "opacity: 1;");
  } else {
    header.setAttribute("style", "opacity: 0;");
  }
});
window.scrollTo({ top: 0 });
// window.scrollTop = 0;

btns.addEventListener("click", (e) => {
  console.log(
    contents[[...btns.children].indexOf(e.target)].offsetTop,
    contents[[...btns.children].indexOf(e.target)].getBoundingClientRect().y
  );
  if (e.target != e.currentTarget) {
    console.log([...btns.children].indexOf(e.target));
    window.scrollTo({
      top: contents[[...btns.children].indexOf(e.target)].offsetTop - 50,
      left: 100,
      behavior: "smooth",
    });
  }
});

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        [...btnsChildren].forEach((item) => {
          item.setAttribute("style", "border-bottom: 0px solid black;");
        });
        btnsChildren[[...contents].indexOf(entry.target)].setAttribute(
          "style",
          "border-bottom: 5px solid black;"
        );
      }
    });
  },
  {
    threshold: 0.9, // 90% 이상 보이면 감지
  }
);

// 감지할 요소 선택

contents.forEach((el) => {
  observer.observe(el);
});
