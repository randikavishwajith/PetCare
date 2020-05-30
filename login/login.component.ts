import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  id:any;
 //users:Users[];

 constructor(private router:Router, private dialog: MatDialog, private service:UserService,private fb:FormBuilder, private route:ActivatedRoute) { }
 UserLoginForm: FormGroup;
 get email(){
   return this.UserLoginForm.get('email');
 }
 get password(){
   return this.UserLoginForm.get('password');
 }

 CreatingUserForm(){
   this.UserLoginForm = this.fb.group({
     email:['',Validators.required],
     password:['',Validators.required]
   
 });
}



onSubmit(){
   if(this.UserLoginForm.valid){
     let res= this.service.login(this.UserLoginForm.value);
     res.subscribe(data=>{
       this.user = data;
       localStorage.setItem('role',data);
       this.logid();
     } ); 
   }   
 }




 logid(){
   if(this.UserLoginForm.valid){
     let res= this.service.logid(this.UserLoginForm.value);
     res.subscribe(
       data=>{
         this.id = data;
        localStorage.setItem('id',this.id);
        let role= localStorage.getItem('role');  
        let id=localStorage.getItem('id');

        if(role ==="User"){
         this.router.navigate(['/userhome',id]); 
         this.dialog.closeAll(); 
        }
        if(role ==="Veterinarian"){
         this.router.navigate(['/Veterinarian',id]); 
         this.dialog.closeAll(); 
        }
        if(role ==="Pharmacy"){
          this.router.navigate(['/pharmacy',id]); 
          this.dialog.closeAll(); 
        }
        if(role ==="Admin"){
          this.router.navigate(['/admin',id]);
          this.dialog.closeAll();
        }
        
       }       
     );
     //this.uid=parseInt(this.id);     
   } 
 }

 ngOnInit() {
   this.CreatingUserForm();  
   //console.log(this.id);
   
 }
//redirect to singin if not
 public SignIn():void{
   this.router.navigate(['/signin']);
   this.dialog.closeAll();
}
//close button
public close(){
  this.dialog.closeAll();
}
//'signin'

}
