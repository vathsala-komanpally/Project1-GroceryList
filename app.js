console.log("Javascript file is running");
let numberOfItems = [];
let itemID = 0;
testObject = {};

//when user clicks on each item it prints those items on the page in form of table
$(".btn").on("click", function(event) {
    event.preventDefault();
    const nameOfItem1 = event.target.innerHTML;
    const remove_after= nameOfItem1.indexOf('<');
    const nameOfItem =  nameOfItem1.substring(0, remove_after);
    const itemIdNumber = event.target.id;
    const itemPrice=$(this).val();
    //const itemPrice = Math.floor((Math.random() * 100) + 1);
    const idItemObject = { id: itemIdNumber, Name: nameOfItem, price: itemPrice, repeated: 1 };
    numberOfItems.push(idItemObject);
    itemID++;
    $("#resultItems").append(`<tr>
    <th>${itemID}</th>
    <th>${idItemObject.Name}</th>
    <th>${idItemObject.price}$</th>
    <th>${idItemObject.repeated}</th></tr>`);
    //console.log(numberOfItems[0].id);
});

//user clicks on finish button it has to check repeated items and print how many
//times item repeated  
$("#finish").on("click", function() {
    console.log("finished click event");
    //const repeatValue=0;
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
            //numberOfItems.pop();
        }
        else {
            testObject[itemPropertyName] = element;
        }
        console.log(numberOfItems);
        console.log(testObject);
    });
    printResult(testObject);
});

$("#remove").on("click", function() {
    const inputItemRemove=$("#userInput").val();
    //converting input string to camel case
    const itemRemove=inputItemRemove.charAt(0).toUpperCase()+inputItemRemove.slice(1);
    console.log(itemRemove);
   
    if (itemRemove in testObject) {
        delete testObject[itemRemove];
        console.log(testObject);
        //call print results method here
        printResult(testObject);
    }else{
        alert("Item not exist in your list to remove");
    }
});



//printing values from testObject on to the table 
function printResult(testObject) {
    let sum=0;
    $("#resultItems").empty();
    //tried to link values of testobject to the table
    for (i = 0; i < Object.keys(testObject).length; i++) {
        let objectKey = Object.keys(testObject)[i];
        //console.log(testObject[objectKey].Name);
        $("table").append(`<tr>
        <th>${i}</th>
        <th>${testObject[objectKey].Name}</th>
        <th>${testObject[objectKey].price}$</th>
        <th>${testObject[objectKey].repeated}</th></tr>`);
        const priceOf=testObject[objectKey].price;
        sum = +priceOf+sum;
        //console.log(sum);
    }
    $("table").append(`<tr><th></th><th>Total price:</th><th>${sum}</th>`);
}

    // numberOfItems.forEach((element, i) => {
    //     if (element.repeated > 1) {

    //         $("table").append(`<tr>
    //         <th>${i}</th>
    //         <th>${element.Name}</th>
    //         <th>${element.price}</th>
    //         <th>${element.repeated}</th></tr>`);
    //     } else {
    //             $("table").append(`<tr>
    //             <th>${i}</th>
    //             <th>${element.Name}</th>
    //             <th>${element.price}</th>
    //             <th>${element.repeated}</th></tr>`);
    //         }
    //sum = element.price + sum;
    //$("#itemsList").append(`<li>${element.Name} of price ${element.price}$ ---- ${element.repeated} items selected</li>`);
    //})
    //$("#result").append(`<h2>${i} ${element.Name} ${element.price}</h2>`);
