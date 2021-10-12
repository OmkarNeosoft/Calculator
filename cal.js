function clearScreen() 
{
    document.getElementById("answer").value = "";
}
  
 function display(input) 
 {
    document.getElementById("answer").value += input;
   }

function equal()
{
    var res=document.getElementById("answer").value;
    var temp=eval(res);
    document.getElementById("answer").value=temp;
   
    document.getElementById("his").value+=`${res}=${temp}`
}
