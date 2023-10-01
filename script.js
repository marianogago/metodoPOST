document.addEventListener("DOMContentLoaded", function(){
    let formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(e){
        e.preventDefault(); 

        let nombre = document.getElementById("inpNom").value;
        let apellido = document.getElementById("inpApe").value;
        let nacimiento = document.getElementById("inpNac").value;

        let data = {
            nombre: nombre,
            apellido: apellido,
            nacimiento: nacimiento
    };

    let url = "https://jsonplaceholder.typicode.com/users";
  
    let requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
        
    fetch(url, requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.json();
        })
        .then(data => {
          console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
});
})