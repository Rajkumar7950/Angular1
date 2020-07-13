import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../Application.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {


  constructor(private fb: FormBuilder, private service: ApplicationService, private router: Router) { }

  ngForm = this.fb.group({
    EmailId: [localStorage.getItem("EmailId")]
  })



  ngOnInit(): void {
  }
  logout() {
    debugger;
    this.service.logout(this.ngForm.value).subscribe(data => {
      debugger;
      if (data["status"] == 200) {      
        localStorage.clear();
        this.router.navigate([""]);
      }
      else {
        alert(data["data"]);
      }
    })


  }
}
