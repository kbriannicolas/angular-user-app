import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailuserService } from './../../service/detailuser.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user: User | undefined;

  constructor(private route: ActivatedRoute, private userService: DetailuserService) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    
    if (userId) {
      this.userService.getUser(userId).subscribe((user) => {
        this.user = user;
      });
    }
  }
}
