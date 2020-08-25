const telephoneCheck = (str) => { 
    // expresion regular que valida los numeros de entrada
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    if (regex.test(str)) {   
        
        return  'formato válidos para números de EE. UU.';
        }else {
       return  'Lo siento formato no válidos para números de EE. UU.';
        }  
    }    

    let btn_phone = document.getElementById("btn_phone");
    btn_phone.addEventListener("click", () => {
      document.getElementById("respuesta").innerHTML = `<p>${telephoneCheck(
        document.getElementById("phone").value)}</p>`;
    });
    