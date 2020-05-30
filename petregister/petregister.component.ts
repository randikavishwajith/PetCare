import { forbiddenNameValidator } from 'src/app/Validations/user-name.validator';
import { HttpClient } from '@angular/common/http';

import { PetService } from './../../service/pet.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-petregister',
  templateUrl: './petregister.component.html',
  styleUrls: ['./petregister.component.css']
})
export class PetregisterComponent implements OnInit {
  message: any;
  member :any;
  id:any;
  imageSrc:any;
  action:boolean;
  PetRegisterForm:FormGroup;
  public selectedFile: File;
  images:any[];

  constructor(private service:PetService,private Service:UserService ,private fb:FormBuilder, private sanitizer: DomSanitizer,private http:HttpClient) { 
    this.PetRegisterForm = this.fb.group({
      uuid : new FormControl(''), 
      ownername:new FormControl('',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/Admin/),forbiddenNameValidator(/admin/)]),
      petname : new FormControl('',[Validators.required]),
      age : new FormControl('',[Validators.required,Validators.compose([Validators.pattern('^[0-9]*$')])]),
      breed: new FormControl('',Validators.required),
      contact : new FormControl('',[Validators.required,Validators.compose([Validators.pattern('^[0-9]*$')]),Validators.minLength(10)]),
      description : new FormControl('',[Validators.required])
    });
  }
  ngOnInit() {  
    this.id=localStorage.getItem('id');
    this.getdetailsbyid();
  }
  
  get petname(){
    return this. PetRegisterForm.get('petname');
  }
  get name(){
    return this. PetRegisterForm.get('ownername');
  }
  get age(){
    return this. PetRegisterForm.get('age');
  }
  get contact(){
    return this.PetRegisterForm.get('contact');
  }
  get description(){
    return this.PetRegisterForm.get('description');
  }
  get breed(){
    return this.PetRegisterForm.get('breed');
  }
  
    //Gets called when the user selects an image
  onFileChanged(event) {
      //Select File
      const reader = new FileReader(); 
      const file =event.target.files[0];
      this.selectedFile = file;
      reader.readAsDataURL(file);
      reader.onload = () => { 
        this.imageSrc = reader.result as string;         
      };
    
    }
    getdetailsbyid(){
      this.Service.getUserById(this.id).subscribe(Data=>{
          this.member = Data;
          this.PetRegisterForm.controls['ownername'].setValue(this.member.name);
          this.PetRegisterForm.controls['contact'].setValue(this.member.contact);
      });
    }
    
    onUpload(PetRegisterForm :FormGroup){
    let idd = localStorage.getItem('id');
    PetRegisterForm.patchValue({     
      uuid:idd
    });  
   if (PetRegisterForm.valid) { 
      const pet = PetRegisterForm.value;
      const formData = new FormData;
      formData.append('pet',JSON.stringify(pet));
      formData.append('file',this.selectedFile, this.selectedFile.name);
      this.service.addPet(formData).subscribe((response) => {
        console.log(response);
        this.message = response;
        this.ngOnInit();
      });
     this.PetRegisterForm.reset(); 
     return this.action=true; 
     
               
    }
  
    
  }
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

}
