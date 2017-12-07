import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username : string = "";
  user : User = new User();
  constructor(private _dataService:DataService) { }

  ngOnInit() {
  }

  onCalculateScore(){
    console.log(this.username);
    this._dataService.callAPI(this.username);
  }

}
