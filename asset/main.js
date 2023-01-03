$(document).ready(function () {
    AOS.init();
    limititem();
    preloader();

    // Auth
    showHideFormAuth()

    // Kategori
    changeCategory()
});

function preloader () {
    let delay = 1000;
    setTimeout(function () {
        $('.loading').fadeOut();
    }, delay);
    
    // $(window).on('load', function () {
    //     $('.loading').fadeOut();
    // });
}

function limititem () {
    // Menyebunyikan semua item
    $('.product-list .product-item').hide();

    // Menampilkan 5 item pertama
    $('.product-list').children('.product-item:lt(10)').show();
    let res = $('.product-list').children('.product-item:hidden:lt(10)').hide();

    if (res.length == 0) {
        $('.btn-load-more').hide();
    }

    // Jika button load more ditekan 5 item akan muncul sampai habis
    $('.btn-load-more').click(function (e) {
        let res = $('.product-list').children('.product-item:hidden:lt(10)').show();

        // Jika item habis maka button akan hilang
        if (res.length <= 10) {
            $('.btn-load-more').hide();
        }
    });
}

// Auth
function showHideFormAuth () {
    $('#btn-any-have-account').click(function () {
        $('#box-login').addClass('d-none');
        $('#box-register').removeClass('d-none');
    })
    $('#btn-have-account').click(function () {
        $('#box-login').removeClass('d-none');
        $('#box-register').addClass('d-none');
    })
}

// Kategori
function changeCategory () {
    $('#select-kategori').change(function () {
        let valueKategori = $('#select-kategori').val()
        if (valueKategori === "modis") {
            $('.modis').removeClass('d-none')
            $('.sport').addClass('d-none')
            $('.school').addClass('d-none')
        }else if (valueKategori === "sport") {
            $('.modis').addClass('d-none')
            $('.sport').removeClass('d-none')
            $('.school').addClass('d-none')
        }else if (valueKategori === "school") {
            $('.modis').addClass('d-none')
            $('.sport').addClass('d-none')
            $('.school').removeClass('d-none')
        }else {
            $('.modis').removeClass('d-none')
            $('.sport').removeClass('d-none')
            $('.school').removeClass('d-none')
        }
    })
}