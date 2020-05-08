import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormBuilder, FormControl, FormGroup, FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
UsersArr = [];
  constructor( private userService: UserService, private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    name: [''],
    lastName: [''],
    ID:[],
    mobile: [],
    gender:[''],
    imgURL: [""],
    legalAddress: this.fb.group({
      country:[''],
      city: [''],
      address: ['']
    })
  });



  ngOnInit() {
  this.userService.getUsers().subscribe(data => this.UsersArr = data);
  }

  addUser(registrationForm) {
this.UsersArr.push(registrationForm);
  }

}
