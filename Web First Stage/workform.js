function onClick() {
    
   let doThis = document.getElementsByClassName("numClass")[0].innerHTML='Please provide Minimum Number'
  console.log('done now',doThis)
}

function submitForm() {
    let valu = true;
    let nameInput = document.formName.nameName.value;
    let numInput = document.formName.numberNumber.value;
   // let gendInput = document.formName.Gender.value;
    //let ageInput = document.formName.ageAge.value;
    //let emailinput = document.formName.emailEmail.value;
    

  

    if (numInput.length !=10) {
        valu = false;
        errorcheck("numError", "number should be at least 10 characters max 30");
    }
    else {
       
        clearField('numError');

    }
   
    if (nameInput.length <3|| nameInput.length >30) {
        valu = false;
        errorcheck("nameError", "Name should be at least 3 characters");
    }
    
    else{
       
        clearField('nameError');
    }


    //if (ageInput > 18 && ageInput < 70) {
      //  valu = true;
        //errorcheck();
    //}
   // else {
     //   valu = false;
       // alert("Enter valid Age")
    //}
    return valu;

}
function errorcheck(id,message){
    document.getElementById(id).innerHTML = message;
   
}
function clearField(id){
    document.getElementById(id).innerHTML='';
}
