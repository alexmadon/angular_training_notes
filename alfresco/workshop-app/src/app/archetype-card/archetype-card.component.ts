import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-archetype-card',
  templateUrl: './archetype-card.component.html',
  styleUrls: ['./archetype-card.component.css']
})
export class ArchetypeCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    @Input() archetype;
    @Output() clickevent= new EventEmitter();
    clickarchetype(archetype){
	console.log('clicked on',archetype);
	this.clickevent.emit(archetype);

    }
}
