function onClick() {
    alert("form is Submitted")
}
function submitForm() {
    let value = true;
    let nameInput = document.formName.nameName.value;
    let numInput = document.formName.numberNumber.value;
    let gendInput = document.formName.Gender.value;
    let ageInput = document.formName.ageAge.value;
    let emailinput = document.formName.emailEmail.value;

    alert(nameInput)
    alert(numInput)
    alert(gendInput)
    alert(ageInput)
    alert(emailinput)
    return value;
}