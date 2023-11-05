import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './users.service';
import { DataStorageService } from './dataStorage.service';
import { User } from './user.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  intakeForm: FormGroup;

  constructor(private usersService: UsersService, private dataStorageService: DataStorageService){}

  ngOnInit(): void {

    let clientName = '';
    let date = '';
    let address = '';
    let city = '';
    let zip = '';
    let homePhone = '';
    let workPhone = '';
    let email = '';
    let alternativeContact = '';
    let childNames = '';

    this.intakeForm = new FormGroup({
      'clientName': new FormControl(clientName, Validators.required),
      'date': new FormControl(date, Validators.required),
      'address': new FormControl(address, Validators.required),
      'city': new FormControl(city, Validators.required),
      'zip': new FormControl(zip, Validators.required),
      'homePhone': new FormControl(homePhone, Validators.required),
      'workPhone': new FormControl(workPhone),
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'alternativeContact': new FormControl(alternativeContact, Validators.required),
      'childNames': new FormControl(childNames, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.intakeForm);
    // this.usersService.addUser(this.intakeForm.value);
    this.dataStorageService.addUser(this.intakeForm.value);
  }

}
