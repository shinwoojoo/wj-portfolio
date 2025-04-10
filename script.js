let btns = document.querySelector(".btns");
let contents = document.querySelectorAll(".content");
let btnsChildren = btns.children;
const mainText = document.querySelector(".main_text");
const con2 = document.querySelector(".con2");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollLocation = document.documentElement.scrollTop;

  if (scrollLocation >= 10) {
    mainText.classList.add("hidden");
    con2.classList.add("visible");
    header.classList.add("visible");
  } else {
    mainText.classList.remove("hidden");
    con2.classList.remove("visible");
    header.classList.remove("visible");
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
      top: contents[[...btns.children].indexOf(e.target)].offsetTop + 100,
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
console.log(document.querySelector(".swiper"));
