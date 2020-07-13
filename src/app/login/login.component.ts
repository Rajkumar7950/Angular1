import { Component } from '@angular/core';
import { ApplicationService } from '../Application.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private fb: FormBuilder, private service: ApplicationService, private router: Router) { }

  ngForm = this.fb.group({
    EmailId: ['', Validators.required],
    Password: ['', Validators.required],
  })
  submit() {
    debugger;
    this.service.login(this.ngForm.value).subscribe(data => {
      debugger;
      if (data["status"] == 200) {
        localStorage.setItem("token", data["token"]);
        localStorage.setItem("EmailId", data["emailIds"]);
        //alert(data["data"]);
        this.router.navigate(["/Dash"]);
      }
      else {
        alert(data["data"]);
      }
    })
  }
  verify() {
    debugger;
    if (this.ngForm.value.EmailId == "") {
      alert("Kindly provide EmailId");
      return true;
    }
    else {
      this.service.AccountVerify(this.ngForm.value).subscribe(data => {
        if (data["status"] == 200) {
          alert(data["data"]);
        }
        else {
          alert(data["data"]);
        }
      })
    }
  }
}






