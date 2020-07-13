import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApplicationService } from '../Application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

  constructor(private fb: FormBuilder, private service: ApplicationService, private router: Router) { }

  ngForm = this.fb.group({
    EmailId: ['', [Validators.required, Validators.email, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
  })

  submit() {

  }
  forgot() {
    this.service.forgot(this.ngForm.value).subscribe(data => {
      if (data["status"] == 200) {
        alert(data["data"]);
        localStorage.setItem("EmailId",this.ngForm.value.EmailId);
      }
      else {
        alert(data["data"]);
      }
    })
  }


}
