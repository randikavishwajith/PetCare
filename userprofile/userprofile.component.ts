import { forbiddenNameValidator } from 'src/app/Validations/user-name.validator';
import { PasswordValidator } from 'src/app/Validations/password.validator';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  action:boolean;
  Action:boolean;
  message:any;
  Message:any;
  id:any;
  member:any;
  constructor(private service:UserService,private fb:FormBuilder) { }
  UpdateForm: FormGroup;
  OtherRegisterForm: FormGroup;
  get Name(){
    return this.UpdateForm.get('name');
  }
  get Email(){
    return this.UpdateForm.get('email');
  }
  get contact(){
    return this.UpdateForm.get('contact');
  }
  get Password(){
    return this.OtherRegisterForm.get('password');
  }
  ngOnInit(): void {
    this.id=localStorage.getItem('id');
    this.getdetailsbyid();
    this.CreatingUserForm();
    this.CreatingOtherForm();
  }
  CreatingUserForm(){
    this.UpdateForm = this.fb.group({
      id: new FormControl(''),
      name: new FormControl('',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/Admin/),forbiddenNameValidator(/admin/)]),
      email:new FormControl('',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]),
      contact:new FormControl('',[Validators.required,Validators.compose([Validators.pattern('^[0-9]*$')]),Validators.minLength(10)])
    }); 
  }


  getdetailsbyid(){
    this.service.getUserById(this.id).subscribe(Data=>{
        this.member = Data;
        this.UpdateForm.controls['id'].setValue(this.member.id);
        this.UpdateForm.controls['email'].setValue(this.member.email);
        this.UpdateForm.controls['contact'].setValue(this.member.contact);
        this.OtherRegisterForm.controls['id'].setValue(this.member.id);
    });
  }
  CreatingOtherForm(){
    this.OtherRegisterForm = this.fb.group({
      id:[''],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmpassword:['']
    },
    {validator: PasswordValidator});
    
  }
  onSubmit(){
    if(this.UpdateForm.valid){
     let res = this.service.updateUser(this.UpdateForm.value);
     res.subscribe(data=>{ 
       this.message= "Update Success";
       this.ngOnInit();
    });
     this.action=true;
    }
    
  }
  OnSubmit(){
    if(this.OtherRegisterForm.valid){
      let res = this.service.updatePassword(this.OtherRegisterForm.value);
      res.subscribe(data=>{ 
        this.Message= "Update Success";
        this.ngOnInit();
     });
      this.Action=true;
     }

  }

}
