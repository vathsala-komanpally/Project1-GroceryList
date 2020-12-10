console.log("Javascript file is running");
let numberOfItems = [];
let itemID = 0;

//when user clicks on each item it prints those items on the page in form of table
$(".btn").on("click", (event) => {
    event.preventDefault();
    const nameOfItem = event.target.innerHTML;
    const itemIdNumber = event.target.id;
    //has to workout to print price from html fixed price for each item
    const itemPrice = Math.floor((Math.random() * 100) + 1);
    const idItemObject = { id: itemIdNumber, Name: nameOfItem, price: itemPrice, repeated: 1 };
    numberOfItems.push(idItemObject);
    //checkingRepeatedItems();
    itemID++;
    $("#resultItems").append(`<tr>
    <th>${itemID}</th>
    <th>${idItemObject.Name}</th>
    <th>${idItemObject.price}</th>
    <th>${idItemObject.repeated}</th></tr>`);
});

//user clicks on finish button it has to check repeated items and print how many
//times item repeated  
$("#finish").on("click", () => {
    $("#resultItems").remove();
    console.log("finished click event"); let seenDuplicate = false;
    testObject = {};
    //checking item already choosen by user before
    numberOfItems.forEach((element, i) => {
        let itemPropertyName = element.Name;//other way to take name of element.["Name"]
        //Here I am looking to print repeated value is user clicks on same item 2nd item it has to show 2 times
        //next to that 2nd item choosen
        //example apple choosen 3 rimes: apple 1, apple 2 times, apple 3 times
        //but its priting apple 3 times, apple 1, apple 3 times again..
        if (itemPropertyName in testObject) {
            let repeatValue = testObject[itemPropertyName].repeated;
            repeatValue = repeatValue + 1;

            testObject[itemPropertyName].repeated = repeatValue;
            //element.repeated = repeatValue;
            //testObject[itemPropertyName].repeated = element.repeated+1;
            //numberOfItems[i].repeated = repeatValue;
        }
        else {
            testObject[itemPropertyName] = element;
        }
    });
    //const objectLength=Object.keys(testObject).length;
    // numberOfItems.splice(objectLength,numberOfItems.length);
    console.log(testObject);
    console.log(numberOfItems);
    printResult(numberOfItems);
});


//printing values of array on to the table UI
function printResult(numberOfItems) {
    $("#resultItems tbody").remove();
    let sum = 0;
    //tried to link values of testobject to the table
    // for (i = 0; i < Object.keys(testObject).length; i++) {
    //     let objectKey=Object.keys(testObject)[i];
    //     console.log(objectKey);
    //     console.log(testObject["objectKey"].Name);
    //     $("table").append(`<tr>
    //     <th>${i}</th>
    // <th>${ testObject.objectKey.Name}</th>
    // <th>${testObject.objectKey.price}</th>
    // <th>${testObject.objectKey.repeated}</th></tr>`);
    //     sum = Object.keys(testObject)[i].price + sum;
    // }
    numberOfItems.forEach((element, i) => {
        if (element.repeated > 1) {
            $("table").append(`<tr>
            <th>${i}</th>
            <th>${element.Name}</th>
            <th>${element.price}</th>
            <th>${element.repeated} times</th></tr>`);
        } else {
                $("table").append(`<tr>
                <th>${i}</th>
                <th>${element.Name}</th>
                <th>${element.price}</th>
                <th>${element.repeated}</th></tr>`);
            }
        sum = element.price + sum;
        //$("#itemsList").append(`<li>${element.Name} of price ${element.price}$ ---- ${element.repeated} items selected</li>`);
    })
    //$("#result").append(`<h2>${i} ${element.Name} ${element.price}</h2>`);
    $("table").append(`<tr><th></th><th>Total price:</th><th>${sum}</th>`);
}
