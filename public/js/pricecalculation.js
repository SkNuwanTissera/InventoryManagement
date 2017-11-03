/**
 * Created by ntissera on 10/30/2017.
 */
var total
$(function() {

    $('#qty1').keyup(function() {
        updateTotal1();
    });

    $('#price1').keyup(function() {
        updateTotal1();
    });

    var updateTotal1 = function () {
        var input11 = parseInt($('#qty1').val());
        var input21 = parseInt($('#price1').val());
        if (isNaN(input11) || isNaN(input21)) {
            if (!input21) {
                $('#total1').val($('#qty1').val());
            }

            if (!input11) {
                $('#total1').val($('#price1').val());

            } else {
                $('#total1').val(input11* input21);
            }

    }
        $('#total1').val(input11 * input21);
        ;



    }});

/**
 * Created by ntissera on 10/30/2017.
 */

$(function() {



        $('#qty2').keyup(function() {
            updateTotal2();
        });

        $('#price2').keyup(function() {
            updateTotal2();
        });

        var updateTotal2 = function () {
            var input12 = parseInt($('#qty2').val());
            var input22 = parseInt($('#price2').val());
            if (isNaN(input12) || isNaN(input22)) {
                if (!input22) {
                    $('#total2').val($('#qty2').val());
                }

                if (!input12) {
                    $('#total2').val($('#price2').val());

                } else {
                    $('#total2').val(input12 * input22);
                }

            }
            $('#total2').val(input12 * input22);
            ;


                        }});


$(function() {


    $('#qty3').keyup(function() {
        updateTotal3();
    });

    $('#price3').keyup(function() {
        updateTotal3();
    });

    var updateTotal3 = function () {
        var input13 = parseInt($('#qty3').val());
        var input23 = parseInt($('#price3').val());
        if (isNaN(input13) || isNaN(input23)) {
            if (!input23) {
                $('#total3').val($('#qty3').val());
            }

            if (!input13) {
                $('#total3').val($('#price3').val());

            } else {
                $('#total3').val(input13 * input23);
            }

        }
        $('#total3').val(input13 * input23);
        ;



    }});


$(function() {

    $('#qty4').keyup(function() {
        updateTotal4();
    });

    $('#price4').keyup(function() {
        updateTotal4();
    });

    var updateTotal4 = function () {
        var input14 = parseInt($('#qty4').val());
        var input24 = parseInt($('#price4').val());
        if (isNaN(input14) || isNaN(input24)) {
            if (!input24) {
                $('#total4').val($('#qty4').val());
            }

            if (!input1) {
                $('#total4').val($('#price4').val());

            } else {
                $('#total4').val(input14 * input24);
            }

        }
        $('#total4').val(input14 * input24);
        ;


}});


$(function() {

    $('#qty5').keyup(function() {
        updateTotal5();
    });

    $('#price5').keyup(function() {
        updateTotal5();
    });

    var updateTotal5 = function () {

        var input15 = parseInt($('#qty5').val());
        var input25 = parseInt($('#price5').val());
        if (isNaN(input15) || isNaN(input25)) {
            if (!input25) {
                $('#total5').val($('#qty5').val());
            }

            if (!input15) {
                $('#total5').val($('#price5').val());

            } else {
                $('#total5').setValue(input15 * input25);
            }

        }
        $('#total5').val(input15 * input25);






}




});

$(function() {

    $('#price5').keyup(function() {
        x();
    });
    $('#price1').keyup(function() {
        x();
    });
    $('#price2').keyup(function() {
        x();
    });
    $('#price3').keyup(function() {
        x();
    });
    $('#price4').keyup(function() {
        x();
    });


    var x = function () {
        var total1 = parseInt($('#total1').val());
        var total2 = parseInt($('#total2').val());
        var total3 = parseInt($('#total3').val());
        var total4 = parseInt($('#total4').val());
        var total5 = parseInt($('#total5').val());

        if(isNaN(total1))total1=0;
        if(isNaN(total2))total2=0;
        if(isNaN(total3))total3=0;
        if(isNaN(total4))total4=0;
        if(isNaN(total5))total5=0;

        $('#Finaltotal').val(total1+total2+total3+total4+total5);
    }

});