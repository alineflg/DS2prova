function nota(){
    var p1, p2, p3,p4, media,n;
    n = parseFloat(document.querySelector("#nome").value);
    p1= parseFloat(document.querySelector("#N1").value);
    p2= parseFloat(document.querySelector("#N2").value);
    p3= parseFloat(document.querySelector("#N3").value);
    p4= parseFloat(document.querySelector("#N4").value);
    
    media= (p1+p2+p3+p4)/4;
    document.querySelector("#media").value= media;
    if(media >= 7){
         document.querySelector("#result").value= "Aprovado";
    }else{
        if(media >=4 && media <7){
            document.querySelector("#result").value= "Final";
        }else{
            document.querySelector("#result").value= "Reprovado";
        }
            
    }  
}
  function limpar(){
    document.querySelector("#nome").value= "";    
    document.querySelector("#N1").value= "";  
    document.querySelector("#N2").value= ""; 
    document.querySelector("#N3").value= ""; 
    document.querySelector("#N4").value= ""; 
    document.querySelector("#media").value= ""; 
    document.querySelector("#result").value= ""; 
}
    
   
