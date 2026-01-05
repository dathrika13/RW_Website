import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'rw-partner-portal',
  templateUrl: './partner-portal.component.html',
  styleUrls: ['./partner-portal.component.scss']
})
export class PartnerPortalComponent {
  LeadForm!:FormGroup
  constructor(private router:Router, private fb:FormBuilder){
    this.LeadForm=this.fb.group({
      // partnerName:["", Validators.required],
      firstName:["", Validators.required],
      lastName:["", Validators.required],
      companyName:["", Validators.required],
      jobTitle:["", Validators.required],
      officialEmail:["", [Validators.required, Validators.required]],
      personalEmail:["", [Validators.required, Validators.required]],
      contactNo1:[""],
      contactNo2:[""],
      companyCountry:["", Validators.required],
      companyAddress:[""],
      linkedInUrl:[""],
      companyLinkedInPage:[""],
      companyRevenue:[""],
      industrySector:[""],
      leadDetails :["", Validators.required],
      Message:["",Validators.required]
    })
  }
  ngOnInit(){
     const token = localStorage.getItem("partnerToken")
    console.log("token", token)
    if(!token ){
      this.router.navigate(["/page/partner-portal-login"])
    }
  }
}
