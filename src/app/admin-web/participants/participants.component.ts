import { Component, OnInit } from '@angular/core';
import { User } from '../forms/user.model';
import { UsersService } from '../shared/users.service';
import { DataStorageService } from '../shared/dataStorage.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private usersService: UsersService, private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.users = from(this.usersService.getUsers());
  }

}
