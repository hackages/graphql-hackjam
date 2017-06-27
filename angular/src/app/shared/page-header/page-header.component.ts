import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cp-page-header',
  templateUrl: './page-header.component.html',
  styles: []
})
export class PageHeaderComponent implements OnInit {
  @Input()
  headers: [string];

  @Input()
  pipe = true;

  constructor() {
  }

  ngOnInit() {
  }

}
