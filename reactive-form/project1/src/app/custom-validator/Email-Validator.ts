import { AbstractControl, ValidationErrors } from "@angular/forms";

 export function EmailValidator(control:AbstractControl):ValidationErrors|null{

const Email=control.value;
const checkgmail=Email.split('@');
// console.log(checkgmail[0]);
// console.log(checkgmail[1]);

if(Email!="" && checkgmail[1]!="gmail.com")
{
    return{"notgmail":true};
}
else
{
    return null;
}



}