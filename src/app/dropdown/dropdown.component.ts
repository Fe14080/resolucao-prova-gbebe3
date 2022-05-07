import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() color: string = 'dark';

  @Input() itens: any[];

  @Output() onSelect = new EventEmitter();

  showDropdown: boolean;

  constructor() {}

  ngOnInit() {}

  alternarShowDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
