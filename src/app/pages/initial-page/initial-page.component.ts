import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sm-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {
  constructor() { }

  public menu: string = 'login';

  ngOnInit(): void {
  }

  public onMenuChange(option: string) {
    if(option === 'login') {
      this.menu = 'login';
    }
    else if(option === 'register') {
      this.menu = 'register';
    }
  }

}


