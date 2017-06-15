function myFunction() {
    var x = document.getElementById("firstname").value;
    var y = document.getElementById("lastname").value;
    var z = document.getElementById("email").value;
    var a = document.getElementById("comments").value;
    document.getElementById("toAllCaps").innerHTML = x.toUpperCase()+" | "+y.toUpperCase()+" | "+z.toUpperCase()+" | "+a.toUpperCase()+"<br/>"+"looks good to me, pal.";
}
