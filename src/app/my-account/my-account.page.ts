import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  typedEmail;
  typedPassword;
  emailError;
  passwordError;
  loginState;
  userEmail;
  loggedinUser;
  accounts=[{name:"Admin",email:"admin@gmail.com",password:"123123"}]

  constructor() {
    if(localStorage.getItem("loggedin")){
      if(localStorage.getItem("loggedin")=="true"){
        this.loginState=true
        this.loggedinUser=_.find(this.accounts, { 'email': localStorage.getItem("userEmail")});
      }else{
        this.loginState=false
      }
    }else{
      this.loginState=false
    }
    
    this.userEmail=localStorage.getItem("userEmail")
   }

  ngOnInit() {
  }

  inputChange(){
    console.log("input changed")
    this.emailError=""
    this.passwordError=""
  }

  logout(){
    localStorage.setItem("loggedin","false")
    this.loginState=false
  }

  login(){
    const accountDetails =_.find(this.accounts, { 'email': this.typedEmail});
    console.log(this.typedEmail)
    if(accountDetails){
      console.log(accountDetails)
      if(accountDetails.password==this.typedPassword){
        console.log("Logado com sucesso")
        localStorage.setItem("loggedin","true")
        localStorage.setItem("userEmail",accountDetails.email)
        this.loginState=true
        this.loggedinUser=accountDetails
      }else{
        this.passwordError="Senha incorreta"
        console.log("Senha incorreta")
      }
    }else{
      this.emailError="Email inválido"
      console.log("Email inválido")
    }
  }

}
