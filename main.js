

var tag_1 = document.querySelector("#tag1");
var tag_2 = document.querySelector("#tag2");
var button = document.querySelector("#button");

button.addEventListener("click" , () => {
    tag_1.remove();
    tag_2.style.backgroundColor = "blue"

})

console.log(tag_1)