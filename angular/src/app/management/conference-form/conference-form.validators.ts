import {FormControl} from '@angular/forms';

export class ConferenceFormValidators {
  static isBeforeEndDate(control: FormControl) {
    //If no end date OK
    if (control && control.parent && !control.parent.get('endDate').value)
      return null;

    if (control && control.parent &&
      (new Date(control.value) < new Date(control.parent.get('endDate').value))
    ) {
      return null;
    }

    return {
      startDate: true
    };
  }

  static isAfterStartDate(control: FormControl) {
    // Valid if no start date
    if (control && control.parent && !control.parent.get('startDate').value)
      return null;

    // Valid if start date is before end date
    if (control && control.parent &&
      new Date(control.value) > new Date(control.parent.get('startDate').value)) {
      return null;
    }

    return {
      endDate: true
    };
  }
}
