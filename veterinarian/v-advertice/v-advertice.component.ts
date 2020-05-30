import { Component, OnInit, Injectable } from '@angular/core';
import { VeterinarianService } from 'src/app/service/veterinarian.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {NgbTimeStruct, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';

const pad = (i: number): string => i < 10 ? `0${i}` : `${i}`;

/**
 * Example of a String Time adapter
 */
@Injectable()
export class NgbTimeStringAdapter extends NgbTimeAdapter<string> {

  fromModel(value: string| null): NgbTimeStruct | null {
    if (!value) {
      return null;
    }
    const split = value.split(':');
    return {
      hour: parseInt(split[0], 10),
      minute: parseInt(split[1], 10),
      second: parseInt(split[2], 10)
    };
  }

  toModel(time: NgbTimeStruct | null): string | null {
    return time != null ? `${pad(time.hour)}:${pad(time.minute)}` : null;
  }
}

@Component({
  selector: 'app-v-advertice',
  templateUrl: './v-advertice.component.html',
  styleUrls: ['./v-advertice.component.css'],
  providers: [{provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter}]
})
export class VAdverticeComponent implements OnInit {

  id:any;
  member:any;
  message: any;
  imageSrc:any;
  action:boolean;
  ClinicForm:FormGroup;
  public selectedFile: File;
  constructor(private service:VeterinarianService,private fb:FormBuilder) {
    this.ClinicForm = this.fb.group({
      vid: new FormControl('',Validators.required),
      vname: new FormControl('',Validators.required), 
      clinicname: new FormControl('',Validators.required), 
      date : new FormControl('', [Validators.required]),
      stime : new FormControl(''),
      ctime : new FormControl(''),
      decision: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      contact : new FormControl('',[Validators.required,Validators.compose([Validators.pattern('^[0-9]*$')])]),
    });
   }
   clinicname = new FormControl('', [Validators.required]);
   date = new FormControl('', [Validators.required]);
   city = new FormControl('', [Validators.required]);
   contact = new FormControl('', [Validators.required]);
   getErrorMessage() {
    if (this.clinicname.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.city.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.date.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.contact.hasError('required')) {
      return 'You must enter a value';
    }
  }
  get decision(){
    return this.ClinicForm.get('decision');
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

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.getVByID();
  }

  getVByID(){
    this.service.getUserById(this.id).subscribe(Data=>{
      this.member = Data ;
    });
  }

  onUpload(ClinicForm:FormGroup){
    let idd = localStorage.getItem('id');
    let Vname = this.member.name;
    ClinicForm.patchValue({     
      vid:idd,
      vname: Vname
    });  
   if (ClinicForm.valid) { 
      const clinic = ClinicForm.value;
      const formData = new FormData;
      formData.append('clinic',JSON.stringify(clinic));
      formData.append('file',this.selectedFile, this.selectedFile.name);
      this.service.Clinic(formData).subscribe((response) => {
        console.log(response);
        this.message = response;
        this.ngOnInit();
      });
     this.ClinicForm.reset(); 
     return this.action=true;              
    }    
  }
}
