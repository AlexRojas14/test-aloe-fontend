import { Component, OnInit } from '@angular/core';

import { UserDto } from 'src/app/dto/user.dto';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public name: string;
  public lastName: string;
  public sex: string;
  public identification: string;
  public birthDate: string;
  public department: string;
  public position: string;
  public immediateSupervisor: string;

  public users: UserDto[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
