import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent implements OnInit {

  myForm: FormGroup;
  formSubmitted: boolean = false;


  constructor(private fb: FormBuilder,public router:Router) {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      Address:['',Validators.required]
    })
  }

  ngOnInit(): void {}
    
  onSubmit() {
    if (this.myForm.valid) {
      this.formSubmitted = true;
      console.log('Form Submitted!', this.myForm.value);
      this.myForm.reset();
      // Optionally, reset the formSubmitted flag after a delay to hide the message
      setTimeout(() => this.formSubmitted = false, 3000);
      this.thanks();

    } else {
      console.log('Form is not valid');
    }

    
    }

    thanks() {
      this.router.navigate(['/thank-you']);
    }
  }



