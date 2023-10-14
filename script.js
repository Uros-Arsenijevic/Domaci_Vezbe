// vezba 1
let element = document.querySelector(".vezba1");

// element.addEventListener("click", (event) => {
//     event.target.classList.toggle("zoom");
// });

element.onclick = event => {
    event.target.classList.toggle("zoom")
}
// let test = document.querySelector(".test");
// test.addEventListener("click", (event) => {
//     console.log(event.target)
// })