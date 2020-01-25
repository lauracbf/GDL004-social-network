export default() => {
    const profile = `
       <h1>Profile</h1>
    `;

    const divSignIn = document.createElement('div');
    divSignIn.innerHTML = profile;
    return divSignIn;
};

