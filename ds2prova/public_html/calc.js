function calc(){
    var p1, p2, p3, qtL;
    p1= parseFloat(document.querySelector("#altura").value);
    p2= parseFloat(document.querySelector("#largura").value);
    p3= parseFloat(document.querySelector("#comprimento").value);
   
    qtL= (p1 * p2 * p3)*1000;

         document.querySelector("#resultado").value= qtL;
   
       
}
function limpar(){
    document.querySelector("#resultado").value= " ";
    document.querySelector("#altura").value= " ";
    document.querySelector("#largura").value=" ";
    document.querySelector("#comprimento").value= " ";
}