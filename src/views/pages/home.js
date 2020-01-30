export default() => {
    
    const homePage = `
    <main class="main-container"></main>
        <div class="content">
        <div class="logo">
            <img src="/src/images/dog-paw.svg" alt="Logo">
            <p class="text-logo">OurPets</p>
        </div>  
        <h1 class="title f-open">Te damos la bienvenida a Ourpets</h1>
        <h3 class="f-open sub-title">Encuentra nuevas ideas para los mas queridos en casa </h3>
        <a class="f-open cta-start" href="#/signin">Conoce más</a>
        <footer class="f-open white footer">Copyright 2020 &copy; Created by Geo, Lau y Moni.</footer>
        </div>
    `;

    const divHome = document.createElement('div');
    divHome.innerHTML = homePage;
    return divHome;
};
