import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {
  @Input() control?: string;
  @Input() formGroup?: FormGroup;
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() required?: boolean = false;
  @Input() validator?: any;
  constructor() {}

  ngOnInit(): void {}
}
