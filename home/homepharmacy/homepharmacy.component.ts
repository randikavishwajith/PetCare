import { Component, OnInit } from '@angular/core';
import { PharmacyserviceService } from 'src/app/service/pharmacyservice.service';

@Component({
  selector: 'app-homepharmacy',
  templateUrl: './homepharmacy.component.html',
  styleUrls: ['./homepharmacy.component.css']
})
export class HomepharmacyComponent implements OnInit {
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
