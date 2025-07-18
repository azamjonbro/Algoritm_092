let dark =  document.querySelector(".dark");


let  toggleState= false;

dark.addEventListener("click", () => {
    toggleState = !toggleState;
    if (toggleState) {
        document.body.classList.add("dark");
        dark.textContent = "Light Mode";
    } else {
        document.body.classList.remove("dark");
        dark.textContent = "Dark Mode";
    }
});