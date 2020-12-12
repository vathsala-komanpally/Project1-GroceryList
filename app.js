console.log("Javascript file is running");

const fruitsObject = [
    { id: 0, Name: "Apple", Price: 5, Quantity: 0, Imag: "images/apple.jpeg" },
    { id: 1, Name: "Banana", Price: 3, Quantity: 0, Imag: "images/banana.png" },
    { id: 2, Name: "Grapes", Price: 9, Quantity: 0, Imag: "images/grape.png" },
    { id: 3, Name: "Pear", Price: 5, Quantity: 0, Imag: "images/pear.png" },
    { id: 4, Name: "Mango", Price: 3, Quantity: 0, Imag: "images/mango.jpeg" },
];
$("#fruitsList").append('<ol id="fruits"></ol>');
fruitsObject.forEach((element, i) => {
    $("#fruits").append(`<li><button class="itemNames" id=${element.id} value=${element.Name}><img src=${element.Imag}>${element.Name}</button></li>`);
});
const vegetablesObject = [
    { id: 0, Name: "Carrot", Price: 5, Quantity: 0, Imag: "images/carrot.jpeg" },
    { id: 1, Name: "Capsicum", Price: 3, Quantity: 0, Imag: "images/Capsicum.jpeg" },
    { id: 2, Name: "Cucumber", Price: 9, Quantity: 0, Imag: "images/cucumber.jpeg" },
    { id: 3, Name: "Spinach", Price: 5, Quantity: 0, Imag: "images/spinach.jpeg" },
    { id: 4, Name: "Potato", Price: 3, Quantity: 0, Imag: "images/potato.jpeg" },
];
$("#vegetablesList").append('<ol id="vegetables"></ol>');
vegetablesObject.forEach((element, i) => {
    $("#vegetables").append(`<li><button class="itemNames" id=${element.id} value=${element.Name}><img src=${element.Imag}>${element.Name}</button></li>`);
});
const dairyObject = [
    { id: 0, Name: "Butter", Price: 5, Quantity: 0, Imag: "images/butter.jpeg" },
    { id: 1, Name: "Cheese", Price: 3, Quantity: 0, Imag: "images/cheese.png" },
    { id: 2, Name: "Milk", Price: 9, Quantity: 0, Imag: "images/milk.png" },
    { id: 3, Name: "Eggs", Price: 5, Quantity: 0, Imag: "images/eggs.jpeg" },
    { id: 4, Name: "Yogurt", Price: 3, Quantity: 0, Imag: "images/yogurt.jpeg" },
];
$("#dairyList").append('<ol id="dairy"></ol>');
dairyObject.forEach((element, i) => {
    $("#dairy").append(`<li><button class="itemNames" id=${element.id} value=${element.Name}><img src=${element.Imag}>${element.Name}</button></li>`);
});
const grainsObject = [
    { id: 0, Name: "Bread", Price: 5, Quantity: 0, Imag: "images/bread.jpeg" },
    { id: 1, Name: "Barley", Price: 3, Quantity: 0, Imag: "images/barley.png" },
    { id: 2, Name: "Rice", Price: 9, Quantity: 0, Imag: "images/rice.jpeg" },
    { id: 3, Name: "Oats", Price: 5, Quantity: 0, Imag: "images/oats.jpeg" },
    { id: 4, Name: "Pasta", Price: 3, Quantity: 0, Imag: "images/pasta.jpeg" },
];
$("#grainsList").append('<ol id="grains"></ol>');
grainsObject.forEach((element, i) => {
    $("#grains").append(`<li><button class="itemNames" id=${element.id} value=${element.Name}><img src=${element.Imag}>${element.Name}</button></li>`);
});
const meatObject = [
    { id: 0, Name: "Chicken", Price: 5, Quantity: 0, Imag: "images/chicken.jpeg" },
    { id: 1, Name: "Fish", Price: 3, Quantity: 0, Imag: "images/fish.png" },
    { id: 2, Name: "Goat", Price: 9, Quantity: 0, Imag: "images/goat.jpeg" },
    { id: 3, Name: "Lamb", Price: 5, Quantity: 0, Imag: "images/lamb.png" },
    { id: 4, Name: "Prawns", Price: 3, Quantity: 0, Imag: "images/prawn.jpeg" },
];
$("#meatList").append('<ol id="meat"></ol>');
meatObject.forEach((element, i) => {
    $("#meat").append(`<li><button class="itemNames" id=${element.id} value=${element.Name}><img src=${element.Imag}>${element.Name}</button></li>`);
});

const products = {
    Fruits: fruitsObject,
    Vegetables: vegetablesObject,
    Dairy: dairyObject,
    Grains: grainsObject,
    Meat: meatObject,
};

let numberOfItems = [];
let itemID = 0;
testObject = {};
console.log(products);
//when user clicks on each item it prints those items on the page in form of table
$(".itemNames").on("click", function (event) {
    event.preventDefault();
    const nameOfItem = $(this).val();
    const itemIdNumber = $(this).attr("id");
    itemClickedValue(nameOfItem, itemIdNumber);
});

//Based on user choosen item it takes related values and put them in array(numberofItems) like object form 
//and prints tem clicked details on page in table format
const itemClickedValue = (nameOfItem, itemIdNumber) => {
    for (i = 0; i < Object.keys(products).length; i++) {

        const value = products[Object.keys(products)[i]];
        const result = value.find(({ Name }) => Name === nameOfItem);
        if (result) {
            const itemPrice = result.Price;
            const idItemObject = { id: itemIdNumber, Name: nameOfItem, price: itemPrice, repeated: 1 };

            numberOfItems.push(idItemObject);
            itemID++;
            $("#resultItems").append(`<tr>
            <td>${itemID}</td>
            <td>${idItemObject.Name}</td>
            <td>$${idItemObject.price}</td>
           <td>${idItemObject.repeated} 
           <button onclick="deleteFunction(this)">
           <i class="fa fa-trash-o"></i></button>
           </td>
           </tr>`);
        }
    }
}

//user clicks on finish button it has to check repeated items and print how many
//times item repeated  
$("#finish").on("click", function () {
    console.log("finished click event");
    console.log(numberOfItems);
    //checking items repeated and deleting existed item then incresing repeated value of that item put them in testObject
    numberOfItems.forEach((element, i) => {
        const itemPropertyName = element.Name;//other way to take name of element.["Name"]
        if (itemPropertyName in testObject) {
            testObject[itemPropertyName].price = 2 * element.price;
            const repeatValue1 = testObject[itemPropertyName].repeated;
            //****if user clicks on finish more than 2 times it increasing this value 2 times***//
            //it looping more times incresing value double
            const repeatValue = repeatValue1 + 1;
            testObject[itemPropertyName].repeated = repeatValue;
        }
        else {
            testObject[itemPropertyName] = element;
        }
        console.log(numberOfItems);
        console.log(testObject);
    });
    printResult(testObject);
});

$("#remove").on("click", function () {
    const inputItemRemove = $("#userInput").val();
    //converting input string to camel case
    const itemRemove = inputItemRemove.charAt(0).toUpperCase() + inputItemRemove.slice(1);
    console.log(itemRemove);

    //checking item exist 
    if (itemRemove in testObject) {
        //checking how many items choosen
        if (testObject[itemRemove].repeated == 1) {
            delete testObject[itemRemove];
        } else {
            testObject[itemRemove].repeated = testObject[itemRemove].repeated - 1;
            testObject[itemRemove].price = testObject[itemRemove].price * 0.5;
            alert("only one item removed you have" + testObject[itemRemove].repeated +
                "more" + itemRemove);
        }
        console.log(testObject);
        //call print results method here
        printResult(testObject);
    } else {
        alert("Item not exist in your list");
    }
});

//printing values from testObject on to the table 
function printResult(testObject) {
    let sum = 0;
    $("#resultItems").empty();
    for (i = 0; i < Object.keys(testObject).length; i++) {
        let objectKey = Object.keys(testObject)[i];
        $("#resultItems").append(`<tr>
        <td>${i}</td>
        <td>${testObject[objectKey].Name}</td>
        <td>$${testObject[objectKey].price}</td>
        <td>${testObject[objectKey].repeated}
        <button onclick="deleteFunction(this)">
           <i class="fa fa-trash-o"></i></button></td></tr>`);
        const priceOf = testObject[objectKey].price;
        sum = +priceOf + sum;
    }
    $("#resultItems").append(`<tr><th></th><th>Total price:</th><th>${sum}</th>`);
}
function deleteFunction(r){
   let row=r.parentNode.parentNode.rowIndex;
   console.log("rowindex",row);
   document.getElementById("itemsTable").deleteRow(row);
}
