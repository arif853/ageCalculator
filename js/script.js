
function birthday(){
    let birthday = document.getElementById("birthday").value

    var d = new Date(birthday);
    var p = new Date()
    
    d1 = d.getDate()
    m1 = d.getMonth()
    y1 = d.getFullYear()

    d2 = p.getDate()
    m2 = p.getMonth()
    y2 = p.getFullYear()

    var m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if(d1>d2){
        d2 = d2 + m[m2-1]
        m2 = m2 - 1
        
    }
    if(m1>m2){
        m2 = m2 + 12
        y2 = y2 - 1
    }
    console.log(d2)
    console.log(m2)
    day = d2 - d1
    month = m2 - m1
    year = y2 - y1
    
    document.getElementById("year").innerHTML ="Your age is " + year + " years"
    document.getElementById("month").innerHTML = month + " month"
    document.getElementById("day").innerHTML = day + " days"
}
