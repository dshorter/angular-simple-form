import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-apple-form',
  templateUrl: './apple-form.component.html',
  styleUrls: ['./apple-form.component.css']
})
export class AppleFormComponent implements OnInit {

  constructor() { }

  pearName = "Jersey Pear"
  
  ngOnInit() {
  }

}