var y = document.querySelector(".startCalc");

 

function Accumulator(stringVal){
    this.value = Number(stringVal);
    this.read = function(){
        this.value+= +prompt("Введите стоимость следющего товара($):",0);
    };
}
y.onclick = function(){
    x = prompt("Введите стоимость первого товара($):");
    result = true
    let accumulator = new Accumulator(x);
    while(result){
        accumulator.read();
        result = confirm("Добавить ещё один товар?")
    }
    servicePrice=0.1*accumulator.value;
    finalPrice=accumulator.value+servicePrice+150;
    alert("Стоимость товаров: "+accumulator.value+"$\nСтоимость доставки: 150$\nКомиссия сервиса(10%): "+servicePrice
        +"$\n--------------- \nИтоговая стоимость: " + finalPrice+"$");  
}