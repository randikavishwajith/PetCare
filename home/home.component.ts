import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { PetService } from 'src/app/service/pet.service';

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
