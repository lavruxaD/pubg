//импорт из node-modules
import $ from "jquery";
import "slick-carousel";
import "./tastySelect.min.js";
import mixitup from "mixitup";

$(function () {
  $(".burger-menu__btn").on("click", function () {
    $(".header__top-menu").toggleClass("header__top-menu--active");
  });
  $(".header__top-link").on("click", function () {
    $(".header__top-menu").removeClass("header__top-menu--active");
  });

  $(".questions__content-item__top").on("click", function () {
    $(this).next().slideToggle(500);
    if (
      $(this)
        .find(
          ".questions__content-item__top-arrow .questions__content-item__top-arrow__close"
        )
        .css("display") == "none"
    ) {
      $(this)
        .find(
          ".questions__content-item__top-arrow .questions__content-item__top-arrow__close"
        )
        .css("display", "block");
      $(this)
        .find(
          ".questions__content-item__top-arrow .questions__content-item__top-arrow__open"
        )
        .css("display", "none");
    } else {
      $(this)
        .find(
          ".questions__content-item__top-arrow .questions__content-item__top-arrow__close"
        )
        .css("display", "none");
      $(this)
        .find(
          ".questions__content-item__top-arrow .questions__content-item__top-arrow__open"
        )
        .css("display", "block");
    }
  });

  $(".tarif__content-tab").on("click", function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass("tarif__content-tab--active");
    $($(this).parent().siblings().find("div")).removeClass(
      "tarif__content-items--active"
    );

    $(this).addClass("tarif__content-tab--active");
    $($(this).attr("href")).addClass("tarif__content-items--active");
  });

  $(".function__mobile-top__content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow:
      '<img class="function-slider-left" src="images/function-slider-right.svg" alt="arrow-left">',
    nextArrow:
      '<img class="function-slider-right" src="images/function-slider-right.svg" alt="arrow right">',
    responsive: [
      {
        breakpoint: 375,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".comments__content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow:
      '<img class="comments-slider-left" src="images/comments-arrow-slider.png" alt="arrow-left">',
    nextArrow:
      '<img class="comments-slider-right" src="images/comments-arrow-slider-r.png" alt="arrow right">',
    responsive: [
      {
        breakpoint: 375,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  tastySelect({ mobileFix: false });

  var mixer = mixitup(".function__info-content", {
    load: {
      filter: ".box-c",
    },
  });
});
