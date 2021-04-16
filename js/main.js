let date = new Date('May 1 2021 00:00:00');

function counts() {
    let now = new Date();
    gap = date - now;
    console.log(gap);
    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;
    console.log(days);

    if (gap < 0) {
        document.getElementById('timer').innerText = 'Time is up';
    } else {
        document.getElementById('d').innerText = days;
        document.getElementById('h').innerText = hours;
        document.getElementById('m').innerText = minutes;
        document.getElementById('s').innerText = seconds;
    }
}
counts();

setInterval(counts, 1000);



$(function () {

    $('.sponsors__images').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: '<img src="img/img-andrii/arrow-right.svg" class="slick-btn slick-next"></img>',
                    prevArrow: '<img src="img/img-andrii/arrow-left.svg" class="slick-btn slick-next"></img>'
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    nextArrow: '<img src="img/img-andrii/arrow-right.svg" class="slick-btn slick-next"></img>',
                    prevArrow: '<img src="img/img-andrii/arrow-left.svg" class="slick-btn slick-next"></img>'
                }
            },
            {
                breakpoint: 2048,
                settings: "unslick"
            },
        ]
    });

    $('.carousel__inner').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        nextArrow: '<img src="img/img-andrii/arrow-right.svg" class="slick-btn slick-next"></img>',
        prevArrow: '<img src="img/img-andrii/arrow-left.svg" class="slick-btn slick-next"></img>'
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

});


