const form = document.querySelector(".form");
const toast = document.getElementById("toast");

// Toast function
function showToast(msg){
    toast.innerText = msg;
    toast.style.display = "block";

    setTimeout(()=>{
        toast.style.display = "none";
    },3000);
}

// Form Submit
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const inputs = form.querySelectorAll("input");

    for(let input of inputs){
        if(!input.checkValidity()){
            showToast("Please fill all fields correctly!");
            return;
        }
    }

    showToast("🎉 Your trip request submitted!");

    form.reset();
});