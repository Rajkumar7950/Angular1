import { Component, OnInit } from '@angular/core';
 
import { Validators, FormBuilder } from '@angular/forms';
import { ApplicationService } from '../Application.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

errorMsg: any;
 

constructor(private fb: FormBuilder, private servive: ApplicationService, private router: Router) { }

ngOnInit(): void {
  }

ngForm = this.fb.group({
EmailId: ['', Validators.required],
TokenId: ['', Validators.required]
  })

get EmailId() {
return this.ngForm.controls['EmailId'];
  }

get TokenId() {
return this.ngForm.controls['TokenId'];
  }

enroll() {
debugger;

this.servive.Activate(this.ngForm.value).subscribe(data=> {
debugger;
if (data["status"] == 200) {
alert(data["data"]);
this.router.navigate(["/"]);
      }
else {
alert(data["message"]);
      }
    })
      , (error: any) => {
this.errorMsg = error.statusText;
      }
  }
}


 
