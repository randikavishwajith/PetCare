import { Component, OnInit, ViewChild } from '@angular/core';
import { VeterinarianService } from 'src/app/service/veterinarian.service';

@Component({
  selector: 'app-homeclinics',
  templateUrl: './homeclinics.component.html',
  styleUrls: ['./homeclinics.component.css']
})
export class HomeclinicsComponent implements OnInit {

  Clinics:any;
  City:any;
  constructor( private service: VeterinarianService) {  }
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this. service.allclinics().subscribe(Data=>{
      this.Clinics = Data;
    });
  }
  findBycity(){
    this.service.findbycity(this.City).subscribe(Data=>{
      this.Clinics = Data;
    });
  }

  All(){
    this.getAll();
    this.City ="";
  }

}
