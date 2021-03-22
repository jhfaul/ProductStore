var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"Oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];

function popUpMenu(id){
  var that = this;
  this.ele = document.createElement("div");
  this.imgEle = document.createElement("img");
  this.nameEle = document.createElement("p");
  this.priceEle = document.createElement("p");
  
  this.imgEle.setAttribute("src", products[id].image);
  this.nameEle.innerHTML = "Name: "+ products[id].name;
  this.priceEle.innerHTML = "Price: $"+ products[id].price;
  this.ele.classList.add("popUp");
  
  this.ele.append(this.imgEle);
  this.ele.append(this.nameEle);
  this.ele.append(this.priceEle);
  
  this.ele.addEventListener("click", function(){
    that.ele.style.display = "none";
  });
  
  document.body.appendChild(this.ele);
}

function fruit() {
  var that = this;
  this.productArray = [];
  this.ele = document.createElement("div");
  this.ele.classList.add("products");
  
  for (let i=0; i<products.length; i++) {
    this.productArray.push(new product(i));
    this.productArray[i].ele.addEventListener("click", function (){
      var popUp2 = new popUpMenu(i);
    });
    this.ele.appendChild(this.productArray[i].ele);
  }
  document.body.appendChild(this.ele);
}

function product(id) {
  var that = this;
  this.ele = document.createElement("div");
  this.productImg = document.createElement("img");
  this.nameEle = document.createElement("p");
  this.priceEle = document.createElement("p");
  
  this.productImg.setAttribute("src", products[id].image);
  this.ele.classList.add("product");
  this.ele.append(this.productImg);
  
  this.nameEle.innerHTML = "Name: " + products[id].name;
  this.priceEle.innerHTML = "Price: $" + products[id].price;
  this.ele.append(this.nameEle);
  this.ele.append(this.priceEle);
  
  this.ele.addEventListener("mouseover", function(){
    that.ele.style.borderColor = products[id].color;
  });
  
  this.ele.addEventListener("mouseout", function(){
    that.ele.style.borderColor = "black";
  });
  
}
var fruits2 = new fruit;