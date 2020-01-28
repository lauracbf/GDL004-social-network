export default() => {
    const signIn = `
        <h1 class="mainHeader">Our<i class="fab fa-suse"></i>Pets</h1>

        <form class="sign-in-form" id="signInForm">
            
                <label for="email-input">Email</label>
                <input name="userEmail" type="email" id="email-input" placeholder="Ingresa tu E-mail..."/>
        
                <label for="password-input">Password</label>
                <input name="userPassword" type="password" id="password-input" placeholder="Ingresa to password..."/>
            
                <button id="getInfo">Sign In</button>

                <p class="spacer"><i class="fas fa-bone"></i>OR<i class="fas fa-bone"></i></p>

                <p class="">Sign in with:</p>

                <ul class="social-sign-in">
                    <li><a href="#"><id= "button-Google"><i class="fab fa-google"></a></i></li>
                    <li><a href="#"><i class="fab fa-facebook-f"></a></i></li>
                    <li><a href="#"><i class="fab fa-github"></i></a></i></li>
                </ul>
                
                <p>Don't have an account?<a href="#/register">SIGN UP</a></p>
        </form> 
    `;

    const divSignIn = document.createElement('div');
    divSignIn.innerHTML = signIn;
    return divSignIn;
};

