// variables
const sendBtn = document.querySelector('#sendBtn'),
    email = document.querySelector('#email'),
    subject = document.querySelector('#subject'),
    message = document.querySelector('#message'),
    resetBtn = document.querySelector("#resetBtn"),
    form = document.querySelector("#email-form")


// eventListeners
eventListeners()
function eventListeners() {
    // app initialization
    document.addEventListener('DOMContentLoaded', appInit)
    // validating fields
    email.addEventListener('blur', validateField)
    subject.addEventListener('blur', validateField)
    message.addEventListener('blur', validateField)


    // reast btn
    resetBtn.addEventListener("click", reastform)

    // submit form and show gif
    form.addEventListener("submit", submitform)
}




// functions
function appInit() {
    // disabled send button on load
    sendBtn.disabled = true
}
// sending email and submit the form
function submitform(e) {
    e.preventDefault()

    // show the spinner 
    const spinner = document.getElementById("spinner")
    spinner.style.display = "block"

    // make secend gif

    const sendEmailImg = document.createElement("img")
    sendEmailImg.src = "../img/mail.gif"
    sendEmailImg.style.display = "block"

    //  show the email send image
    setTimeout(function () {
        //   hide first spinner
        spinner.style.display = "none"
        // append image to the html
        const loaders = document.querySelector("#loaders")
        loaders.appendChild(sendEmailImg)
        //    reset form and remove 
        setTimeout(() => {
            reastform()
            sendEmailImg.remove()
        }, 5000);
    }, 3000);
}


// validating fields of form
function validateField() {

    validateLength(this)
    // اعتبارسنجی ایمیل
    if (this.type === "email") {

        validateEmail(this)
    }

    let error = document.querySelectorAll(".error")
    if (email.value !== '' && subject.value !== '' && message.value !== '') {

        if (error.length === 0) {
            sendBtn.disabled = false
        }
    }
}

// validate length of fields
function validateLength(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = "green"
        field.classList.remove("error")
    } else {
        field.style.borderBottomColor = "red"
        field.classList.add("error")
    }
}

// validate email field containes @
function validateEmail(field) {
    const emailtext = field.value
    if (emailtext.includes("@")) {
        field.style.borderBottomColor = "green"
        field.classList.remove("error")
    } else {
        field.style.borderBottomColor = "red"
        field.classList.add("error")
    }
}

// rast form whit btn
function reastform() {
    form.reset()
}