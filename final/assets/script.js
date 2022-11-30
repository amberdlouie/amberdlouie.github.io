const el = document.getElementById("btn");
const textbox = document.getElementById("fake-text-1");
if(el) {
    el.addEventListener('click', function handleClick() {
        textbox.textContent = "HI";
});
}