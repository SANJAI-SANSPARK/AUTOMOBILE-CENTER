var sn = localStorage.getItem("sname");
var sk = localStorage.getItem("skey")
function values()
{
    var uname = document.getElementById("name").value;
    localStorage.setItem("urname",uname);
    var pswd = document.getElementById("password").value;
    localStorage.setItem("ukey",pswd);
    if (uname==sn && pswd==sk)
    {
        return true;
    }
   else{
    alert("your key is wrong");
    return false;
   }
}