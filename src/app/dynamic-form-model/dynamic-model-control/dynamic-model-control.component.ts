import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-model-control',
  templateUrl: './dynamic-model-control.component.html',
  styleUrls: ['./dynamic-model-control.component.scss'],
})
export class DynamicModelControlComponent implements OnInit {
  userRegistration: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
