export default() => {
    const register = `
        <h1>Register form</h1>

            <form class="register-form" id="register-form"> 

                <input type="email" name="newEmail" id="email" placeholder="Enter your E-mail...">
                <input type="password" name="newPassword" id="pass" placeholder="Enter your password...">
                <button id="sendInformation">Register</button>

            </form>
    `;

    const divRegister = document.createElement('div');
    divRegister.innerHTML = register;
    return divRegister;
};

