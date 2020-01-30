export default() => {
    const signIn = `
        <main class="main-container"></main>
        <div class="container-form-signIn">
        <div class="form-signIn">
        <img src="/src/images/dog-paw.svg" alt="Logo" class="foot-print"> 
        <p class="signIn-logo">OurPets</p>
        <p class="title f-open">Te damos la Bienvenida</p>

        <form class="sign-in-form" id="signInForm">
            
                <label for="email-input" class="hidden">Email</label>
                <input class="f-open" name="userEmail" type="email" id="email-input" placeholder="E-mail..."/>
        
                <label for="password-input" class="hidden ">Password</label>
                <input class="f-open" name="userPassword" type="password" id="password-input" placeholder="Password..."/>
            
                <button class="f-open cta-start submit"  id="getInfo">Sign In</button>
        
        </form> 
        
                <p class="spacer f-open"><i class="fas fa-bone"></i>OR<i class="fas fa-bone"></i></p>

                <p class="f-open">Sign in with:</p>

                <ul class="social-sign-in">
                    <li id= "button-Google"><i class="fab fa-google"></i></></li>
                    <li><i class="fab fa-github"></i></li>
                    <li><i class="fab fa-facebook-f"></i></li>
                </ul>
                
                <p class="f-open translate">Don't have an account?<a href="#/register"><br><small>SIGN UP</small></a></p>
        </div>
        </div>
    `;

    const divSignIn = document.createElement('div');
    divSignIn.innerHTML = signIn;
    return divSignIn;
};

