console.log("Javascript file is running");
let numberOfItems = [];
let itemID = 0;
$(".btn").on("click", (event) => {
    event.preventDefault();
    const nameOfItem = event.target.innerHTML;
    //$("#inputText").value(nameOfItem);
    const itemIdNumber = event.target.id;
    const itemPrice = Math.floor((Math.random() * 100) + 1);
    //has to workout to print prive from html
    const idItemObject = { id: itemIdNumber, Name: nameOfItem, price: itemPrice, repeated: 1 };
    numberOfItems.push(idItemObject);
    //checkingRepeatedItems();
});

$("#finish").on("click", () => {
    console.log("finished click event"); let seenDuplicate = false;
    testObject = {};
    //checking item already choosen by user before
    numberOfItems.forEach((element, i) => {
        let itemPropertyName = element.Name;//other way to take name of element.["Name"]
        if (itemPropertyName in testObject) {
            //missing code to add price if item repeated
            //testObject[itemPropertyName].duplicate = true;
            //element.duplicate = true;
            let repeatValue = testObject[itemPropertyName].repeated;
            repeatValue = repeatValue + 1;
            testObject[itemPropertyName].repeated = repeatValue;
            //testObject[itemPropertyName].repeated = element.repeated+1;
            //element.repeated = repeatValue;
            //numberOfItems[i].repeated = repeatValue;
            seenDuplicate = true;
            //delete element;

        }
        else {
            testObject[itemPropertyName] = element;
            delete element.duplicate;

        }
    });
    // numberOfItems.forEach((element, i) => {
    //     for(i=1;i<numberOfItems.length;i++)
    //     { //numberOfItems.indexOf(element.Name)
    //         if(numberOfItems[i].Name==element.Name)
    //         {
    //             numberOfItems.splice(i,1);
    //             i--;
    //         }
    //     }
    // });
    const objectLength=Object.keys(testObject).length;
    numberOfItems.splice(objectLength,numberOfItems.length);
    console.log(testObject);
    console.log(numberOfItems);
    printResult(numberOfItems);
});

function printResult(numberOfItems) {
    // testObject.foreach((element, i)=>{
    //      $("#result").append(`<li> ${element.Name} ${element.price}</li>`);

    // });
    numberOfItems.forEach((element, i) => {
    
        $("#result").append(`<li> ${element.Name} is: ${element.price}$ ${element.repeated} items selected</li>`);
    })
    //$("#result").append(`<h2>${i} ${element.Name} ${element.price}</h2>`);
}
