<?php require_once '../../includes/header.php'; ?>

<div class="container">

    <h1 class="logo">Nupp</h1>

    <div class="form-panel">
        <div class="form-header">
            <h2>Inicia sesión con tu cuenta</h2>
        </div>

        <form action="#" method="post" id="login">

            <div class="group-form">

                <div class="form-input">
                    <label for="loginUsername">Nombre de usuario</label>
                    <div class="input-icon">
                        <i class="fas fa-user"></i>
                    </div>
                    <input type="text" name="loginUsername" placeholder="Usuario" autofocus>
                </div>

                <div class="form-input">
                    <label for="loginUsername">Contraseña</label>
                    <div class="input-icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <input type="password" name="loginPassword" placeholder="Contraseña" required>
                    <div class="input-icon-eye">
                        <i class="far fa-eye"></i>
                    </div>
                </div>

            </div>

            <div class="alertMessage"></div>

            <div class="form-btn">
                <button type="submit" name="login-btn" id="login-btn" class="btn">Iniciar sesión</button>
            </div>

        </form>

        <div class="form-footer">
            <p>¿No tienes cuenta? <a href="signin.php">Regístrate</a></p>
        </div>
    </div>

</div>

<?php require_once '../../includes/footer.php'; ?>