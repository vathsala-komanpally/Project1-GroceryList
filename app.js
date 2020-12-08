console.log("Javascript file is running");
let nameOfItems=[];
let itemID=0;
$("button").on("click", (event) => {
    event.preventDefault();
   const nameOfItem= event.target.innerHTML;
   console.log(nameOfItem);
   const itemIdNumber=itemID++;
   const idItemObject={id:itemIdNumber, itemName:nameOfItem};
   nameOfItems.push(idItemObject);
   console.log(nameOfItems);
});