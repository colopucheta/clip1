function validarEmail() {
    var campo = document.getElementById("email");
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(campo.value)){
        validarPassword();
    } else {
        Swal.fire({
            title: "La dirección de email es incorrecta.",
            confirmButtonColor: "#e90052"
        });
    }
  }

  function validarPassword(){
      var campo = document.getElementById("password");
      if(campo.value == null || campo.value.length == 0){
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