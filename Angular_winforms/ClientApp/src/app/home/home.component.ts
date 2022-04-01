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

  idx: number[100];
  DN_index: number[100];
  Length: double[100];
  Start_floor: double[100];
  End_floor: double[100];
  Floor_height: double[100];
  Shift: double[100];

  num_calcs: number = 0;
  num_floors: number = 0;

  enable_lower_comp: boolean = false;
  enable_higher_comp: boolean = false;

  lower_length: double = 0;
  higher_length: double = 0;

  lower_extension: double = 0;
  higher_extension: double = 0;

  lower_automatic: number = 0;
  higher_automatic: number = 0;

  j_l: number = 0;
  jj_l: number = 0;

  j_h: number = 0;
  jj_h: number = 0;
  jmax_h: number = 0;

  saved: number = 0;

  lower_floor: double = 0;
  higher_floor: double = 0;

  k: double = 1.05;
  C: double = 0;
  Tmax: double = 95;
  Tmin: double = -10;

  comp_near_hard: boolean = false;

  
  auto_change_C: boolean = false;

  Comp_floors: number[100];
  Hard_floors: number[100];
  Comp_DN: number[100];
  Hard_DN: number[100];
  ActualShift: double[100];
  FloorsIdx: number[100, 2];
  comp_count: number = 0;
  hard_count: number = 0;
  acts_count: number = 0;

  Comp_art_base: string = "";
  Hard_art_base: string = "";
  Connect_type: string = "";

  lic: number = 1;

  name: string = "";

  act: number = 0;

  project_created: boolean = false;

  project_optimized: boolean = false;




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
