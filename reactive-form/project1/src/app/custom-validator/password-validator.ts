import { AbstractControl, ValidationErrors } from "@angular/forms";

export function PassValidator(control:AbstractControl):ValidationErrors|null{

const Cpassword = control.value ;
const Password = control.root.get('Password')?.value ;  

// password vrti .get method use keli karn tyach access nhi aplyakde.Cpassword cha acees ahe tyamule direct 
// control.value ne enter keleli value milen

console.log(Password,Cpassword);
if(Cpassword != "" && (Password != Cpassword)){
    return {"passwordMismatch":true};
}else {
    return null ;
}

}


export function ageValidator(control:AbstractControl) :ValidationErrors | null {
    const Age = control.value ;
     if(Age && Age < 18){
        return {"ageNotMatch":true}
     }else {
        return null ;
     }
}

