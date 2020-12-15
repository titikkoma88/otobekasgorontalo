// event pada saat link di klik

$('.page-scroll').on('click', function() {

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    //pindahkan scroll

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'swing');

    e.preventDefault();

});

$('.nav-item').on('click', function() {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');

});

$(document).ready(function() {

    // Scroll spy
    $('body').scrollspy({
        target: "#main-nav",
        offset: 60
    });

});

function telp() {
    swal("Good job!", "HP 082346464631", "success");
};

$(document).ready(function() {
    $('.xzoom, .xzoom-gallery').xzoom({
        zoomWidth: 500,
        title: false,
        tint: '#333',
        xoffset: 15
    });
});