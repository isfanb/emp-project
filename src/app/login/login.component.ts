import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;

  constructor(
    private _router : Router,
    private _formBuilder: FormBuilder,
    private _http : HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
 
  login() {
    this._http.get<any>('http://localhost:3000/signup')
    .subscribe(res => {
      const user = res.find((i : any) => {
        return i.email == this.loginForm.value.email && i.password == this.loginForm.value.password
      })
      if(user) {
        alert('login success')
        this.loginForm.reset()
        this._router.navigate(['employee-list'])
      } else {
        alert('user not found')
      }
    })
  }

}
