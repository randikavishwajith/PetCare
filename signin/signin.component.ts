
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PasswordValidator } from 'src/app/Validations/password.validator';
import { forbiddenNameValidator } from 'src/app/Validations/user-name.validator';
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

action:boolean;
 message:any;
 Message:any;
 user:any;
  constructor(private service:UserService, private fb:FormBuilder,public dialog: MatDialog) { }
  UserRegisterForm: FormGroup;
  OtherRegisterForm: FormGroup;

  get name(){
    return this.UserRegisterForm.get('name');
  }
  get email(){
    return this.UserRegisterForm.get('email');
  }
  get contact(){
    return this.UserRegisterForm.get('contact');
  }
  get password(){
    return this.UserRegisterForm.get('password');
  }
  get Name(){
    return this.OtherRegisterForm.get('name');
  }
  get Email(){
    return this.OtherRegisterForm.get('email');
  }
  get Contact(){
    return this.OtherRegisterForm.get('contact');
  }
  get Password(){
    return this.OtherRegisterForm.get('password');
  }
  get role(){
    return this.OtherRegisterForm.get('role');
  }
 //get confirmpassword(){
    //return this.UserRegisterForm.get('confirmpassword');
 // }

  CreatingUserForm(){
    this.UserRegisterForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/Admin/),forbiddenNameValidator(/admin/)]],
      role:['User'],
      email:['',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmpassword:[''],
      contact:['',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
      approve:['']
    },
    {validator: PasswordValidator});
    
  }
  CreatingOtherForm(){
    this.OtherRegisterForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/Admin/),forbiddenNameValidator(/admin/)]],
      role:['',Validators.required],
      email:['',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmpassword:[''],
      contact:['',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
      approve:['']
    },
    {validator: PasswordValidator});
    
  }


  ngOnInit() {
    this.CreatingUserForm();
    this.CreatingOtherForm();
  }

  OnSubmit(){
    this.OtherRegisterForm.patchValue({
      approve:false
    });
   if (this.OtherRegisterForm.valid) { 
      let res=this.service.addUser(this.OtherRegisterForm.value);
      res.subscribe((data)=>this.message=data);
     this.OtherRegisterForm.reset();
    this.action=true;          
    }
  }
  onSubmit() {
    this.UserRegisterForm.patchValue({
      role:'User',
      approve:true
    });
   if (this.UserRegisterForm.valid) { 
      this.service.addUser(this.UserRegisterForm.value)
     .subscribe(
       data => this.Message=data,
       error => this.Message=error
       );
     this.UserRegisterForm.reset();
    this.action=true;          
    }
  }
}
