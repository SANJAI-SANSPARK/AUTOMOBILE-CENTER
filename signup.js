function input()
{
    var name =document.getElementById("fname").value;
    localStorage.setItem("sname",name);
    var key = document.getElementById("password").value;
    localStorage.setItem("skey",key);    
}