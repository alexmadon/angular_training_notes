import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-name',
  templateUrl: './character-name.component.html',
  styleUrls: ['./character-name.component.css']
})


export class CharacterNameComponent implements OnInit {
  characterNameFormGroup: FormGroup;

    constructor(private fb: FormBuilder) {
	this.characterNameFormGroup = this.fb.group({
	    
	    characterName: ['', [Validators.minLength(3), Validators.required]] //,
	    // optional: ['angular bootcamp']
	});
	
    }

  ngOnInit() {
  }


}
