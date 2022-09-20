
function birthday(){
    let birthday = document.getElementById("birthday").value

    var d = new Date(birthday);
    var p = new Date()
    var year = p.getFullYear() - d.getFullYear()
    var month = Math.abs(p.getMonth() - d.getMonth())
    var day = Math.abs(p.getDate() - d.getDate())
    
    document.getElementById("year").textContent ="Your age is " + year + " years"
    document.getElementById("month").textContent = month + " month"
    document.getElementById("day").textContent = day + " days"
}
