function soma(){
    
    var n1 = parseFloat(document.querySelector("#n1").value);
    var n2 = parseFloat(document.querySelector("#n2").value);
    var result = parseFloat(document.querySelector("#result").value);
   
    var result=n1+n2;
    
    
   if ((n1+n2) == result){
       alert("Valor incorreto!");
		
	} else {
		document.querySelector("#result").innerHTML="Resposta correta! Siga para o próximo desafio.";

	}
    
  
}
function subtracao(){
    
    var n1 = parseFloat(document.querySelector("#n1").value);
    var n2 = parseFloat(document.querySelector("#n2").value);
    var result = parseFloat(document.querySelector("#result").value);
   
    var result=n1-n2;
    
    
   if ((n1-n2) == result){
       alert("Valor incorreto!");
		
	} else {
		document.querySelector("#result").innerHTML="Resposta correta! Siga para o próximo desafio.";

	}
    
    function multiplicacao(){
    
    var n1 = parseFloat(document.querySelector("#n1").value);
    var n2 = parseFloat(document.querySelector("#n2").value);
    var result = parseFloat(document.querySelector("#result").value);
   
    var result=n1*n2;
    
    
   if ((n1*n2) == result){
       alert("Valor incorreto!");
		
	} else {
		document.querySelector("#result").innerHTML="Resposta correta! Siga para o próximo desafio.";

	}
  
function divisao(){
    
    var n1 = parseFloat(document.querySelector("#n1").value);
    var n2 = parseFloat(document.querySelector("#n2").value);
    var result = parseFloat(document.querySelector("#result").value);
    var proximo = "<a href="+"subtracao.html"+">subtracao</a>";
   
    var result=n1/n2;
    
    
   if ((n1/n2) == result){
       alert("Valor incorreto!");
	
	} else {
		document.querySelector("#proximo").innerHTML=proximo;	

	}
  function limpar(){
    
    document.querySelector("#n1").value= "";  
    document.querySelector("#n2").value= ""; 
   
}
    
   
