import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';  
 
@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

  // Url :string;  
  // token : string;  
  // header : any;  
  // constructor(private http : HttpClient) {   
  //   this.Url = 'https://localhost:44334/api/LoginApplication';  
  //   const headerSettings: {[name: string]: string | string[]; } = {};  
  //   this.header = new HttpHeaders(headerSettings);  
  // }  

  // Login(model : any){  
  //   debugger;  
  //    var a =this.Url+'UserLogin';  
  //  return this.http.post<any>(this.Url+'LoginApp',model,{ headers: this.header});  
  // }  


  constructor(private http:HttpClient){

  }


  login(c){
    debugger;
    return this.http.post('https://localhost:44317/api/App/loginApp',c);
  }

  logout(c){
    debugger;
    return this.http.post('https://localhost:44317/api/App/LogOut',c);
  }
forgot(c){
    debugger;
    return this.http.post('https://localhost:44317/api/App/Forgot',c);
  }
  reset(c){
    debugger;
    return this.http.post('https://localhost:44317/api/App/Reset',c);
  }
  postReg(c){
    debugger;
    return this.http.post('https://localhost:44317/api/App/Reg',c);
  }

  AccountVerify(c) {
    return this.http.post('https://localhost:44317/api/App/AccountVerify',c);
  }
 
  Activate(c) {
    return this.http.post('https://localhost:44317/api/App/Activate',c);
  }
 


  
}
