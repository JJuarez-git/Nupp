(function() {

    function debounce(func, time) {
        var timeoutId;
        return function() {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            var context = this;
            var args = arguments;
            timeoutId = setTimeout(function() {
                func.apply(context, args);
            }, time);
        };
    }

    var $inputs = $('input');

    $inputs.on('focus', function() {
        $(this).css({ 'border-color': '#46469b' });
        $(this).on('blur', function() {
            $(this).css({ 'border-color': '#ccc' });
        });
    });

    function dangerAlert(message) {
        if ($('.alertMessage').children().length <= 2) {
            $('.alert').remove();
            $('.alertMessage').append(function() {
                $div = $('<div class="alert alert-danger">').text(message);
                return $div;
            });
        }
        var delay = 3000;
        var fade = 3000;
        $('.alert').delay(delay).fadeOut(fade);
    }

    function checkValores() {
        var vacio = false;
        $inputs.each(function() {
            if ($(this).val() == '') {
                vacio = true;
            }
        });
        return vacio;
    }

    function checkPasswords() {
        if ($inputs.eq(2).val() !== $inputs.eq(3).val()) {
            dangerAlert('Las contraseñas son diferentes');
            $('input:gt(1)').each(function() {
                $(this).css({ 'border-color': '#ff0000' });
            });
        }
    }

    function resaltaErrores() {
        if (checkValores()) {
            $inputs.each(function() {
                if ($(this).val() == '') {
                    $(this).css({ 'border-color': '#ff0000' });
                }
            });
            dangerAlert('Faltan datos');
        }
    }
    /*
    $inputs.eq(3).on('blur', checkPasswords);

    console.log($inputs.eq(2));
    console.log($inputs.eq(3));
*/
    var efficientCheck = debounce(resaltaErrores, 200);

    $('#signin-btn').on('click', function(e) {
        checkPasswords();
        if (checkValores()) {
            e.preventDefault();
            efficientCheck();
        }
    });

    $('#login-btn').on('click', function(e) {
        if (checkValores()) {
            e.preventDefault();
            efficientCheck();
        }
    });

    var $icon_eye = $('.input-icon-eye');

    $icon_eye.on('click', function(e) {

        var $target = $(e.target);

        if ($target.hasClass('fa-eye')) {
            $target.parent().prev().attr('type', 'text');
            $target.attr('class', 'far fa-eye-slash');

        } else if ($target.hasClass('fa-eye-slash')) {
            $target.parent().prev().attr('type', 'password');
            $target.attr('class', 'far fa-eye');
        }
    });

})();