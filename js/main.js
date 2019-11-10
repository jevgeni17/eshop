var cart={}; //корзина


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
    out+=`<div class="type">Type: ${data[key].type}</div>`;
    out+=`<div class="warranty">Warranty: ${data[key].warranty} months</div>`;
    out+=`<div class="availability">Availability: ${data[key].Availability}</div>`;
    out+=`<button class="add-to-cart" data-id="${key}">Купить</button>`;
    out+='</div>';
  }
  $('.goods-out').html(out);
  $('.add-to-cart').on('click', addToCart);
}
function addToCart() { //добавление товара в корзину
  var id=$(this).attr('data-id');
//  console.log(id);
  if(cart[id]==undefined){
    cart[id]=1;  //если в корзине нет товара - то равно 1
  }
  else{ //если такой товар есть, увеличение на 1
    cart[id]++;
  }
  showMiniCart();
}
function showMiniCart() {
  var out="";
  for(var key in cart){
    out+= key+' --- ' +cart[key]+'<br>';
    $('.mini-cart').html(out)
  }
}

$(document).ready(function(){ //функция выполнится только после загрузки страницы
  init();
});
