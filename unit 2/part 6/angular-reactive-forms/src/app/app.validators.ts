import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minDateValidator(minInputDate: string): ValidatorFn {
    return (c: AbstractControl): { [key: string]: any } => {
        if (c.value) {
            const minDate = new Date(minInputDate);
            const inputDate = new Date(c.value);
            console.log(minDate, inputDate);
            return minDate <= inputDate
                ? null
                : { minDate: minDate.toLocaleDateString() };
        }
        return null;
    };
}

export function matchEmail(c: AbstractControl): { [key: string]: any } {
  const email = c.get('email').value;
  const email2 = c.get('email2').value;
  return email === email2 ? null : { match: true };
}
