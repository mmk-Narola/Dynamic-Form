import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.scss'],
})
export class InputfieldComponent implements OnInit {
  @Input() control?: string;
  @Input() formGroup?: FormGroup;
  @Input() type?: string;
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() required?: boolean = false;
  @Input() validator?: any;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.validator);
  }
}
