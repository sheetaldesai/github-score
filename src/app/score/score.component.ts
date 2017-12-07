import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';
import { scan } from 'Rxjs/operators/scan';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent implements OnInit {
  
  user : User;
  score : number;
  errMessage : string;
  
  constructor(private _dataService : DataService) { 
   
  }

  ngOnInit() {
    //console.log(this._dataService.user$);
    this._dataService.user.subscribe((user) => {
      this.user = user;
      console.log("score ", user);
      this.calculateScore();
      this.errMessage = this._dataService.errMessage;
    });
     
  }

  calculateScore() {
    this.score = this.user.public_repos + this.user.followers;
    console.log("score ", this.score);
  }

}
