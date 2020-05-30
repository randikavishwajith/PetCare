import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';
import {NgbTimeStruct, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { PharmacyserviceService } from 'src/app/service/pharmacyservice.service';

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
  selector: 'app-p-advertice',
  templateUrl: './p-advertice.component.html',
  styleUrls: ['./p-advertice.component.css'],
  providers: [{provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter}]
})
export class PAdverticeComponent implements OnInit {

  id:any;
  member:any;
  message: any;
  imageSrc:any;
  action:boolean;
  PharmcyForm:FormGroup;
  public selectedFile: File;
  constructor(private service:PharmacyserviceService,private fb:FormBuilder) {
    this.PharmcyForm = this.fb.group({
      pid: new FormControl('',Validators.required),
      pname: new FormControl('',Validators.required), 
      pharmacyname: new FormControl('',Validators.required), 
      date : new FormControl('', [Validators.required]),
      stime : new FormControl(''),
      ctime : new FormControl(''),
      decision: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      contact : new FormControl('',[Validators.required,Validators.compose([Validators.pattern('^[0-9]*$')])]),
    });
   }
   pharmacyname = new FormControl('', [Validators.required]);
   date = new FormControl('', [Validators.required]);
   city = new FormControl('', [Validators.required]);
   contact = new FormControl('', [Validators.required]);
   getErrorMessage() {
    if (this.pharmacyname.hasError('required')) {
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
    return this.PharmcyForm.get('decision');
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

  onUpload(PharmcyForm:FormGroup){
    let idd = localStorage.getItem('id');
    let Pname = this.member.name;
    PharmcyForm.patchValue({     
      pid:idd,
      pname: Pname
    });  
   if (PharmcyForm.valid) { 
      const pharmacy = PharmcyForm.value;
      const formData = new FormData;
      formData.append('pharmacy',JSON.stringify(pharmacy));
      formData.append('file',this.selectedFile, this.selectedFile.name);
      this.service.Pharmacy(formData).subscribe((response) => {
        console.log(response);
        this.message = response;
        this.ngOnInit();
      });
     this.PharmcyForm.reset(); 
     return this.action=true;              
    }    
  }
}
