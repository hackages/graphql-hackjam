import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cp-sponsor-box',
  templateUrl: './sponsor-box.component.html',
  styles: []
})
export class SponsorBoxComponent implements OnInit {
  @Input()
  picture: String;

  @Input()
  name: String;

  @Input()
  description: String;

  constructor() {
  }

  ngOnInit() {
  }

}
