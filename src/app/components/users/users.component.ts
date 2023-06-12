import { Component } from '@angular/core';
import { User } from './../../models/user.model';
import { Router } from '@angular/router';
import { UserServiceService } from './../../service/user-service.service';
import { UserDeleteServiceService} from './../../service/user-delete-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [];

  constructor(
    private userService: UserServiceService,
    private userDeleteService: UserDeleteServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(userId: string) {
    this.userDeleteService.deleteUser(userId).subscribe({
      next: (response) => {
        alert('User deleted successfully');
        this.router.navigateByUrl('/create');
      },
      error: (error) => {
        console.error('Error al eliminar usuario:', error);
      },
    });
  }
}
