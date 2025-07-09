 let bagItems= [];


 let items=[
        {
            id:1,
            image:"images/1.jpg",
            rating:"4.3⭐| 1.4k",
            companyName:"Carlton London",
            itemName:"Rhodium-Plated CZ Floral Studs",
            currentPrice:"Rs 606",
            originalPrice:"Rs 1,045",
            discountPercentage:"(42% OFF)",
             returnperiod:'14 days',
            deliverydate:'12 Aug 2025'

        },
        {
            id:2,
            image:"images/2.jpg",
            rating:"4.5⭐| 1.2k",
            companyName:"CUKOO",
            itemName:"Women Padded Halter Neck Swimming Dress",
            currentPrice:"Rs 1,507",
            originalPrice:"Rs 2,599",
            discountPercentage:"(42% OFF)",
            returnperiod:'14 days',
            deliverydate:'12 Aug 2025'
        },
        {
            id:3,
            image:"images/3.jpg",
            rating:"4.0⭐| 800",
            companyName:"NUEVOSDAMAS",
            itemName:"Women Red & White Printed A-Line Knee-Length Skirts",
            currentPrice:"Rs 495",
            originalPrice:"Rs 1,299",
            discountPercentage:"(40% OFF)",
             returnperiod:'14 days',
            deliverydate:'12 Aug 2025'
        },
        {
            id:4,
            image:"images/4.jpg",
            rating:"4.2⭐| 1.1k",
            companyName:"Adidas",
            itemName:"Indian Cricket ODI Jersey",
            currentPrice:"Rs 1,299",
            originalPrice:"Rs 2,499",
            discountPercentage:"(48% OFF)",
             returnperiod:'14 days',
            deliverydate:'12 Aug 2025'
        },
        {
            id:5,
            image:"images/5.jpg",
            rating:"4.6⭐| 900",
            companyName:"Roadster",
            itemName:"Pure cotton T-shirt",
            currentPrice:"Rs 489",
            originalPrice:"Rs 1,399",
            discountPercentage:"(65% OFF)",
             returnperiod:'14 days',
            deliverydate:'12 Aug 2025'
        },
      
       
        {
            id:6,
            image:"images/6.jpg",
            rating:"0.0⭐| 0",
            companyName:"Nike",
            itemName:"Men ReactX Running Shoes",
            currentPrice:"Rs 14,999",
            originalPrice:"Rs 14,999",
            discountPercentage:"(0% OFF)",
             returnperiod:'14 days',
            deliverydate:'12 Aug 2025'
        },
        {
            id:7,
            image:"images/7.jpg",
            rating:"4.4⭐| 1.5k",
            companyName:"The Indian Garage Co's",
            itemName:"Men Slim Fit Regular Shorts",
            currentPrice:"Rs 639",
            originalPrice:"Rs 1599",
            discountPercentage:"(60% OFF)",
             returnperiod:'14 days',
            deliverydate:'12 Aug 2025'
         },
        {
            id:8,
            image:"images/8.jpg",
            rating:"4.3⭐| 1.0k",
            companyName:"Nivea",
            itemName:"Men's Fresh Deodorant 150ml",
            currentPrice:"Rs 142",
            originalPrice:"Rs 285",
            discountPercentage:"(50% OFF)",
             returnperiod:'14 days',
            deliverydate:'12 Aug 2025'
        }
    ];

localStorage.setItem("allItems", JSON.stringify(items));
    function onLoad() {
              let bagitemsstr = localStorage.getItem("bagItems");
        bagItems = bagitemsstr ? JSON.parse(bagitemsstr) : [];
        displayItems();
  
        updateBagItemCount();
           console.log("bagItems:", bagItems);
    console.log("allItems:", items);
}

function addToCart(itemId) {
    bagItems.push(itemId);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
    updateBagItemCount();
}

function updateBagItemCount() {
    let bagItemCountElement = document.querySelector(".bag-item-count");
    if(bagItems.length>0){
        bagItemCountElement.style.visibility = "visible";
        bagItemCountElement.textContent = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = "hidden";
    }
    
}

function displayItems() {
let container = document.querySelector(".full-container");
let allItemsHTML = "";

items.forEach(item => {
  allItemsHTML += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="Product Image">
      <div class="rating">${item.rating}</div>
      <div class="company-name">${item.companyName}</div>
      <div class="item-name">${item.itemName}</div>
      <div class="price-container">
        <span class="current-price">${item.currentPrice}</span>
        <span class="original-price">${item.originalPrice}</span>
        <span class="discount-percentage">${item.discountPercentage}</span>
      </div>
      <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Bag</button>
    </div>
  `;
});

container.innerHTML = allItemsHTML;
}
window.onload = onLoad;
