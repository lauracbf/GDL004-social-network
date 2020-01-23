export default() => {
    const signIn = `
        <h1 class="mainHeader">Our<i class="fab fa-suse"></i>Pets</h1>
        <form class="sign-in-form">
            <div class="section-sign-in">
                <label for="email-input">Email</label>
                <input type="email" id="email-input" placeholder="Ingresa tu E-mail..."/>
        
                <label for="password-input">Password</label>
                <input type="password" id="password-input" placeholder="Ingresa to password..."/>
            
                <a id="signInButton" href="#/sign-in">Sign In</a>

                <p class="spacer"><i class="fas fa-bone"></i>OR<i class="fas fa-bone"></i></p>

                <p class="">Sign in with:</p>

                <ul class="social-sign-in">
                    <li><a href="#"><i class="fab fa-google"></a></i></li>
                    <li><a href="#"><i class="fab fa-facebook-f"></a></i></li>
                    <li><a href="#"><i class="fab fa-github"></i></a></i></li>
                </ul>
                
                <p>Don't have an account?<a href="#">SIGN UP</a></p>
            </div>
        </form> 
    `;

    const divSignIn = document.createElement('div');
    divSignIn.innerHTML = signIn;
    return divSignIn;
    
};

