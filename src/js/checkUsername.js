(function() {

    $usernameInput = $('#username');
    $usernameMsg = $('.username-msg');

    function checkUsername(username) {

        if (username.length == 0) {
            $usernameMsg.text('Debes poner un nombre de usuario');
            return;
        }

        $.ajax({
            type: "GET",
            url: "../../config/checkusername.php?user=" + username,
            dataType: "text",
            beforeSend: function() {
                $usernameMsg.html('<div class="cssload-spin-box"></div>');
            },
            success: function(response) {
                $usernameMsg.html(response);
            }
        });
    }
    $usernameInput.on('blur', function() {
        checkUsername($(this).val());
    });
})();