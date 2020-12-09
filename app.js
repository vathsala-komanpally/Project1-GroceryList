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
            testObject[itemPropertyName].duplicate = true;
            element.duplicate = true;
            //     testObject.forEach((element, i) => { 

            // });
            let repeatValue = testObject[itemPropertyName].repeated;
            console.log(repeatValue);
            repeatValue = repeatValue + 1;
            testObject[itemPropertyName].repeated = repeatValue;
            //testObject[itemPropertyName].repeated = element.repeated+1;
            element.repeated = element.repeated + 1;
            numberOfItems[i].repeated = element.repeated;
            seenDuplicate = true;
            delete element;
            //numberOfItems.pop();
        }
        else {
            testObject[itemPropertyName] = element;
            delete element.duplicate;
          
        }
    });

    console.log(testObject);
    console.log(numberOfItems);
});
