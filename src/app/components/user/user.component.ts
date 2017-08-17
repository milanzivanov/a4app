import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  // object
  // address: {
  //   street:string,
  //   city:string,
  //   state:string
  // }

  // interface
  address: Address;

  // arrays
  hobbies:string[];
  test:any;
  // services
  posts:Post[];
  // *ngIf
  isEdit:boolean = false;

  constructor(private DataService:DataService) {
    console.log('constructor ran...');
    this.name = 'milanZ';
    this.age = 34;
    this.email = 'test@test.com';
    this.address = {
      street: 'Vasarska 59',
      city: 'Novi Knezevac',
      state: 'Serbia'
    }
    this.hobbies = ['earn to code', 'Learn angular2', 'Rest'];
    this.test = [1, 'test', true, 34];

    // services
    this.DataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
  }

  // events functions

  onClick() {
    // console.log("working");
    this.name = 'Milan Zivanov Live';
    this.hobbies.push("New hobbies");
  }

  // forms
  addHobby(hobby:string) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  // delite pitanje!!!
  deliteHobby(hobby) {
    // console.log(hobby);
    for(let i = 0;i < this.hobbies.length;i++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  // *ngIf
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
    street:string,
    city:string,
    state:string
}

// services
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
