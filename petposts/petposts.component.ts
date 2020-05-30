import { PetService } from './../../service/pet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petposts',
  templateUrl: './petposts.component.html',
  styleUrls: ['./petposts.component.css']
})
export class PetpostsComponent implements OnInit {
  Posts:any;
  constructor(private service:PetService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.service.getPetposts().subscribe(Data=>{
      this.Posts=Data;
    });
  }

}
