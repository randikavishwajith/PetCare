import { Component, OnInit } from '@angular/core';
import { PharmacyserviceService } from 'src/app/service/pharmacyservice.service';

@Component({
  selector: 'app-userpharmacies',
  templateUrl: './userpharmacies.component.html',
  styleUrls: ['./userpharmacies.component.css']
})
export class UserpharmaciesComponent implements OnInit {
  Pharmacies:any;
  City:any;
  constructor(private service:PharmacyserviceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.service.getallpharacies().subscribe((Data)=>this.Pharmacies= Data);
   }
   findBycity(){
     this.service.findbycity(this.City).subscribe(Data=>{
       this.Pharmacies = Data;
     });
   }

   All(){
     this.getAll();
     this.City ="";
   }
}
