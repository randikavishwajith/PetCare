import { Component, OnInit } from '@angular/core';
import { PharmacyserviceService } from 'src/app/service/pharmacyservice.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/Validations/user-name.validator';
import { PasswordValidator } from 'src/app/Validations/password.validator';

@Component({
  selector: 'app-p-update-profile',
  templateUrl: './p-update-profile.component.html',
  styleUrls: ['./p-update-profile.component.css']
})
export class PUpdateProfileComponent implements OnInit {

  action:boolean;
  Action:boolean;
  message:any;
  Message:any;
  id:any;
  member:any;

  constructor(private fb:FormBuilder, private service:PharmacyserviceService) { }
  UpdateForm: FormGroup;
  OtherRegisterForm: FormGroup;
  hide = true;
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
     let res = this.service.updateprofile(this.UpdateForm.value);
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
