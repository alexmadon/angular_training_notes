import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


const API_URL = 'http://swapi.co/api/people/';


@Injectable()
export class SwappDataService {

    constructor(private http: Http) { }

    getData() {
	return this.http.get(API_URL )
	    .do( res => console.log('Response: ', res) )
	    .map(res => res.json())
	    .map(data => data.results)
   
	;
    }

}
