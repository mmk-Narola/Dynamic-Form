import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Option {
  value: string;
  label: string;
}

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
})
export class RadiobuttonComponent implements OnInit {
  @Input() control?: string;
  @Input() formGroup?: FormGroup;
  @Input() type?: string;
  @Input() option?: Option[];
  @Input() label?: string;
  @Input() required?: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
