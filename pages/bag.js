let bagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
let items = JSON.parse(localStorage.getItem("allItems")) || [];
let bagitemobjects;

onLoad();
function onLoad(){
  loadbagitemobjects();
  console.log(bagItems,items,bagitemobjects);
    displayBagItems();
    updateBagItemCount();
    updatePriceSummary();
}
function updateBagItemCount() {
    let bagItemCountElement = document.querySelector(".bag-item-count");
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = "visible";
        bagItemCountElement.textContent = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = "hidden";
    }
}
function loadbagitemobjects()
{
  bagitemobjects=bagItems.map(itemId=>
  {console.log(bagItems);
    for(let i=0;i<items.length;i++)
      if(itemId==items[i].id)
      {
        return items[i];
      }
  }
  ).filter(Boolean);

  console.log(bagitemobjects);
}
 function displayBagItems(){
    let container = document.querySelector(".bag-items-container");
    let innerHTML='';
    bagitemobjects.forEach(bagItem=>{
      innerHTML+=generatehtml(bagItem);
    });
    container.innerHTML=innerHTML;
}function updatePriceSummary() {
    let itemCount = bagitemobjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;
    let convenienceFee = itemCount===0?0:99;


    bagitemobjects.forEach(item => {
        
        let mrp = Number(item.originalPrice.replace(/[^\d]/g, ""));
        let price = Number(item.currentPrice.replace(/[^\d]/g, ""));
        totalMRP += mrp;
        totalDiscount += (mrp - price);
    });

    document.getElementById("item-count").textContent = itemCount;
    document.getElementById("total-mrp").textContent = "Rs " + totalMRP;
    document.getElementById("total-discount").textContent = "-Rs " + totalDiscount;
    document.getElementById("final-amount").textContent = "Rs " + (totalMRP - totalDiscount + convenienceFee);
}
function removefrombag(itemId)
{
  bagItems=bagItems.filter(bagItemId =>bagItemId!=itemId);
  localStorage.setItem("bagItems",JSON.stringify(bagItems));
  loadbagitemobjects();
  displayBagItems();
  updateBagItemCount();
  updatePriceSummary();
}
function generatehtml(item) {
  return `<div class="bag-item-container">
      <div class="item-left-part">
        <img class="bag-item-img" src="../${item.image}">
      </div>
      <div class="item-right-part">
        <div class="company">${item.companyName}</div>
        <div class="item-name">${item.itemName}</div>
        <div class="price-container">
          <span class="current-price">${item.currentPrice}</span>
          <span class="original-price">${item.originalPrice}</span>
          <span class="discount-percentage">${item.discountPercentage}</span>
        </div>
        <div class="return-period">
          <span class="return-period-days">Return period:${item.returnperiod} </span>
        </div>
        <div class="delivery-details">
        Delivery by <span class="delivery-details-days">${item.deliverydate}</span>
        </div>
      </div>
      <div class="remove-from-cart" onclick="removefrombag(${item.id})">X</div>
    </div>
  `;
}
console.log("bagItems from storage:", bagItems);
console.log("allItems from storage:", items);