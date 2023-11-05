import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../shared/users.service';
import { DataStorageService } from '../shared/dataStorage.service';
import { User } from './user.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  intakeForm: FormGroup;
  formSubmitted = false;

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
    this.showNotification()
    console.log(this.intakeForm);
    const user = {...this.intakeForm.value, isAdmin: false};
    this.usersService.addUser(user);
    this.intakeForm.reset()

  }
  showNotification(){
    if(this.formSubmitted === true){
      setTimeout(() => {
        this.formSubmitted = false;
       }, 3000);
    }
    }

}
