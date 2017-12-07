import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class DataService {

  user: BehaviorSubject<User> = new BehaviorSubject(new User());
  errMessage : string = "";

  constructor(private _http: HttpClient) { }

  callAPI(username: string){
    const url = "https://api.github.com/users/" + username;
    console.log(url);
    // this._http.get(url).subscribe(res=>
    //   {
    //     console.log("API response ", res);
    //     this.user.next(new User(res["login"],
    //                             res["public_repos"],
    //                             res["followers"],
    //                             res["following"]));
    //   },
    //   err=> {
    //     console.log(err.error.message);
    //     this.errMessage = err.error.message;
    //     this.user.next(new User());
    //   }
    // )

    this._http.get(url).toPromise().then(res=>
      this.user.next(new User(res["login"],
                                res["public_repos"],
                                res["followers"],
                                res["following"]))).catch(reason =>
                                  {
                                    this.errMessage = reason.error.message;
                                    console.log(this.errMessage);
                                    this.user.next(new User());
                                });

  }

}
