import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-model-drivenforms',
  templateUrl: './model-drivenforms.component.html',
  styleUrls: ['./model-drivenforms.component.css']
})
export class ModelDrivenformsComponent implements OnInit {

  constructor() { }


  loginForm = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),
    psw: new FormControl()
  });

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.loginForm.value);
  }
}
