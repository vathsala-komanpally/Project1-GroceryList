console.log("Javascript file is running");
let nameOfItems=[];
$("button").on("click", (event) => {
   const nameOfItem= event.target.innerHTML;
   console.log(nameOfItem);
});