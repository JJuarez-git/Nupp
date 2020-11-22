(function() {

    function dangerAlert(message) {
        if ($('.alertMessage').children().length <= 1) {
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

    var $inputs = $('input');
    var $usernameInput = $('#username');
    var $usernameMsg = $('.username-msg');

    function checkUsername(username) {

        if (username.length == 0) { return; }

        $.ajax({
            type: "GET",
            url: "../../config/checkUsername.php?user=" + username,
            dataType: "text",
            beforeSend: function() {
                $usernameMsg.html('<div class="cssload-spin-box"></div>');
            },
            success: function(response) {
                $usernameMsg.html('');
                if (response !== '') {
                    dangerAlert(response);
                    $inputs.eq(1).css({ 'border-color': '#ff0000' });
                } else {
                    $('.alert').remove();
                    $inputs.eq(1).css({ 'border-color': '#00cc00' });
                }
            }
        });
    }
    $usernameInput.on('blur', function() {
        checkUsername($(this).val());
    });
})();