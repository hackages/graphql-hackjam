import {Component, Input} from '@angular/core';

@Component({
  selector: 'cp-success-modal',
  templateUrl: './success-modal.component.html'
})
export class SuccessModal {

  @Input()
  isVisible: boolean;

  @Input()
  title: string;

  @Input()
  subTitle: string;

  @Input()
  text: string;

  hide() {
    this.isVisible = false;
  }
}
