'use strict';

// Получаем кнопки для переключения слайдов и элементы слайдера.
const prevButton = document.querySelector(".previous-btn");
const nextButton = document.querySelector(".next-btn");
const imgElements = document.querySelectorAll(".slider__img");
const sliderDots = document.querySelector(".slider__dots");

// Функция для переключения изображений и активации соответствующих точек.
function switchImage(element, index) {
  const imgList = [...element.querySelectorAll("img")];
  const activeImg = element.querySelector(".active");
  const dots = document.querySelectorAll(".dot");

  if (activeImg) {
    activeImg.classList.remove("active");
    dots.forEach((dot) => dot.classList.remove("active"));
  }

  imgList[index].classList.add("active");
  dots[index].classList.add("active");
};

// Обработчик событий для кнопки previous
prevButton.addEventListener("click", () => {
  imgElements.forEach((element) => {
    const imgList = [...element.querySelectorAll("img")];
    const activeIndex = imgList.indexOf(element.querySelector(".active"));
    const prevIndex = activeIndex === 0 ? imgList.length - 1 : activeIndex - 1;

    switchImage(element, prevIndex);
  });

});

// Обработчик событий для кнопки next
nextButton.addEventListener("click", () => {
  imgElements.forEach((element) => {
    const imgList = [...element.querySelectorAll("img")];
    const activeIndex = imgList.indexOf(element.querySelector(".active"));
    const nextIndex = activeIndex === imgList.length - 1 ? 0 : activeIndex + 1;

    switchImage(element, nextIndex);
  });
});

// Обработчик событий для клика по точкам слайдера
sliderDots.addEventListener("click", (event) => {
  const targetDot = event.target;
  if (targetDot.classList.contains("dot")) {
    const dotIndex = Array.from(sliderDots.querySelectorAll(".dot")).indexOf(
      targetDot
    );
    imgElements.forEach((element) => switchImage(element, dotIndex));
  }
});

// Создаем точки для каждого изображения слайдера
document.querySelectorAll(".slider__img img").forEach(() => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  sliderDots.appendChild(dot);
});

// Устанавливаем первую точку как активную.
sliderDots.firstElementChild.classList.add("active");



