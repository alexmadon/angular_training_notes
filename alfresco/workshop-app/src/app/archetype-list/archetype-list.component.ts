import { Component, OnInit } from '@angular/core';
// import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { SwappDataService } from '../swapp-data.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-archetype-list',
  templateUrl: './archetype-list.component.html',
  styleUrls: ['./archetype-list.component.css']
})



export class ArchetypeListComponent implements OnInit {

    @Output() clickRelay = new EventEmitter();

    swappData$: Observable<any>;
    
    constructor(private sds: SwappDataService) { }

    ngOnInit() {
	this.swappData$ = this.sds.getData();
  }

    // @Input() archetype;


    onclickevent(event){
	console.log('ArchetypeCardComponent: user clicked archetype', event);
	this.clickRelay.emit(event);
    }
}
