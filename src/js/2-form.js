const elForm = document.querySelector(".feedback-form")
const formData = {
    email: "",
    message: ""
}
elForm.addEventListener("input", (ev) => {
    formData[ev.target.name] = ev.target.value.trim();
    localStorage.setItem("feedback-form-state" , JSON.stringify(formData))
} )