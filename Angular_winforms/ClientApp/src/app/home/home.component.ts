import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Axial_loads_on_fixed_bearings } from '../Models/Axial_loads_on_fixed_bearings';
import { Dependence_of_the_coefficient_of_linear } from '../Models/Dependence_of_the_coefficient_of_linear';

import { Compensators_with_groovlock_stainless_steel_pipe } from '../Models/Compensators_with_groovlock_stainless_steel_pipe';
import { Compensators_with_screwed_flanged_and_staimless_steel_pipes } from '../Models/Compensators_with_screwed_flanged_and_staimless_steel_pipes';
import { Compensators_with_welding_pipes } from '../Models/Compensators_with_welding_pipes';

import { Supports_for_piping_DN50_200 } from '../Models/Supports_for_piping_DN50_200';
import { Supports_for_piping_DN15_100 } from '../Models/Supports_for_piping_DN15_100';
import { Supports_for_piping_DN15_40 } from '../Models/Supports_for_piping_DN15_40';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {

  axial_loads_on_fixed_bearings: Axial_loads_on_fixed_bearings;
  dependence_of_the_coefficient_of_linear: Dependence_of_the_coefficient_of_linear;

  compensators_with_groovlock_stainless_steel_pipe: Compensators_with_groovlock_stainless_steel_pipe;
  compensators_with_screwed_flanged_and_staimless_steel_pipes : Compensators_with_screwed_flanged_and_staimless_steel_pipes;
  compensators_with_welding_pipes: Compensators_with_welding_pipes;

  Supports_for_piping_DN50_200: Supports_for_piping_DN50_200;
  Supports_for_piping_DN15_100: Supports_for_piping_DN15_100;
  Supports_for_piping_DN15_40: Supports_for_piping_DN15_40;



  //myForm: FormGroup;

  //constructor(@Self() private destroy: NgOnDestroy, private formBuilder: FormBuilder, private router: Router) {
  //  this.myForm = formBuilder.group({
  //    "id": [""],
  //    "titleNewsRu": ["", Validators.required],
  //    "titleNewsBy": ["", Validators.required],
  //    "newsRu": ["", Validators.required],
  //    "newsBy": ["", Validators.required],
  //    "NewTitleNewsRu": ["", Validators.required],
  //    "NewTitleNewsBy": ["", Validators.required],
  //    "NewNewsRu": ["", Validators.required],
  //    "NewNewsBy": ["", Validators.required],
  //    "filterTitleNewsRu": ["", Validators.required],
  //    "filterTitleNewsBy": ["", Validators.required],
  //    "filterNewsRu": ["", Validators.required],
  //    "filterNewsBy": ["", Validators.required],
  //    "editorTitleNewsRu": ["", Validators.required],
  //    "editorTitleNewsBy": ["", Validators.required],
  //    "editorNewsRu": ["", Validators.required],
  //    "editorNewsBy": ["", Validators.required],
  //    "TextEditorTitleNewsRu": ["", Validators.required],
  //    "TextEditorTitleNewsBy": ["", Validators.required]
  //  }
  //  );
  //}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
