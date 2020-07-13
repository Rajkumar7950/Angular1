import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../Application.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: ApplicationService, private router: Router) { }
  ngForm = this.fb.group({
    EmailId: [localStorage.getItem('EmailId')],
    Password:['',Validators.compose([ Validators.required, Validators.minLength(6),Validators.maxLength(30)])],
    ConfirmPassword:['',Validators.required],
    TokenId:['',Validators.required],
  })
  ngOnInit(): void {
  }

  reset() {
    debugger;
    this.service.reset(this.ngForm.value).subscribe(data => {
      debugger;
      if (data["status"] == 200) {
        localStorage.removeItem("EmailId");
        alert(data["data"]);
        this.router.navigate([""]);
      }
      else {
        alert(data["data"]);
      }
    })
  }

}
