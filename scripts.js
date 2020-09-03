function validarEmail() {
    var email = document.getElementById("email");
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(email.value)){
        validarPassword();
    } else {
        Swal.fire({
            title: "La dirección de email es incorrecta.",
            confirmButtonColor: "#e90052"
        });
        email.focus();
    }
  }

  function validarPassword(){
    var password = document.getElementById("password");
    if(password.value == null || password.value.length == 0){
    Swal.fire("Ingrese la contraseña.");
    }
    else{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Has iniciado sesión',
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    }
  }

  function validarForm(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");
    var mensaje = document.getElementById("mensaje");
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var correcto = true;

    if(nombre.value == null || nombre.value.length == 0){
        Swal.fire({
            title: "Ingrese su nombre.",
            confirmButtonColor: "#e90052"
        });
        correcto = false;
    }else if(apellido.value == null || apellido.value.length == 0){
        Swal.fire({
            title: "Ingrese su apellido.",
            confirmButtonColor: "#e90052"
        });
        correcto = false;
    }else if(!emailRegex.test(email.value)){
        Swal.fire({
            title: "Ingrese un correo válido.",
            confirmButtonColor: "#e90052"
        });
        correcto = false;
    }else if(mensaje.value == null || mensaje.value.length == 0){
        Swal.fire({
            title: "Ingrese un mensaje.",
            confirmButtonColor: "#e90052"
        });
        correcto = false;
    }else if(correcto == true){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Mensaje enviado',
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    }
  }

window.onload = function(){
    var contador = 4;
    document.getElementById("boton").onclick = function(){
        var respuesta = document.getElementById("respuesta");
        if(respuesta.value == "Ozil"){
            Swal.fire({
                title: 'Ganador!',
                text: 'La respuesta era: Mesut Ozil',
                imageUrl: 'img/ozil.png',
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: 'Ozil',
              })
        }else if(contador > 1){
            contador--;
            document.getElementById("contador").innerHTML = contador;
        }else if(contador = 1){
            contador--;
            Swal.fire({
                title: 'Has perdido',
                text: 'La respuesta era: Mesut Ozil',
                imageUrl: 'img/ozil.png',
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: 'Ozil',
                timer: 2500
              })
              setTimeout(() => {
                window.location.href = "riddle.html";
            }, 2500);
        }
        
    }
}

