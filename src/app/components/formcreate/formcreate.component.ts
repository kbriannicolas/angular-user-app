import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "./../../models/user.model";
import { AdduserService } from "./../../service/adduser.service";


@Component({
  selector: 'app-formcreate',
  templateUrl: './formcreate.component.html',
  styleUrls: ['./formcreate.component.css']
})
export class FormcreateComponent {
  newUser: User = {
    id:'',
    firstname: '',
    lastname: '',
    email: '',
    avatar: ''
  };

  constructor(private userService: AdduserService, private router: Router) { }

  submitForm() {
    this.userService.addUser(this.newUser).subscribe({
      next: (response) => {
        alert('User added successfully');
        this.newUser = {
          id:'',
          firstname: '',
          lastname: '',
          email: '',
          avatar: ''
        };
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.error('Error al agregar usuario:', error);
      }
    });
  }
}
