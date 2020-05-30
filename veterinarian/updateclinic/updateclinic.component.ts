import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Injectable } from '@angular/core';
import {NgbTimeStruct, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { VeterinarianService } from 'src/app/service/veterinarian.service';

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
  selector: 'app-updateclinic',
  templateUrl: './updateclinic.component.html',
  styleUrls: ['./updateclinic.component.css'],
  providers: [{provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter}]
})
export class UpdateclinicComponent implements OnInit {

  id:any;
  Clinics:any;
  message:any;
  action:any;
  UpdateForm:FormGroup;
  constructor(private dialog:MatDialog, private fb:FormBuilder, private service:VeterinarianService) {
    this.UpdateForm = this.fb.group({
      id: new FormControl(''),
      date: new FormControl('', [Validators.required]),
      stime : new FormControl(''),
      ctime : new FormControl(''),
      decision: new FormControl('',Validators.required),
    });
  }
  date = new FormControl('', [Validators.required]);

  get decision(){
    return this.UpdateForm.get('decision');
  }
  ngOnInit(): void {
    this.id = localStorage.getItem('clid');
    this.UpdateForm.controls['id'].setValue(this.id);
  }
  getErrorMessagedate(){
    if (this.date.hasError('required')) {
      return 'You must enter a value';
    }
  }
  close(){
    this.dialog.closeAll();
  }
  OnSubmit(){
    
    if(this.UpdateForm.valid){
       this.service.updateClinicdate(this.UpdateForm.value).subscribe(data=>{
         this.message = "Updated";
         this.action = true;
       });
    }
  }
}
