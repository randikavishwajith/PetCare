import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/service/pet.service';
import { UserService } from 'src/app/service/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-petsell',
  templateUrl: './petsell.component.html',
  styleUrls: ['./petsell.component.css']
})
export class PetsellComponent implements OnInit {

  message: any;
  member :any;
  id:any;
  imageSrc:any;
  action:boolean;
  PetSellForm:FormGroup;
  public selectedFile: File;
  images:any[];
 

  constructor(private service:PetService, private Service:UserService ,private fb:FormBuilder) { 
    this.PetSellForm = this.fb.group({
      uid : new FormControl(''), 
      breed: new FormControl('',Validators.required),
      subbreed: new FormControl('',Validators.required),
      contact : new FormControl('',[Validators.required,Validators.compose([Validators.pattern('^[0-9]*$')]),Validators.minLength(10)]),
      description : new FormControl('',[Validators.required])
    });
  }

  get contact(){
    return this.PetSellForm.get('contact');
  }
  get description(){
    return this.PetSellForm.get('description');
  }
  get breed(){
    return this.PetSellForm.get('breed');
  }
  get subbreed(){
    return this.PetSellForm.get('subbreed');
  }
  ngOnInit(): void {
    this.id=localStorage.getItem('id');
    this.getdetailsbyid();
  }

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
        this.PetSellForm.controls['contact'].setValue(this.member.contact);
    });
  }

  onUpload(PetSellForm:FormGroup){
    let idd = localStorage.getItem('id');
    PetSellForm.patchValue({     
      uid:idd
    });  
   if (PetSellForm.valid) { 
      const pet = PetSellForm.value;
      const formData = new FormData;
      formData.append('pet',JSON.stringify(pet));
      formData.append('file',this.selectedFile, this.selectedFile.name);
      this.service.SellPet(formData).subscribe((response) => {
        console.log(response);
        this.message = response;
        this.ngOnInit();
      });
     this.PetSellForm.reset(); 
     return this.action=true;              
    }    
  }
}
