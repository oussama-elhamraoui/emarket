$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('[data-add-to-cart]').click(function(e) {
        alert('اضف المنتج لعربة الشراء');
        e.stopPropagation();
    });
});