import { PharmacyserviceService } from './../../../service/pharmacyservice.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepharmacyComponent } from '../updatepharmacy/updatepharmacy.component';

@Component({
  selector: 'app-p-home',
  templateUrl: './p-home.component.html',
  styleUrls: ['./p-home.component.css']
})
export class PHomeComponent implements OnInit {
  id: any;
  Pharmacies:any;
  public popoverTitle:string='Delete Pet';
  public popoverMessage:string='You Wont be able to undo again';
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;
  constructor(private servie:PharmacyserviceService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.getPharmacies();
  }
  getPharmacies(){
    this.servie.getPharmaciesBypid(this.id).subscribe((Data)=>this.Pharmacies=Data);
  }
  Submit(id){
    localStorage.setItem('phid',id);
    this.dialog.open(UpdatepharmacyComponent);
    }
    Delete(id){
      this.servie.DeletePharmacy(id).subscribe(Data=>{
        this.getPharmacies(); 
      })
    }

}
