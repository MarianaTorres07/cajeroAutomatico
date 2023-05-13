const users = {  //Tener objetos dentro de otro objeto (clave:valor)    En otros lenguajes se llaman diccionarios.
        //El correo es la clave y todo después del : es su valor y al mismo tiempo el otro objeto tiene sus clave:valor
    'lunafelipe@gmail.com': {'nombre': 'Felipe Luna','password': '1','numcta': '313203045'},
    'peter@gmail.com': {'nombre': 'Pedro Valverde','password': '1234','numcta': '313234045'},
    'regi12@gmail.com': {'nombre': 'Regina Rios','password': 'regiesminombre','numcta': '3132234045'}
};

//Asigarle un listener al buttón de login a traves del DOM. 
const loginButton = document.getElementById('login');

//Esperar un evento. (Hasta cuando uno le haga click al button)
loginButton.addEventListener('click', function(e){

    //obtener el email por el ID de la parte HTML.
    const inputEmail = document.getElementById('inputEmail');
    //Para obtener el valor escrito de la parte del email.
    const email = inputEmail.value;

    //Para saber si el usuario esta registrado.
    //Si el email de usuario es differente a null.
    if(users[email] != null){
        const inputPassword = document.getElementById('inputPassword');
        //Para obtener el valor escrito de la parte de password.
        const contrasenia = inputPassword.value;
    
        console.log(contrasenia);

        //Validar contraseña y correo 
        if(users[email] ['password'] == contrasenia){
            //Para redireccionarnos a otro archivo html.
            // y obtener el numero de cuenta del usuario [concatenación]
            window.location.href = '/htmls/cajero.html?numcta=' + users[email] ['numcta'];

        } else{
            alert('Verifica tu contraseña');
        }
        

    } else{
        //alert lanza una pequeña ventana en la pantalla.
        alert('No esta el email registrado');
    }

});