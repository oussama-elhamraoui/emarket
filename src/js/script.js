$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('[data-add-to-cart]').click(function(e) {
        alert('اضف المنتج لعربة الشراء');
        e.stopPropagation();
    });
});
$('.product-option input[type="radio"]').change(size);

function size() {
    $(this).parents('.product-option').siblings().removeClass('active');
    $(this).parents('.product-option').addClass('active');
}