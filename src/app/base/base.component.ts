import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  myForm: FormGroup;
  email: AbstractControl;
  name: AbstractControl;
  color = 'primary';
  mode = 'determinate';
  value = 50;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'email': ['', Validators.required],
      'name': ['']
    });
    this.email = this.myForm.controls['email']
    this.name = this.myForm.controls['name']
   }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('submit', value);
    
  }
}
