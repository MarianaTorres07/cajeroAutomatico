//De el numero de Cuenta de los usuario del index.js
//Una pequeña base de datos
let montos ={
    '313203045' : 8000,
    '313234045' : 1200,
    '3132234045' : 4000
}

//Conseguir la url del index.js
let url = new URL(window.location.href);
//Conseguir el num de cuenta.
let numcta = url.searchParams.get('numcta');

//Function para actualizar Saldo de usuario 
function actualizaSaldoActual(){
    const saldoActual =document.getElementById('saldoActual');
    saldoActual.innerHTML = '$' + montos[numcta];

//Llamar la función
}actualizaSaldoActual();

//Function para actualizar el número de cuenta de un usuario
function actualizaNumUsuario(){
    const numUsuario =document.getElementById('numUsuario');
    numUsuario.innerHTML = numcta;
    
//Llamar la función
}actualizaNumUsuario();

//INGRESAR MONTO
//Para los Buttones

//Conseguir el monto del input por el DOM.
const inputMonto = document.getElementById('inputMonto');


//Asigarle un listener al buttón de Ingresar Monto
const ingresarMonto = document.getElementById('ingresarMonto');

//Esperar un evento. (Hasta cuando uno le haga click al button)
ingresarMonto.addEventListener('click', function(e){

    //Para obtener el valor escrito de la parte de Input del Monto a Ingresar
    let monto = parseInt(inputMonto.value);  //parseInt para convertir flaot a Entero.

    //Es agregar el monto actual + el monto que se va ingresar
    montos[numcta] = montos[numcta] + monto;
    //llama
    actualizaSaldoActual();
});

//RETIRAR MONTO

const retirarMonto =document.getElementById('retirarMonto');
//Asigarle un listener al buttón de Retirar Monto
 retirarMonto.addEventListener('click', function(e){
    //Para obtener el valor escrito de la parte de Input del Monto a Ingresar
    let monto = parseInt(inputMonto.value);  //parseInt para convertir flaot a Entero.

    
    //Poner una condición cuando el monto ingresado supera el monto de la cuenta. 
    if(monto > montos[numcta]){
        alert('No tienes sufiente saldo para hacer el retiro');
    }else{
        //Es restar el monto actual - el monto que se va retirar
        montos[numcta] = montos[numcta] - monto;
        alert('Operación satisfacoria');
        //llama a la función
        actualizaSaldoActual();
    }

    
 });

 //SALIR DEL CAJERO Y REGRESAR AL LOGIN
 const salirButton =document.getElementById('salirButton');

 salirButton.addEventListener('click', function(e){
    
    const confirmacion = confirm('Estas seguro de salir?');

    if(confirmacion){
        //Para redireccionarnos a la página principal.
        window.location.href = '/index.html';
    }else{
        //No se hace nada.
    }
    
 });



 //PARA LOS BILLETES 

 //función para actualizar el valor dentro del textbox del inputMonto
 function updateinputMonto(amount){
    document.getElementById('inputMonto').value =amount;
 }

 //BILLETE DE $100
 //Asigarle un listener al cienButton
const cienButton = document.getElementById('cienButton');
//Esperar un evento. (Hasta cuando uno le haga click al button)
 cienButton.addEventListener('click', function(e){
    //Llamar la función
    updateinputMonto(100);
 });

 //BILLETE DE $200
 //Asigarle un listener al dosButton
const dosButton = document.getElementById('dosButton');
//Esperar un evento. (Hasta cuando uno le haga click al button)
 dosButton.addEventListener('click', function(e){
    //Llamar la función
    updateinputMonto(200);
 });

  //BILLETE DE $500
 //Asigarle un listener al dosButton
const quinButton = document.getElementById('quinButton');
//Esperar un evento. (Hasta cuando uno le haga click al button)
quinButton.addEventListener('click', function(e){
    //Llamar la función
    updateinputMonto(500);
 });


  //BILLETE DE $1000
 //Asigarle un listener al dosButton
const milButton = document.getElementById('milButton');
//Esperar un evento. (Hasta cuando uno le haga click al button)
milButton.addEventListener('click', function(e){
    //Llamar la función
    updateinputMonto(1000);
 });

  //BILLETE DE $2000
 //Asigarle un listener al dosButton
const dosmilButton = document.getElementById('dosmilButton');
//Esperar un evento. (Hasta cuando uno le haga click al button)
dosmilButton.addEventListener('click', function(e){
    //Llamar la función
    updateinputMonto(2000);
 });

   //BILLETE DE $5000
 //Asigarle un listener al dosButton
const cincomilButton = document.getElementById('cincomilButton');
//Esperar un evento. (Hasta cuando uno le haga click al button)
cincomilButton.addEventListener('click', function(e){
    //Llamar la función
    updateinputMonto(5000);
 });
 

