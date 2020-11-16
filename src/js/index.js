(function() {

    var $inputs = $('input');

    $inputs.on('focus', function() {
        $(this).css({ 'border-color': '#46469b' });
        $(this).on('blur', function() {
            $(this).css({ 'border-color': '#ccc' });
        });
    });

    function dangerAlert(message) {
        $('.group-form').after(function() {
            $div = $('<div class="alert alert-danger">').text(message);
            console.log($div);
            return $div;
        });
        $('.alert').delay(5000).fadeOut(3000);
    }

    function checkValoresInput() {
        var vacio = false;
        $inputs.each(function() {
            if ($(this).val() == '') {
                $(this).css({ 'border-color': '#ff0000' });
                vacio = true;
            }
        });
        if (vacio) {
            dangerAlert('Faltan datos');
        }
        return vacio;
    }

    $('#signin-btn').click(function(e) { if (checkValoresInput()) { e.preventDefault(); } });
    $('#login-btn').click(function(e) { if (checkValoresInput()) { e.preventDefault(); } });

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