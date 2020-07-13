import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../Application.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  token: any;
  code: number;
  errorMsg: any;
  displayName: Object;
  swapna: boolean = false;

  data(data: any) {
    throw new Error("Method not implemented.");
  }
  status: number;
  constructor(private fb: FormBuilder, private servive: ApplicationService, private router: Router) { }

  ngOnInit(): void {
  }
  ngForm = this.fb.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    EmailId: ['', Validators.required],
    MobileNo: ['', Validators.required],
    UserName: ['', Validators.required],
    Password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(30)])],
    ConfirmPassword: ['', Validators.required]
  })
  get FirstName() {
    return this.ngForm.controls['FirstName'];
  }
  get LastName() {
    return this.ngForm.controls['LastName'];
  }
  get EmailId() {
    return this.ngForm.controls['EmailId'];
  }
  get MobileNo() {
    return this.ngForm.controls['MobileNo'];
  }
  get UserName() {
    return this.ngForm.controls['UserName'];
  }
  get Password() {
    return this.ngForm.controls['Password'];
  }
  get ConfirmPassword() {
    return this.ngForm.controls['ConfirmPassword'];
  }
  Regi() {
    debugger;
    if (this.ngForm.invalid) {
      this.swapna = true;
      return true;
    }
    else {
      this.ngForm.value.MobileNo = Number(this.ngForm.value.MobileNo);

      this.servive.postReg(this.ngForm.value).subscribe(data => {
        debugger;
        if (data["status"] = 200) {
          alert(data["data"]);
          debugger;
          this.router.navigate([""]);
        }
        else {
          alert(data["data"]);
        }
      })
    }
  }
}
