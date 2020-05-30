import { PetMedicineHistoryComponent } from './../pet-medicine-history/pet-medicine-history.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from 'src/app/service/pet.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mypets',
  templateUrl: './mypets.component.html',
  styleUrls: ['./mypets.component.css']
})
export class MypetsComponent implements OnInit {

  pets:any;
  public popoverTitle:string='Delete Pet';
  public popoverMessage:string='You Wont be able to undo again';
  public confirmClicked:boolean = false;
  public cancelClicked:boolean = false;
   constructor(private rout:Router,private service:PetService, private dialog:MatDialog) { }
  opened = false;
  ngOnInit(): void {
    this.getpet();
  }

  getpet(){
    let idd = localStorage.getItem('id');
    this.service.getpetbyuuid(idd).subscribe(data=>{
        this.pets = data;       
    });  
}
 onClick(pet){
   localStorage.setItem('petid',pet.id);
   this.dialog.open(PetMedicineHistoryComponent);
 }
 Delete(id){
   this.service.DeletePet(id).subscribe(Data=>{
         this.ngOnInit();
   })
 }

}
