$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('[data-add-to-cart]').click(function(e) {
        alert('اضف المنتج لعربة الشراء');
        e.stopPropagation();
    });
    $('.product-option input[type="radio"]').change(size);

    function size() {
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    }
    $('[data-product-quantity]').change(function() {
        var newQuantity = $(this).val();

        //ابحث عن السطر الذي يحتوي معلومات هذا المنتج
        var $parent = $(this).parents('[data-product-info]')

        //اجلب سعر القطعة الواحدة من معلومات المنتج
        var pricePerUnit = $parent.attr('data-product-price')

        //السعر الاجمالي للمنتج هو سعر القطعة مضروباً بعددها
        var totalPriceForProduct = newQuantity * pricePerUnit;

        //عين السطرالجديد ضمن خلية السعر الاجمالي للمنتج في هذا السطر
        $parent.find('.total-price-for-product').text(totalPriceForProduct + '$');

        calculateTotalPrice()
    });
    $('[data-remove-from-cart]').click(function() {

    })

    function calculateTotalPrice() {
        //انشئ متغير جديدا لحفظ السعر الاجمالي
        var totalPriceForAllProducts = 0;

        //لكل سطر يمثل معلومات المنتج في الصفحة
        $('[data-product-info]').each(function() {

            //اجلب سعر القطعة الواحدة من الخاصة الموافقة
            var pricePerUnit = $(this).attr('data-product-price');

            //اجلب كمية المنتج من حقل اختيار الكمية
            var quantity = $(this).find('[data-product-quantity]').val();

            var totalPriceForProduct = pricePerUnit * quantity;

            totalPriceForAllProducts = totalPriceForAllProducts + totalPriceForProduct;

        });
        $('[data-remove-from-cart]').click(function() {
            $(this).parents('[data-product-info]').remove();
            calculateTotalPrice();
        });

        //حدث السعر الاجمالي لكل المنتجات في الصفحة
        $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');
    }
    calculateTotalPrice();

    var citiesByCountry = {
        sa: ['جدة', 'الرياض'],
        ma: ['الحسيمة', 'طنجة'],
        eg: ['القاهرة', 'الإسكندرية'],
        sy: ['حلب', 'دمشق']
    };
    $('#form-checkout select[name=country]').change(function() {

        var country = $(this).val();

        var cities = citiesByCountry[country];

        $('#form-checkout select[name="city"]').empty();
        $('#form-checkout select[name="city"]').append('<option disabled selected value="">إختر مدينة</option>');
        cities.forEach(function(city) {
            var $newOption = $('<option></option>');
            $newOption.text(city);
            $newOption.val(city);

            $('#form-checkout select[name="city"]').append($newOption);
        });
    });
    $("input[name='payment-method']").change(function() {

        var paymentMethod = $(this).val();

        if (paymentMethod == 'on-delivery') {
            $("#credit-card-info input").prop('disabled', true);
        } else {
            $("#credit-card-info input").prop('disabled', false);;
        };
        $("#credit-card-info").toggle();
    });

});