
function counts() {
    setInterval(counts, 1000);
    $(function () {
      $('.menu-btn').on('click', function () {
        $('.menu-list').toggleClass('menu-list--active');
      });
    });
}