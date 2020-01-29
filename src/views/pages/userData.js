export default() => {
    const userPreferences = `

    <h1 class="mainHeader">About you</h1>

    <form class="sign-in-form" id="userDataForm">

            <h3>Elige un Nombre de Usuario</h3>

            <label for="nick-name">Usuario</label>
            <input name="userNickName" type="text" id="nick-name" placeholder="Igresa un nombre de usuario..."/>
            <br>

            <h3>¿Cúal es tu mascota favorita?</h3>

            <label for="userPet">Mi mascota</label>
            <input name="userPet" type="text" id="userPet" placeholder="Mi mascota favorita es..."/>

            <h3>Cuentanos Sobre Ti y tu mascota</h3>

            <textarea rows="4" cols="50" name="aboutYou" placeholder="Dedica unas palabras a la comunidad..."></textarea>

            <h3>Enviar Información</h3>
        
            <button id="getInfo">Send Info</button>
    
    </form> 
    
           
    
    `

    const divUserData = document.createElement('div');
    divUserData.innerHTML = userPreferences;
    return divUserData;
}