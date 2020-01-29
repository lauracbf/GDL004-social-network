export default() => {
    const profile = `
       <h1>Profile</h1>

       <button>Cerrar Sesión</button>
    `;

    const divSignIn = document.createElement('div');
    divSignIn.innerHTML = profile;
    return divSignIn;
};

