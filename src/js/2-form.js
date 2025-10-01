const elForm = document.querySelector(".feedback-form")
const formData = {
    email: "",
    message: ""
}
elForm.addEventListener("input", (ev) => {
    formData[ev.target.name] = ev.target.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
})
const saveData = localStorage.getItem("feedback-form-state")
if (saveData) {
    const parseEl = JSON.parse(saveData)
    formData.email = parseEl.email
    formData.message = parseEl.message

    elForm.elements.email.value = parseEl.email
    elForm.elements.message.value = parseEl.message
}

elForm.addEventListener("submit", (e) => {
    e.preventDefault() 

    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields")
        return
    }
    console.log(formData)
    formData.email = ""
    formData.message = ""
    localStorage.removeItem("feedback-form-state")
    elForm.reset()
})
