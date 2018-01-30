import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'cp-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit, OnChanges {
  @Input()
  labels: [string];

  @Input()
  amountPerPage = 1;

  @Input()
  total = 0;
  pagesArray = new Array(Math.ceil(this.total / this.amountPerPage)).fill(1);
  @Input()
  pageNumber = 1;
  @Input()
  navigateToPage;

  ngOnInit() {
    this.pagesArray = new Array(Math.ceil(this.total / this.amountPerPage)).fill(1);
  }

  ngOnChanges() {
    this.pagesArray = new Array(Math.ceil(this.total / this.amountPerPage)).fill(1);
  }

  isDisabled(total, amountPerPage, pageNumber, operation) {
    const res = (pageNumber + operation) < 1 ||
      Math.ceil(total / amountPerPage) < (pageNumber + operation);
    return res || null;
  };

}
