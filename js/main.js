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


    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    });

    /*$('.sponsors__images').slick({
        arrows: false,
        mobileFirst: true,
        slidesToShow: 2,
        dots: true, 
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    });*/
           
           

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });


});

