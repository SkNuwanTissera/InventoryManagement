/**
 * Created by ntissera on 10/30/2017.
 */

$(function() {

    $('#qty').keyup(function() {
        updateTotal();
    });

    $('#price').keyup(function() {
        updateTotal();
    });

    var updateTotal = function () {
        var input1 = parseInt($('#qty').val());
        var input2 = parseInt($('#price').val());
        if (isNaN(input1) || isNaN(input2)) {
            if (!input2) {
                $('#total').val($('#qty').val());
            }

            if (!input1) {
                $('#total').val($('#price').val());

            } else {
                $('#total').val(input1 * input2);
            }
        }
        ;

    }});