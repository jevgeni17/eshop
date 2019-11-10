function init() {
  //вывод товара на главную страницу
  $.getJSON("goods.json", goodsOut); //считывание товара и вызов функции goodsOut
}
function goodsOut(data) { //функция получает весь json файл в переменную data
  //вывод на страницу
  console.log(data);
  var out='';
  for(var key in data){
    out+='<div class="cart">';
    out+=`<p class="name">${data[key].name}</p>`;
    out+=`<img src="img/${data[key].img}" alt="">`;
    out+=`<div class="price">${data[key].price}</div>`;
    out+='<button class="add-to-cart">Купить</button>';
    out+='</div>';
  }
  $('.goods-out').html(out);
}

$(document).ready(function(){ //функция выполнится только после загрузки страницы
  init();
});
