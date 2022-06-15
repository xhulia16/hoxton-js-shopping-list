let itemsList = [
    'Milk',
    'Cocoa',
    'Salad',
    'Carrots',
    'Tomatoes',
    'Ready meals'
]

let itemPriceList = [
    1.2,
    2.0,
    2.0,
    2.0,
    2.5,
    5.0
]

let newItem = prompt("Add another item to the list")
let newItemPrice = Number(prompt("Add the price of the new item"))

itemsList.push(newItem)
itemPriceList.push(newItemPrice)

for (let i = 0; i < itemsList.length; i++) {
    console.log(itemsList[i], `£${itemPriceList[i].toFixed(2)}`)
}

let totalAmount = 0
for (let i = 0; i < itemsList.length; i++) {
    totalAmount = totalAmount + itemPriceList[i]
}
console.log(`Total amount to pay is £${totalAmount}`)