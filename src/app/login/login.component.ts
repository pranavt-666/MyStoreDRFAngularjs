import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form = new FormGroup(
    {
    "username": new FormControl("", [Validators.required]),
    "password": new FormControl("", [Validators.required])

  }
  )
  constructor(private router:Router){

  }
  get username(){
    return this.form.get("username")
  }
  get password(){
    return this.form.get("password")
    
  }

  handleLogin(){
    console.log(this.form.value);
    this.router.navigateByUrl("productlist")
  }
}
