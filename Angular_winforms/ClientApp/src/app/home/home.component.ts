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

  Calculation() {
            dL: double = 0;
            //double l = 0;

            //double Ex = 0;
            //int NumComp = 0;
            errDN: number = 0;
            errType: number = 0;
            errl: number = 0;
            errTmax: number = 0;
            errTmin: number = 0;
            bad_params: number = 0;
            //int use_floors = 0;
            k1: double = 0;
            //double floors_num = 0;
            //double floors_height = 0;


    error_message: string = "успешно!";

    for (var i = 100; i >= 0; i--) {
      if (this.news[i] != undefined) {
        this.news[i];
        if (this.news[i].displayed) {
          this.idFixedNews = i;
        }
        this.countNews++;

    if (this.lic > 0) {

      for (int i = 0; i < 100; i++)
      {
        this.Comp_floors[i] = 0;
        this.Hard_floors[i] = 0;
        this.Comp_DN[i] = 0;
        this.Hard_DN[i] = 0;
        this.ActualShift[i] = 0;
        this.FloorsIdx[i, 0] = 0;
        this.FloorsIdx[i, 1] = 0;
      }
      this.comp_count = 0;
      this.hard_count = 0;
      this.acts_count = 0;

      if (this.textBox13.Text == "") {
        this.bad_params++;
        this.errl = 1;
      }

      try { k1 = double.Parse(textBox13.Text, System.Globalization.CultureInfo.InvariantCulture); }
      catch { this.bad_params++; this.errl = 1; }

      if (this.name == "") {
        this.k = 0;
      }

      this.k = (this.k1 / 100) + 1;

      if (this.textBox3.Text == "") {this.errTmin = 1; }
      if (this.textBox3.Text.Contains(",")) { this.bad_params++; this.errTmin = 1; }
      try { this.Tmin = double.Parse(this.textBox3.Text, System.Globalization.CultureInfo.InvariantCulture); }
      catch { this.bad_params++; this.errTmin = 1; }


      // dL = C * l * (Tmax - Tmin) * k ;

      // dL += C * floors_height * (Tmax - Tmin) * k; // запас против неудачного числа этажей


      // check Type
      if (this.comboBox2.SelectedItem == null) {
        this.errType = 1;
      }
      switch (this.comboBox2.SelectedItem) {
        case ("Отопление, сварное соединение"):
          Comp_art_base = "АЛЬТЕЗА.А.X.1.6.";
          Hard_art_base = "АЛЬТЕЗА.A.Н.О-";
          Connect_type = "Сварка";
          break;

        case ("Водоснабжение, резьбовое соединение"):
          Comp_art_base = "АЛЬТЕЗА.B.X.1.6.";
          Hard_art_base = "АЛЬТЕЗА.B.Н.О-";
          Connect_type = "Резьба/Фланец";
          break;

        case ("Водоснабжение, грувлок соединение"):
          Comp_art_base = "АЛЬТЕЗА.B.X.1.6.";
          Hard_art_base = "АЛЬТЕЗА.B.Н.О-";
          Connect_type = "Грувлок";
          break;
      }


      if ((errDN + errType + errl + errTmax + errTmin == 0) | (num_calcs > 0)) {


                    int select_place = 0;
                    int fix_start_floor = 0;
                    int start_floor = 0;

        dL = 0;


        if (comp_near_hard) {
          if (enable_lower_comp) {
            Hard_floors[hard_count] = Convert.ToInt32(lower_floor);
            hard_count++;
          }

          for (int i = 0; i < num_calcs; i++)
          {
                            double max_ext;

            if (Shift[i] > 32) {
              if (DN_index[i] < 8)
                max_ext = 33;
              else
                max_ext = 35;
            }
            else
              max_ext = Shift[i];



            for (int j = Convert.ToInt32(Start_floor[i]); j <= Convert.ToInt32(End_floor[i]); j++)
            {
                                double cur = C * Floor_height[i] * (Tmax - Tmin) * k;
              dL += cur;

              if (fix_start_floor == 0) {
                fix_start_floor = 1;
                start_floor = Convert.ToInt32(Start_floor[i]);
                FloorsIdx[0, 0] = start_floor;

              }

              if (dL > max_ext) {
                j--;

                Comp_floors[comp_count] = j;
                Comp_DN[comp_count] = DN_index[i];

                Hard_DN[hard_count] = DN_index[i];

                Hard_floors[hard_count] = j + 1;
                ActualShift[acts_count] = dL - cur;
                FloorsIdx[acts_count + 1, 0] = j + 1;
                FloorsIdx[acts_count, 1] = j;
                comp_count++;
                hard_count++;
                acts_count++;
                dL = 0;
              }
            }
          }

          if (dL > 0) {
            Comp_floors[comp_count] = Convert.ToInt32(End_floor[num_calcs - 1]);
            Comp_DN[comp_count] = DN_index[num_calcs - 1];
            if (enable_higher_comp)
              Hard_floors[hard_count] = Convert.ToInt32(higher_floor);
            else
              Hard_floors[hard_count] = Convert.ToInt32(End_floor[num_calcs - 1]) + 1;
            Hard_DN[hard_count] = DN_index[num_calcs - 1];
            ActualShift[acts_count] = dL;
            if (enable_higher_comp)
              FloorsIdx[acts_count, 1] = Convert.ToInt32(higher_floor) - 1;
            else
              FloorsIdx[acts_count, 1] = Convert.ToInt32(End_floor[num_calcs - 1]);
            comp_count++;
            hard_count++;
            acts_count++;
            dL = 0;
          }
        }
        else {
                        int op_mode = 0;

          if (enable_lower_comp) {
            Hard_DN[hard_count] = DN_index[0];
            Hard_floors[hard_count] = Convert.ToInt32(lower_floor);
            hard_count++;
          }

          for (int i = 0; i < num_calcs; i++)
          {

                            double max_ext;
                            int prev_op_mode = 0;
                            double prev_checkval = 0;

            prev_op_mode = op_mode;

            if (Shift[i] > 32) {
              op_mode = 0;
              if (DN_index[i] < 8)
                max_ext = 33;
              else
                max_ext = 35;
            }
            else {
              max_ext = Shift[i];
              op_mode = 1;
            }

            for (int j = Convert.ToInt32(Start_floor[i]); j <= Convert.ToInt32(End_floor[i]); j++)
            {
                                double cur = C * Floor_height[i] * (Tmax - Tmin) * k;

              dL += cur;


              if (fix_start_floor == 0) {
                fix_start_floor = 1;
                start_floor = Convert.ToInt32(Start_floor[i]);
                FloorsIdx[0, 0] = start_floor;
              }

              switch (op_mode) {
                case (0):
                  if (dL > max_ext) {
                    j--;
                    Comp_floors[comp_count] = j;
                    Comp_DN[comp_count] = DN_index[i];
                    Hard_DN[hard_count] = DN_index[i];
                    Hard_floors[hard_count] = j + 1;
                    ActualShift[acts_count] = dL - cur;
                    FloorsIdx[acts_count + 1, 0] = j + 1;
                    FloorsIdx[acts_count, 1] = j;
                    comp_count++;
                    hard_count++;
                    acts_count++;
                    dL = 0;
                  }
                  break;

                case (1):
                  if (select_place == 0) {
                                            double checkval;

                    checkval = max_ext;
                    prev_checkval = checkval;

                    if (dL > checkval) {
                      j--;
                      Comp_floors[comp_count] = j;
                      Comp_DN[comp_count] = DN_index[i];
                      dL -= cur;
                      ActualShift[acts_count] = dL;
                      FloorsIdx[acts_count + 1, 0] = j + 1;
                      FloorsIdx[acts_count, 1] = j;
                      if (Comp_DN[comp_count] > 4) {
                        Hard_DN[hard_count] = DN_index[i];
                        Hard_floors[hard_count] = j + 1;
                        select_place = 0;
                        hard_count++;
                        dL = 0;
                      }
                      else {
                        select_place = 1;
                      }
                      comp_count++;
                      acts_count++;


                    }
                  }
                  else {
                                            double checkval;

                    if (((max_ext * 2) > 33) | ((prev_checkval + max_ext) > 33))
                      checkval = 33;
                    else
                      checkval = max_ext * 2;

                    prev_checkval = 0;
                    if (dL > checkval) {
                      Hard_DN[hard_count] = DN_index[i];
                      Hard_floors[hard_count] = j;
                      ActualShift[acts_count] = dL - cur - ActualShift[acts_count - 1];
                      FloorsIdx[acts_count + 1, 0] = j;
                      FloorsIdx[acts_count, 1] = j - 1;
                      hard_count++;
                      acts_count++;
                      dL = 0;
                      j--;
                      select_place = 0;
                    }
                  }
                  break;

                case (2):
                  break;

              }
            }
          }

          if (dL > 0) {
            if (select_place == 0) {
              Comp_floors[comp_count] = Convert.ToInt32(End_floor[num_calcs - 1]);
              Comp_DN[comp_count] = DN_index[num_calcs - 1];
              comp_count++;
              ActualShift[acts_count] = dL;
            }
            else {
              ActualShift[acts_count] = dL - ActualShift[acts_count - 1];
            }

            if (enable_higher_comp)
              Hard_floors[hard_count] = Convert.ToInt32(higher_floor);
            else
              Hard_floors[hard_count] = Convert.ToInt32(End_floor[num_calcs - 1]) + 1;

            Hard_DN[hard_count] = DN_index[num_calcs - 1];

            if (enable_higher_comp)
              FloorsIdx[acts_count, 1] = Convert.ToInt32(higher_floor) - 1;
            else
              FloorsIdx[acts_count, 1] = Convert.ToInt32(End_floor[num_calcs - 1]);
            hard_count++;
            acts_count++;
            dL = 0;
          }
        }

      }

      if ((errType + errl + errTmax + errTmin == 0) | (num_calcs > 0)) {
        error_message = "успешно!";
      }
      else {
        error_message = "ошибка! Введите корректные параметры трубопровода.";
      }

      textBox7.Text = error_message;

}


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
