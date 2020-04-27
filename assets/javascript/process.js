var obj = {
	id : null,
	name : null,
	cart : new Array()
}
if(localStorage.getItem("user") == null){
	let id_number = 'id';
	let name = 'name';
	id_number = prompt("Silahkan isi Nomor telepon");
	name = prompt("Silahkan isi nama anda");
	obj ={
		id : id_number,
		name : name,
		cart : new Array()
	};
	localStorage.setItem('user', JSON.stringify(obj));
	if(id_number == "" || id_number == null) {
		alert("Wajib isi nomor telepon");
		localStorage.removeItem("user");
		location.reload();
	};
}
else{
	obj = JSON.parse(localStorage.getItem('user'));
}
const buttons = document.querySelectorAll("button");
var basket = new Array();
for(let button of buttons){
	button.addEventListener('click', function(event){
		basket.push(event.target.value);
	});
	obj.cart = basket;
	localStorage.setItem('cart', JSON.stringify(obj));
};
document.getElementById("cart").addEventListener("click", function(){
	alert("Produk didalam keranjang : \n - "+obj.cart.join("\n - "));
});
document.getElementById("info").addEventListener("click", function(){
	alert("No Telepon: "+obj.id+"\nNama: "+obj.name);
});
document.getElementById("setting").addEventListener("click", function(){
	let thema =confirm("Apakah anda ingin mengganti tema ?");
	if(thema){
		var element = document.body;
   		element.classList.toggle("dark-mode");
	}
});
document.getElementById("out").addEventListener("click", function(){
	let stat_out = confirm("Apakah anda yakin ingin keluar ?");
	if(stat_out){
		localStorage.removeItem("user");
		location.reload();
	}
});
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slideImg");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}

var myIndex2 = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("slideImg2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > x.length) {myIndex2 = 1}    
  x[myIndex2-1].style.display = "block";  
  setTimeout(carousel2, 2000);
}