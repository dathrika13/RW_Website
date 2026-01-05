import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'rw-partner-login',
  templateUrl: './partner-login.component.html',
  styleUrls: ['./partner-login.component.scss']
})
export class PartnerLoginComponent {
  @Input() ctaButtonClass: string = "";
  PartnerLoginForm!:FormGroup
  validCredentials:boolean=false
  constructor(private fb:FormBuilder, private router:Router){
    this.PartnerLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    })
  }
  ngOnInit(){
    const token = localStorage.getItem("partnerToken")
    console.log("token", token)
    if(token && JSON.parse(token).token==="partenr_login_success"){
      this.router.navigate(["/page/partner-portal"])
    }
  }
  onSubmit(){
    console.log(this.PartnerLoginForm.value)    
    if(this.PartnerLoginForm.valid){
      if(this.PartnerLoginForm.value.email==="partners@redwoods.ai" && this.PartnerLoginForm.value.password==="Redw00d$Rock$"){
        localStorage.setItem("partnerToken", JSON.stringify({token:"partenr_login_success", ...this.PartnerLoginForm.value}))
        this.router.navigate(["/page/partner-portal"])
        // window.location.href="https://forms.office.com/pages/responsepage.aspx?id=zMrYeDeat0y72sYONc3gDtT0rdDwAdJKqDy7QGPjNmZUM0lGSEJKOFJEOFZPSzNIRU5CUU0zM01IUi4u"
        // window.open('https://www.duckduckgo.com', '_blank'); 
      }else{
        this.validCredentials=true
      }
     
    }
  }
}
