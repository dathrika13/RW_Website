// contact.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'rw-company',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    // this.activeRoute.fragment.sub
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [''],
      companyName: ['', Validators.required],
      title: ['', Validators.required],
      howCanWeHelp: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      // Form is valid, you can submit the data to your API or perform other actions
      const formData = this.contactForm.value;
      console.log('Form Data:', formData);
    } else {
      // Form is invalid, handle validation errors or other actions
      console.log("invalid")
    }
  }
}
