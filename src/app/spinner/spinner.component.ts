import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  @Input() color: string = 'dark';

  @Input() size: number = 1;

  @Input() type: 'border' | 'grow' = 'border';

  constructor() {}

  ngOnInit() {}
}
