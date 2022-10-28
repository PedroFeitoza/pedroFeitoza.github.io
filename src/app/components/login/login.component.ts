import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'sm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() menuChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  emailFormControl = new FormControl('', []);

  public changeMenu(): void {
    this.menuChange.emit('register');
  }
}



