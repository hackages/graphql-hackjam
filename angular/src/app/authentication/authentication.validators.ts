import {FormControl, ValidationErrors} from '@angular/forms';

export class AuthenticationValidators {
  static validatePasswordConfirmation(control: FormControl): ValidationErrors | null {
    const isSameAsPassword = control.parent && control.parent.get('password').value
      && control.value === control.parent.get('password').value;

    if (isSameAsPassword) {
      return null;
    }
    return {
      confirmPassword: true
    };
  }
}
