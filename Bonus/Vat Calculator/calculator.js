function VatConverter(valNum){
    valNum = parseFloat(valNum);
    document.getElementById("vat5").innerHTML=valNum*0.05;
    document.getElementById("vat10").innerHTML=valNum*0.1;
}