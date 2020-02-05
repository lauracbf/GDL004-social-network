export default() => {
    const register = `
        <main class="main-container"></main>
        <div class="container-form-signIn">
        <div class="form-signIn">
        <img src="/src/images/dog-paw.svg" alt="Logo" class="foot-print"> 
        <p class="signIn-logo">OurPets</p>
        <p class="title f-open">Registrate</p>

            <form class="sign-in-form" id="register-form"> 

                <input class="f-open" type="email" name="newEmail" id="email" placeholder="E-mail...">
                <input class="f-open" type="password" name="newPassword" id="pass" placeholder="Password...">
                <button class="f-open cta-start submit" id="sendInformation">Register</button>

            </form>
            <p class="spacer f-open"><i class="fas fa-bone"></i>OR<i class="fas fa-bone"></i></p>

            <p class="f-open">Sign in with:</p>

            <ul class="social-sign-in">
                <li id= "button-Google"><i class="fab fa-google"></i></></li>
                <li><i class="fab fa-github"></i></li>
                <li><i class="fab fa-facebook-f"></i></li>
            </ul>
            
            <p class="f-open translate">Are you a member?<a href="#/signin"><br><small>SIGN IN</small></a></p>
            </div>
            </div>
    `;

    const divRegister = document.createElement('div');
    divRegister.innerHTML = register;
    return divRegister;
};

