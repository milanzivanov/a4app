import { Injectable } from '@angular/core';

// services
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('Data services connected...');
  }

  // fetch services
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(res => res.json());
  }

}
