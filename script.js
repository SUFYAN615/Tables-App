function tablesApp(){

    let tableNum = document.getElementById("tableNum").value
    let tableRange = document.getElementById("tabeleRange").value

   let para=""
 for(let i = 1;  i<=tableRange; i++){
    //  console.log(`${tableNum} x ${i} = ${tableNum * i}`);

          para += `  <div class="table-line">${tableNum} x ${i} = ${tableNum * i}</div>`

document.getElementById("showtable").innerHTML=para

}

}


function reset(){
window.location.reload()
}
