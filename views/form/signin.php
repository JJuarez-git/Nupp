<?php require_once '../../includes/header.php'; ?>

<div class="container">

    <h1 class="logo">Nupp</h1>

    <div class="form-panel">
        <div class="form-header">
            <h2>Regístrate de manera gratuita</h2>
        </div>

        <form action="#" method="post" id="signin">

            <div class="group-form">

                <div class="form-input required">
                    <label for="signinEmail">Email</label>
                    <div class="input-icon">
                        <i class="fas fa-mail-bulk"></i>
                    </div>
                    <input type="email" name="signinEmail" placeholder="Email" autofocus>
                </div>

                <div class="form-input required">
                    <label for="signinUsername">Nombre de usuario</label>
                    <div class="input-icon">
                        <i class="fas fa-user"></i>
                    </div>
                    <input type="text" name="signinUsername" id="username" placeholder="Usuario">
                </div>

                <div class="form-input required">
                    <label for="signinPassword">Contraseña</label>
                    <div class="input-icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <input type="password" name="signinPassword" placeholder="Contraseña">
                    <div class="input-icon-eye">
                        <i class="far fa-eye"></i>
                    </div>
                </div>

                <div class="form-input required">
                    <label for="signinPassword">Confirmar contraseña</label>
                    <div class="input-icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <input type="password" name="signinConfirmPassword" placeholder="Contraseña">
                    <div class="input-icon-eye">
                        <i class="far fa-eye"></i>
                    </div>
                </div>

            </div>

            <div class="username-msg"></div>

            <div class="alertMessage"></div>

            <div class="form-btn">
                <button type="submit" name="signin-btn" id="signin-btn" class="btn">Enviar</button>
            </div>

        </form>

        <div class="form-footer">
            <p>¿Tienes cuenta? <a href="login.php">Inicia sesíon</a></p>
        </div>
    </div>

</div>
<script src="../../src/js/checkUsername.js"></script>
<?php require_once '../../includes/footer.php'; ?>