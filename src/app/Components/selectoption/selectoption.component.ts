import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Option {
  kye: string;
  value: string;
}

@Component({
  selector: 'app-selectoption',
  templateUrl: './selectoption.component.html',
  styleUrls: ['./selectoption.component.scss'],
})
export class SelectoptionComponent implements OnInit {
  @Input() control?: string;
  @Input() formGroup?: FormGroup;
  @Input() options?: any[];
  @Input() label?: string;
  @Input() required?: boolean = false;
  @Input() validator?: any;

  @Output() selectionChange = new EventEmitter<{
    value: any;
    label: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onSelectionChange(event: any, control: any) {
    const value = event.target.value;
    this.selectionChange.emit({ value, label: control });
  }
}
