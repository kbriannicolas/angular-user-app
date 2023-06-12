import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { UserupdateService } from './../../service/userupdate.service';
import { DetailuserService } from "./../../service/detailuser.service";

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent {
  editUser: User = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    avatar: '',
  };
  originalAvatar: string = "";

  constructor(
    private userService: UserupdateService,
    private detailUserService: DetailuserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        const userId = params['id'];
        return this.detailUserService.getUser(userId);
      })
    ).subscribe((user: User) => {
      this.editUser = user;
      this.originalAvatar = user.avatar || '';
    });
  }

  handleAvatarChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.editUser.avatar = file;
    } else {
      this.editUser.avatar = this.originalAvatar;
    }
  }

  submitForm() {
    this.userService.updateUser(this.editUser).subscribe({
      next: (response) => {
        this.editUser = {
          id: '',
          firstname: '',
          lastname: '',
          email: '',
          avatar: '',
        };
        alert('modified user')
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.error('Error al actualizar usuario:', error);
      },
    });
  }

}
