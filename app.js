//shoping cart functionality

//* Addding Item's to the cart //

// console.log('Cart')


const availableItems = document.querySelectorAll('.product')
const btnProd = document.querySelectorAll('.btn-prod')
const cartCont = document.querySelector('.cart-cont')
const total = document.querySelector('.myprice')

// console.log(availableItems)

cartItems =[]

btnProd.forEach((btn)=>{
     btn.addEventListener('click',function(){
        itemImg = btn.parentNode.childNodes[1].src
        itemTitle =btn.parentNode.childNodes[2].nextSibling.innerHTML
        price = btn.parentNode.childNodes[5].innerHTML
// console.log(btn.parentNode.childNodes[5].innerHTML)
       
    
const item ={
           img:itemImg,
           title:itemTitle,
           price:price
       }

       itemJson = JSON.stringify(item)

      cartItems.push(itemJson)
      displayCart()

    })
})


function displayCart(){
    cartItems.forEach((cartItem)=>{
     myItem = JSON.parse(cartItem)
     console.log(myItem)
    const price = Number(myItem.price)
     cartCont.innerHTML += `
     <div class="cartItems">
                    <img src=${myItem.img} alt="" height='30' width='50'>
                    <span>${myItem.title}</span>
                    <span>${myItem.price}</span>
                    <button class='rm-btn'>remove</button>
                </div>
     
     `
cartItems=[]
     
    })
    removeItem()
    priceUpdate(price)
}


function removeItem(){
 const rmBtm = document.querySelectorAll('.rm-btn')
  rmBtm.forEach((bttn)=>{
    bttn.addEventListener('click',()=>{
          const removePrice =  -Number(bttn.parentElement.childNodes[5].innerHTML)

           bttn.parentElement.remove()
           priceUpdate(removePrice)
  })
})}

function priceUpdate(price){
    count =0
    count =Number(total.innerHTML) + Number(price)
    total .innerHTML =count
}



