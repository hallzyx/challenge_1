
let h_2=document.querySelector("h2");


let btn=document.querySelectorAll("button");


let btn_1=btn[1];
let btn_2=btn[2];
let btn_3=btn[3];

let rpta=document.querySelector("p");

let toggle=document.querySelector(".salida_box");







btn_1.onclick=function(event){

    event.preventDefault();

    let ta= document.querySelector("textarea").value;
    let ta_2=ta.toLowerCase();

    ta_2=ta_2.replaceAll('á','a');
    ta_2=ta_2.replaceAll('é','e');
    ta_2=ta_2.replaceAll('í','i');
    ta_2=ta_2.replaceAll('ó','o');
    ta_2=ta_2.replaceAll('ú','u');
    ta_2=ta_2.replaceAll('é','e');
    ta_2=ta_2.replaceAll('ü','u');
    ta_2=ta_2.replaceAll('ï','i');


    ta_2=ta_2.replaceAll('e','enter');  
    ta_2=ta_2.replaceAll('i','imes');
    ta_2=ta_2.replaceAll('a','ai');
    ta_2=ta_2.replaceAll('o','ober');
    ta_2=ta_2.replaceAll('u','ufat');
    
   
    rpta.textContent=ta_2;


    if(rpta.textContent.length>=1){
    
      toggle.style.display="block";
  
      /*Segun investigué, esto es para que la pantalla se mueva hacia la zona deseada, las propiedades 
      se parecen al "position:absolute" de css, el behavour es para indicar el comporamiento del desplazamiento,
      en este caso se puso suave*/
  
      window.scroll({
          top: 500,
          behavior: 'smooth'
        });
    }
    else{
      alert("¡No se ha detectado texto alguno!");

  }  
}

btn_2.onclick=function(event){

  event.preventDefault();

  let ta= document.querySelector("textarea").value;
  let ta_2=ta.toLowerCase();
  ta_2=ta_2.replaceAll('enter','e');
  ta_2=ta_2.replaceAll('imes','i');
  ta_2=ta_2.replaceAll('ai','a');
  ta_2=ta_2.replaceAll('ober','o');
  ta_2=ta_2.replaceAll('ufat','u');

  rpta.textContent=ta_2;
  if(rpta.textContent.length>=1){
    
    toggle.style.display="block";

    /*Segun investigué, esto es para que la pantalla se mueva hacia la zona deseada, las propiedades 
    se parecen al "position:absolute" de css, el behavour es para indicar el comporamiento del desplazamiento,
    en este caso se puso suave*/

    window.scroll({
        top: 500,
        behavior: 'smooth'
      });
  }

  else{
    alert("¡No se ha detectado texto alguno!");

  }


    

    


}


//Comportamiendo de la barra hamburguesa

let ham=document.querySelector("i");
let barra=document.querySelector("ul");
console.log(barra);
console.log(ham);


ham.addEventListener("click",function(){


  console.log("dio click al botom ham");

  barra.classList.toggle("toggle");

})

btn_3.addEventListener("click",function(){
    //Atrapamos el texto y lo movemos a nuestro portapapeles
    navigator.clipboard
    .writeText(rpta.textContent)
    .then(()=>{    
        alert("¡Texto copiado!");
    })

})





       
    
    
    
    







