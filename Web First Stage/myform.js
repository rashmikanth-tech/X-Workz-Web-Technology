function validation(){
    let val = true;
    let names = document.formName.nameName.value;
    let ages = document.formName.ageAge.value;
    let emails = document.formName.emailEmail.value;
    let passwords = document.formName.passwordPass.value;
    let confpasswords = document.formName.passConfPass.value;
    let courses = document.formName.courseCourse1.value;
     let course2 = document.formName.courseCourse2.value;


    if(names.length >20 ){
        val = false;
        alert("Name Reached max limit");
    }
    if(ages < 18 ){
        val = false;
        alert("Age should not below 18")
    }

    if(!courses && !course2 ){
        val = false
        alert("select any Course");
    }
    

    if(!emails.includes("@") || !emails.includes(".") ){
        val= false
        alert("email is too longe")
    }

    if(passwords != confpasswords){
        val= false
        alert("Password and Confirm password should same")
    }


    if ( val == false){
        alert("form not Submitted");
    }
    else{
        alert("form submitted");
    }
    return val;


}