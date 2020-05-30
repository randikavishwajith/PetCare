import { Component, OnInit } from '@angular/core';
import { VeterinarianService } from 'src/app/service/veterinarian.service';

@Component({
  selector: 'app-userclinics',
  templateUrl: './userclinics.component.html',
  styleUrls: ['./userclinics.component.css']
})
export class UserclinicsComponent implements OnInit {

  Clinics:any;
  City:any;
  constructor( private service: VeterinarianService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this. service.allclinics().subscribe((Data)=>this.Clinics = Data)
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
