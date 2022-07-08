import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
      fullname : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  signup() {
    this._http.post<any>('http://localhost:3000/signup', this.signupForm.value)
    .subscribe(res => {
      alert('signup success')
      this.signupForm.reset()
      this._router.navigate(['login'])
    },
    error => {
      alert('something wrong')
    })
  }

}
