import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/service/pet.service';
import { MatDialog } from '@angular/material/dialog';
import { VeterinarianService } from 'src/app/service/veterinarian.service';

@Component({
  selector: 'app-pet-medicine-history',
  templateUrl: './pet-medicine-history.component.html',
  styleUrls: ['./pet-medicine-history.component.css']
})
export class PetMedicineHistoryComponent implements OnInit {

  details:any;
  histys:any;
  constructor( private rout:ActivatedRoute ,private service:PetService, private routt:Router,private dialog: MatDialog, private Service:VeterinarianService) { }

  ngOnInit(){
    let id = localStorage.getItem('petid');
    this.Service.getHistoryBypetid(id).subscribe((Data)=>this.histys =Data);  
      this.getBypetid();
  }
  getBypetid(){
    let id = localStorage.getItem('petid');
    this.service.getPetByid(id).subscribe(Data=>{
        this.details = Data;
    });
  }
  public close(){ 
    this.dialog.closeAll();
  }

}
