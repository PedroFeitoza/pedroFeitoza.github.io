import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() menuChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  emailFormControl = new FormControl('', []);

  public changeMenu(): void {
    this.menuChange.emit('login');
  }
}
