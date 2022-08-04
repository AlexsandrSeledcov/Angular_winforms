import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Self } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

import { Axial_loads_on_fixed_bearings } from '../_models/Axial_loads_on_fixed_bearings';
import { Dependence_of_the_coefficient_of_linear } from '../_models/Dependence_of_the_coefficient_of_linear';

import { Compensators_with_groovlock_stainless_steel_pipe } from '../_models/Compensators_with_groovlock_stainless_steel_pipe';
import { Compensators_with_screwed_flanged_and_staimless_steel_pipes } from '../_models/Compensators_with_screwed_flanged_and_staimless_steel_pipes';
import { Compensators_with_welding_pipes } from '../_models/Compensators_with_welding_pipes';

import { Supports_for_piping_DN50_200 } from '../_models/Supports_for_piping_DN50_200';
import { Supports_for_piping_DN15_100 } from '../_models/Supports_for_piping_DN15_100';
import { Supports_for_piping_DN15_40 } from '../_models/Supports_for_piping_DN15_40';
import { FillingComponent } from '../filling/filling.component';
import { PipelineConfigurationComponent } from '../pipeline-сonfiguration/pipeline-сonfiguration.component'

//import { InputsForm1 } from '../_models/InputsForm1';

import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-vertical-pipeline-parameters',
  templateUrl: './vertical-pipeline-parameters.component.html',
  styleUrls: ['./vertical-pipeline-parameters.component.css']
})

export class VerticalPipelineParameters implements OnInit {

  // Models
  axial_loads_on_fixed_bearings: Axial_loads_on_fixed_bearings;
  dependence_of_the_coefficient_of_linear: Dependence_of_the_coefficient_of_linear;

  compensators_with_groovlock_stainless_steel_pipe: Compensators_with_groovlock_stainless_steel_pipe;
  compensators_with_screwed_flanged_and_staimless_steel_pipes: Compensators_with_screwed_flanged_and_staimless_steel_pipes;
  compensators_with_welding_pipes: Compensators_with_welding_pipes;

  Supports_for_piping_DN50_200: Supports_for_piping_DN50_200;
  Supports_for_piping_DN15_100: Supports_for_piping_DN15_100;
  Supports_for_piping_DN15_40: Supports_for_piping_DN15_40;

  
  //  general  
/*  comp_count: number = 0;
    hard_count: number = 0;

  // boolean
  comp_near_hard:  boolean = false;
  auto_change_C:   boolean = false;
  project_created: boolean = false;

  enable_lower_comp:  boolean = false;
  enable_higher_comp: boolean = false;


  num_floors:    number = 0;
  lower_length:  number = 0;
  higher_length: number = 0;

  lower_extension:  number = 0;
  higher_extension: number = 0;

  lower_automatic:  number = 0;
  higher_automatic: number = 0;

  j_l:  number = 0;
  jj_l: number = 0;

  j_h:    number = 0;
  jj_h:   number = 0;
  jmax_h: number = 0;

  saved:  number = 0;

  lower_floor:  number = 0;
  higher_floor: number = 0;

  acts_count:   number = 0;

  lic: number = 1;
  act: number = 0;


  // method variables Calculation()
  dL: number = 0;
  errDN: number = 0;
  errType: number = 0;
  errl: number = 0;
  errTmax: number = 0;
  errTmin: number = 0;
  k1: number = 0;
  i1: number = 0;
  i2: number = 0;
  j: number = 0
  select_place: number = 0;
  fix_start_floor: number = 0;
  start_floor: number = 0;
  op_mode: number = 0;
  prev_op_mode: number = 0;
  prev_checkval: number = 0;
  max_ext: number;
  cur: number;
  checkval: number;
  methodVariableMaximumCoolanTemperature: string;
  l:               number = 0;
  Ex:              number = 0;
  NumComp:         number = 0;
  use_floors:      number = 0;
  floors_num:      number = 0;
  floors_height:   number = 0;

  idx:    number[];//[100]
  Length: number[];//[100]

  Shift:       number[];//[100]
  Comp_floors: number[];//[100]
  Comp_DN:     number[];//[100]
  Hard_DN:     number[];//[100]
  actualShift: number[];//[100]
  FloorsIdx:   number[][];//[100,2]

  // method variables Plot_Graphics() 
  fontsize:   number = 9;
  cur_floor:  number = 0;
  floor_save: number = 0;
  floor: number = 0;
  dn: string = "";

  // method variables Results() {
  c: number = 0;
  cur_shift: string = "";
  prev_shift: number = 0;

  error_message: string = "успешно!";
  Comp_art_base: string = "";
  Hard_art_base: string = "";
  Connect_type: string = "";
  name: string = "";



  /// variables for the combobox
  ///
  ///
  //@Input() list:      string[];

  /// two way binding for input text
  ///
  ///
  inputItem: string = "";

  /// enable or disable visiblility of dropdown
  ///
  ///
  listHidden: boolean = true;

  showError: boolean = false;

  selectedIndex: number = -1;

  // the list to be shown after filtering
  filteredList: string[] = [];

  //html
  locateExpansionJointsCloseToFixedSupports: boolean; //checkBox1 - Расположить компенсаторы вблизи неподвижных опор
  loading: boolean = true;


  //metod  filterSteelАndАlloyGroup
  cur_idx: string;

  // calculateLoad()

  use_GOST_pipes: boolean = false;

  q: number;
  qq: number;
  t1: number;
  t2: number;
  tmp: number;
  num_calcs: number = 0;
  F_water: number;

  k: number = 1.05;
  C: number = 0;
  Tmax: number = 95;
  Tmin: number = -10;


  // Задать доп. параметры:
  // Допустимая несоосность b [см]
  // double b = 0;

  // Для всех диаметров используемых труб:

  // Модуль упругости стали [МПа]
  // double E = 0;


  dn_arr: number[] = [this.num_floors];
  Dn: number[] = [this.num_floors];        // Внешний диаметр трубы [мм], double Dn = 0;
  Dt: number[] = [this.num_floors];       // Толщина стенки [мм], double Dt = 0;
  Mt: number[] = [this.num_floors];      // Масса погонного метра трубы[кг / м), double Mt1 = 0;
  Sv: number[] = [this.num_floors];
  Fh: number[] = [this.num_floors];
  Jx: number[] = [this.num_floors];

  DN_index: number[];//[100]
  Hard_floors: number[];//[100]
  Start_floor: number[];//[100]
  End_floor: number[];//[100]
  Floor_height: number[];//[100]
  F_pipe: number[] = [this.hard_count];
  nst: number[] = [this.hard_count];
  Overall_Shift: number[] = [this.hard_count];

  // Из характеристик сильфона по артикулу прога сама подставляет:
  type: number = -1;
  PN: number = 16.3155; // [кгс/см2]
  Sef: number[] = [this.comp_count];   // Эффективная площадь Sef [см2]
  Lbd: number[] = [this.comp_count];  // Жесткость осевого хода Lbd [кН/м]
  a: number[] = [this.comp_count]; // Длина сильфона a [мм]
  F_Comp: number[] = [this.comp_count];
  F: number[] = [this.comp_count];

  // optimizeProject()
  project_optimized: boolean = false;
  bad_params: number = 0;
  current: number;
  jmax: number;
  row: number;
  data: number;
  errdn: number;
  l_current: number;
  h_current: number;
  last_cut: number;

  PipelineConfigurationComponent: PipelineConfigurationComponent;
  FillingComponent: FillingComponent;

  static saved: any = 0 ;
  static jmax_h: number;
  static idx: any;
  static Start_floor: any;
  static End_floor: any;
  static Floor_height: any;
  static Shift: any;
  static LengthField1: number;
  static Length: any;
  static DN_index: any;
  static enable_lower_comp: any;
  static lower_length: number;
  static Tmax: any;
  static Tmin: any;
  static k: number;
  static lower_extension: number;
  static lower_floor: number;
  static lower_automatic: number;
  static C: number;
  static j_l: number;
  static jj_l: number;
  static enable_higher_comp: any;
  static higher_length: number;
  static higher_extension: number;
  static higher_floor: number;
  static higher_automatic: number;
  static num_calcs: number;
  static num_floors: number;
  static aenable_lower_comp: boolean;
  static aj_h: any;
  static jj_h: any;
  static j_h: number;
  static myForm: any;
  static comp_count: number;
  static hard_count: number;
  static Comp_floors: any;
  static Hard_floors: any;
  static lic: number;
  static ActualShift: any;
  static FloorsIdx: any;
  static acts_count: number;
*/

  //plotgraphics()
  fontsize: number = 9;
  cur_floor: number = 0;
  floor_save: number = 0;

  showReferenceFlag: boolean = false;

  showImg1: boolean;
  showImg2: boolean;
  showImg3: boolean;
  showImg4: boolean;
  showImg5: boolean;
  showImg6: boolean;
  showImg7: boolean;
  showImg8: boolean;
  showImg9: boolean;
  showImg10: boolean;
  showImg11: boolean;
  showImg12: boolean;
  showImg13: boolean;
  showImg14: boolean;
  showImg15: boolean;
  showImg16: boolean;
  showImg17: boolean;
  showImg18: boolean;
  showImg19: boolean;
  showImg20: boolean;
  showImg21: boolean;
  showImg22: boolean;
  showImg23: boolean;
  showImg24: boolean;
  showImg25: boolean;
  showImg26: boolean;
  showImg27: boolean;
  showImg28: boolean;
  showImg29: boolean;
  showImg30: boolean;
  showImg31: boolean;
  showImg32: boolean;
  showImg33: boolean;
  showImg34: boolean;
  showImg35: boolean;
  showImg36: boolean;
  showImg37: boolean;
  showImg38: boolean;
  showImg39: boolean;
  showImg40: boolean;
  showImg41: boolean;
  showImg42: boolean;
  showImg43: boolean;
  showImg44: boolean;
  showImg45: boolean;
  showImg46: boolean;
  showImg47: boolean;
  showImg48: boolean;
  showImg49: boolean;
  showImg50: boolean;
  showImg51: boolean;
  showImg52: boolean;
  showImg53: boolean;
  showImg54: boolean;
  showImg55: boolean;
  showImg56: boolean;
  showImg57: boolean;
  showImg58: boolean;
  showImg59: boolean;
  showImg60: boolean;
  showImg61: boolean;
  showImg62: boolean;
  showImg63: boolean;
  showImg64: boolean;
  showImg65: boolean;
  showImg66: boolean;
  showImg67: boolean;
  showImg68: boolean;
  showImg69: boolean;
  showImg70: boolean;
  showImg71: boolean;
  showImg72: boolean;
  showImg73: boolean;
  showImg74: boolean;
  showImg75: boolean;
  showImg76: boolean;
  showImg77: boolean;
  showImg78: boolean;
  showImg79: boolean;
  showImg80: boolean;
  showImg81: boolean;
  showImg82: boolean;
  showImg83: boolean;
  showImg84: boolean;
  showImg85: boolean;
  showImg86: boolean;
  showImg87: boolean;
  showImg88: boolean;
  showImg89: boolean;
  showImg90: boolean;
  showImg91: boolean;
  showImg92: boolean;
  showImg93: boolean;
  showImg94: boolean;
  showImg95: boolean;
  showImg96: boolean;
  showImg97: boolean;
  showImg98: boolean;
  showImg99: boolean;
  showImg100: boolean;
  showImg101: boolean;
  showImg102: boolean;
  showImg103: boolean;
  showImg104: boolean;
  showImg105: boolean;
  showImg106: boolean;
  showImg107: boolean;
  showImg108: boolean;
  showImg109: boolean;
  showImg110: boolean;
  showImg111: boolean;
  showImg112: boolean;
  showImg113: boolean;
  showImg114: boolean;
  showImg115: boolean;
  showImg116: boolean;
  showImg117: boolean;
  showImg118: boolean;
  showImg119: boolean;
  showImg120: boolean;
  showImg121: boolean;
  showImg122: boolean;
  showImg123: boolean;
  showImg124: boolean;
  showImg125: boolean;
  showImg126: boolean;
  showImg127: boolean;
  showImg128: boolean;
  showImg129: boolean;
  showImg130: boolean;
  showImg131: boolean;
  showImg132: boolean;
  showImg133: boolean;
  showImg134: boolean;
  showImg135: boolean;
  showImg136: boolean;
  showImg137: boolean;
  showImg138: boolean;
  showImg139: boolean;
  showImg140: boolean;
  showImg141: boolean;
  showImg142: boolean;
  showImg143: boolean;
  showImg144: boolean;
  showImg145: boolean;
  showImg146: boolean;
  showImg147: boolean;
  showImg148: boolean;
  showImg149: boolean;
  showImg150: boolean;

  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: DataService) {
    this.myForm = formBuilder.group({                                                  //                                                [WinForm] 
      "pipelineType": [""],                                                           // Тип трубопровода                                [comboBox2]
      "safetyFactor": ["", Validators.required],                                     // Коэффициент запаса, %                            [textBox13]
      "steelАndАlloyGroup": ["", Validators.required],                              // Группа стали и сплава                             [comboBox3]
      "temperatureCoefficientOfLinearExpansion": ["", Validators.required],        // ТКЛР, мм/м × ℃                                    [textBox15]
      "мaximumCoolanTemperature": ["", Validators.required],                      // Максимальная температура теплоносителя, °С          [textBox2]
      "мinimumАirTemperatureDuringInstallation": ["", Validators.required],      // Минимальная температура воздуха при монтаже, °С      [textBox3]
      "setСonfiguration": ["", Validators.required],                            // Задайте конфигурацию                                  [textBox14]
      "locateExpansionJointsCloseToFixedSupports": [""],                       // Расположить компенсаторы вблизи неподвижных опор       [checkBox1]
      "status": ["", Validators.required],                                    // Статус
    });
  }
  ngOnInit(): void {

   


    /// combobox
    // this.filteredList = this.list;

      
    }
  

  /////This metod run click button "Результаты"
  /////
  /////
  showResults() {
    this.router.navigate(['/']);
  }

  ///this metod run click button "статус"
  ///
  ///
  showstatus() { }

  //// button Metods

  ///// This metod run click button "Справка"
  /////
  /////
  showReference() {
    this.showReferenceFlag = !this.showReferenceFlag;
  }

  ////This metod run click button "Конфигурация трубопровода"
  /////
  /////
  showPipelineСonfiguration() {
  
  }

  /////This metod run click checkbox "Расположить компенсаторы вблизи неподвижных опор"
  /////
  /////
  public onLocateExpansionJointsCloseToFixedSupportsChangedChanged(value: boolean) {
    this.dataService.locateExpansionJointsCloseToFixedSupports = value;
    this.dataService.comp_near_hard = value;
  }

  /////This metod run click button "Сформировать проект"
  /////
  /////
  generateProject() {
   // this.router.navigate(['/results']);
    this.calculation();
  }

  /////This metod run click button "Очистить форму"
  /////
  /////
  clearForm() {
    (document.getElementById('мinimumАirTemperatureDuringInstallation') as any).value = -10;
    (document.getElementById('temperatureCoefficientOfLinearExpansion') as any).value = "";
    (document.getElementById('maximumCoolanTemperature') as any).value = 95;
    (document.getElementById('steelАndАlloyGroup') as any).value = "";
    (document.getElementById('pipelineType') as any).value = "";
    (document.getElementById('safetyFactor') as any).value = 5;
    (document.getElementById('status') as any).value = "";

    this.dataService.num_calcs = 0;
    this.dataService.num_floors = 0;

    this.dataService.enable_lower_comp = false;
    this.dataService.enable_higher_comp = false;

    this.dataService.lower_length = 0;
    this.dataService.higher_length = 0;

    this.dataService.lower_extension = 0;
    this.dataService.higher_extension = 0;

    this.dataService.lower_floor = 0;
    this.dataService.higher_floor = 0;

    this.dataService.k = 1.05;
    this.dataService.C = 0;
    this.dataService.Tmax = 95;
    this.dataService.Tmin = -10;

    this.dataService.comp_near_hard = false;
    this.dataService.auto_change_C = false;
    this.dataService.comp_count = 0;
    this.dataService.hard_count = 0;
    this.dataService.acts_count = 0;

    this.dataService.Comp_art_base = "";
    this.dataService.Hard_art_base = "";
    this.dataService.Connect_type = "";

    this.dataService.j_l = 0;
    this.dataService.jj_l = 0;

    this.dataService.j_h = 0;
    this.dataService.jj_h = 0;
    this.dataService.jmax_h = 0;

    this.dataService.saved = 0;
  }

  /////This metod run click button "Обновить проект"
  /////
  /////
  updateProject() {
    //  this.plotGraphics();
  }

  plotgraphics() {
    this.fontsize = 9;
    this.cur_floor = 0;
    this.floor_save = 0;

    

  }

  ///This metod run click button "Рассчитать нагрузку"
  ///
  ///
  calculateLoad() {

    this.showImg1 = true;





    if ((this.dataService.comp_count > 0) && (this.dataService.hard_count > 0)) {
      this.dataService.use_GOST_pipes = true;

      for (var i = this.dataService.Hard_floors[0]; i < this.dataService.num_floors; i++) {
        this.dataService.q = 0;

        while (this.dataService.q < this.dataService.num_calcs) {
          if ((i >= this.dataService.Start_floor[this.dataService.q]) && (i <= this.dataService.End_floor[this.dataService.q])) {
            this.dataService.Fh[i] = this.dataService.Floor_height[this.dataService.q];
            if (this.dataService.use_GOST_pipes) // Используя ГОСТ 3262-75 и ГОСТ 10704-91 для Ду200
            {
              this.dataService.dn_arr[i] = this.dataService.DN_index[this.dataService.q];
              switch (this.dataService.DN_index[this.dataService.q]) {
                case (0):
                  this.dataService.dn = "DN15";
                  this.dataService.Dn[i] = 21.3;
                  this.dataService.Dt[i] = 2.35;
                  this.dataService.Mt[i] = 1.1;
                  break;

                case (1):
                  this.dataService.Dn[i] = 26.8;
                  this.dataService.Dt[i] = 2.5;
                  this.dataService.Mt[i] = 1.66;
                  break;

                case (2):
                  this.dataService.dn = "DN25";
                  this.dataService.Dn[i] = 33.5;
                  this.dataService.Dt[i] = 3.2;
                  this.dataService.Mt[i] = 2.39;
                  break;

                case (3):
                  this.dataService.dn = "DN32";
                  this.dataService.Dn[i] = 42.3;
                  this.dataService.Dt[i] = 3.2;
                  this.dataService.Mt[i] = 3.09;
                  break;

                case (4):
                  this.dataService.dn = "DN40";
                  this.dataService.Dn[i] = 48;
                  this.dataService.Dt[i] = 3.5;
                  this.dataService.Mt[i] = 3.84;
                  break;

                case (5):
                  this.dataService.dn = "DN50";
                  this.dataService.Dn[i] = 60;
                  this.dataService.Dt[i] = 3.5;
                  this.dataService.Mt[i] = 4.88;
                  break;

                case (6):
                  this.dataService.dn = "DN65";
                  this.dataService.Dn[i] = 75.5;
                  this.dataService.Dt[i] = 4;
                  this.dataService.Mt[i] = 7.05;
                  break;

                case (7):
                  this.dataService.dn = "DN80";
                  this.dataService.Dn[i] = 88.5;
                  this.dataService.Dt[i] = 4;
                  this.dataService.Mt[i] = 8.34;
                  break;

                case (8):
                  this.dataService.dn = "DN100";
                  this.dataService.Dn[i] = 114;
                  this.dataService.Dt[i] = 4.5;
                  this.dataService.Mt[i] = 12.15;
                  break;

                case (9):
                  this.dataService.dn = "DN125";
                  this.dataService.Dn[i] = 140;
                  this.dataService.Dt[i] = 4.5;
                  this.dataService.Mt[i] = 15.04;
                  break;

                case (10):
                  this.dataService.dn = "DN150";
                  this.dataService.Dn[i] = 165;
                  this.dataService.Dt[i] = 4.5;
                  this.dataService.Mt[i] = 17.81;
                  break;

                case (11):
                  this.dataService.dn = "DN200";
                  this.dataService.Dn[i] = 219;
                  this.dataService.Dt[i] = 5;
                  this.dataService.Mt[i] = 26.39;
                  break;
              }
              this.dataService.tmp = (this.dataService.Dn[i] * 0.001 / 2 - this.dataService.Dt[i] * 0.001);
              this.dataService.Sv[i] = 3.1415926535 * this.dataService.tmp * this.dataService.tmp;

              this.dataService.t1 = this.dataService.Dn[i] * 0.01;
              this.dataService.t2 = (this.dataService.Dn[i] - (this.dataService.Dt[i] * 2)) * 0.01;

              this.dataService.Jx[i] = 3.1415926535 * ((this.dataService.t1 * this.dataService.t1 * this.dataService.t1 * this.dataService.t1) - (this.dataService.t2 * this.dataService.t2 * this.dataService.t2 * this.dataService.t2)) / 64;
            }
            this.dataService.q = this.dataService.num_calcs;
          }
          this.dataService.q++;
        }
      }
      this.dataService.F_pipe[this.dataService.hard_count];
      this.dataService.nst[this.dataService.hard_count];
      this.dataService.F_water = 0;
      this.dataService.Overall_Shift[this.dataService.hard_count];

      for (var i = 0; i < (this.dataService.hard_count - 1); i++) {
        this.dataService.qq = 0;
        this.dataService.F_pipe[i] = 0;
        this.dataService.Overall_Shift[i] = 0;
        for (var j = this.dataService.Hard_floors[i]; j < this.dataService.Hard_floors[i + 1]; j++) {
          this.dataService.qq++;
          this.dataService.F_pipe[i] += this.dataService.Mt[j];
          this.dataService.F_water += this.dataService.Sv[j] * 1000 * this.dataService.Fh[j];
          this.dataService.Overall_Shift[i] += this.dataService.C * this.dataService.Fh[j] * (this.dataService.Tmax - this.dataService.Tmin) * this.dataService.k;
        }
        this.dataService.nst[i] = this.dataService.qq;
      }

      if (this.dataService.enable_higher_comp) {
        this.dataService.F_water += this.dataService.Sv[this.dataService.Hard_floors[this.dataService.hard_count - 1] - 1] * 1000 * this.dataService.higher_length;
      }
      switch (this.myForm.controls.pipelineType.value) {
        case ("Отопление, сварное соединение"):
          this.dataService.type = 0;
          break;

        case ("Водоснабжение, резьбовое соединение"):
          this.dataService.type = 1;
          break;

        case ("Водоснабжение, грувлок соединение"):
          this.dataService.type = 2;
          break;
      }
      for (var i = 0; i < this.dataService.comp_count; i++) {
        switch (this.dataService.type) {
          case 0:
            switch (this.dataService.Comp_DN[i]) {
              case (0):
                this.dataService.Sef[i] = 8;
                this.dataService.Lbd[i] = 21;
                this.dataService.a[i] = 237;
                break;

              case (1):
                this.dataService.Sef[i] = 8;
                this.dataService.Lbd[i] = 21;
                this.dataService.a[i] = 237;
                break;

              case (2):
                this.dataService.Sef[i] = 12;
                this.dataService.Lbd[i] = 22;
                this.dataService.a[i] = 243;
                break;

              case (3):
                this.dataService.Sef[i] = 18;
                this.dataService.Lbd[i] = 23;
                this.dataService.a[i] = 245;
                break;

              case (4):
                this.dataService.Sef[i] = 23;
                this.dataService.Lbd[i] = 24;
                this.dataService.a[i] = 245;
                break;

              case (5):
                this.dataService.Sef[i] = 32;
                this.dataService.Lbd[i] = 38;
                this.dataService.a[i] = 235;
                break;

              case (6):
                this.dataService.Sef[i] = 55;
                this.dataService.Lbd[i] = 42;
                this.dataService.a[i] = 235;
                break;

              case (7):
                this.dataService.Sef[i] = 75;
                this.dataService.Lbd[i] = 47;
                this.dataService.a[i] = 262;
                break;

              case (8):
                this.dataService.Sef[i] = 122;
                this.dataService.Lbd[i] = 64;
                this.dataService.a[i] = 330;
                break;

              case (9):
                this.dataService.Sef[i] = 173;
                this.dataService.Lbd[i] = 127;
                this.dataService.a[i] = 345;
                break;

              case (10):
                this.dataService.Sef[i] = 245;
                this.dataService.Lbd[i] = 129;
                this.dataService.a[i] = 360;
                break;

              case (11):
                this.dataService.Sef[i] = 434;
                this.dataService.Lbd[i] = 157;
                this.dataService.a[i] = 390;
                break;

            }
            break;

          case 1:
            switch (this.dataService.Comp_DN[i]) {
              case (0):
                this.dataService.Sef[i] = 8;
                this.dataService.Lbd[i] = 21;
                this.dataService.a[i] = 255;
                break;

              case (1):
                this.dataService.Sef[i] = 8;
                this.dataService.Lbd[i] = 21;
                this.dataService.a[i] = 255;
                break;

              case (2):
                this.dataService.Sef[i] = 12;
                this.dataService.Lbd[i] = 22;
                this.dataService.a[i] = 265;
                break;

              case (3):
                this.dataService.Sef[i] = 18;
                this.dataService.Lbd[i] = 23;
                this.dataService.a[i] = 280;
                break;

              case (4):
                this.dataService.Sef[i] = 23;
                this.dataService.Lbd[i] = 24;
                this.dataService.a[i] = 285;
                break;

              case (5):
                this.dataService.Sef[i] = 32;
                this.dataService.Lbd[i] = 38;
                this.dataService.a[i] = 285;
                break;

              case (6):
                this.dataService.Sef[i] = 55;
                this.dataService.Lbd[i] = 42;
                this.dataService.a[i] = 320;
                break;

              case (7):
                this.dataService.Sef[i] = 75;
                this.dataService.Lbd[i] = 47;
                this.dataService.a[i] = 347;
                break;

              case (8):
                this.dataService.Sef[i] = 122;
                this.dataService.Lbd[i] = 64;
                this.dataService.a[i] = 400;
                break;

              case (9):
                this.dataService.Sef[i] = 173;
                this.dataService.Lbd[i] = 127;
                this.dataService.a[i] = 420;
                break;

              case (10):
                this.dataService.Sef[i] = 245;
                this.dataService.Lbd[i] = 129;
                this.dataService.a[i] = 440;
                break;

              case (11):
                this.dataService.Sef[i] = 434;
                this.dataService.Lbd[i] = 157;
                this.dataService.a[i] = 475;
                break;
            }
            break;

          case 2:
            switch (this.dataService.Comp_DN[i]) {
              case (0):
                this.dataService.Sef[i] = 0;
                this.dataService.Lbd[i] = 0;
                this.dataService.a[i] = 0;
                break;

              case (1):
                this.dataService.Sef[i] = 0;
                this.dataService.Lbd[i] = 0;
                this.dataService.a[i] = 0;
                break;

              case (2):
                this.dataService.Sef[i] = 12;
                this.dataService.Lbd[i] = 22;
                this.dataService.a[i] = 315;
                break;

              case (3):
                this.dataService.Sef[i] = 18;
                this.dataService.Lbd[i] = 23;
                this.dataService.a[i] = 320;
                break;

              case (4):
                this.dataService.Sef[i] = 23;
                this.dataService.Lbd[i] = 24;
                this.dataService.a[i] = 320;
                break;

              case (5):
                this.dataService.Sef[i] = 32;
                this.dataService.Lbd[i] = 38;
                this.dataService.a[i] = 305;
                break;

              case (6):
                this.dataService.Sef[i] = 55;
                this.dataService.Lbd[i] = 42;
                this.dataService.a[i] = 305;
                break;

              case (7):
                this.dataService.Sef[i] = 75;
                this.dataService.Lbd[i] = 47;
                this.dataService.a[i] = 335;
                break;

              case (8):
                this.dataService.Sef[i] = 122;
                this.dataService.Lbd[i] = 64;
                this.dataService.a[i] = 385;
                break;

              case (9):
                this.dataService.Sef[i] = 0;
                this.dataService.Lbd[i] = 0;
                this.dataService.a[i] = 0;
                break;

              case (10):
                this.dataService.Sef[i] = 0;
                this.dataService.Lbd[i] = 0;
                this.dataService.a[i] = 0;
                break;

              case (11):
                this.dataService.Sef[i] = 0;
                this.dataService.Lbd[i] = 0;
                this.dataService.a[i] = 0;
                break;

            }
            break;
        }

        this.dataService.F_Comp[i] = 1.5 * this.dataService.PN * this.dataService.Sef[i] + 101.972 * this.dataService.Lbd[i] * this.dataService.Overall_Shift[i] * 0.001;

      }

      this.dataService.F[this.dataService.hard_count];
      for (var i = 0; i < (this.dataService.hard_count - 1); i++) {
        if (i == 0)
          this.dataService.F[i] = this.dataService.F_pipe[i] + this.dataService.F_water + this.dataService.F_Comp[i];
        else
          this.dataService.F[i] = this.dataService.F_pipe[i] + this.dataService.F_Comp[i];
      }


      //  Form5 f = new Form5();
      //  f.Owner = this;
      //  f.Show();

      for (var i = 0; i < (this.dataService.hard_count - 1); i++) {
        //   FillingComponent.arguments.dataGridView1.Rows.Add();
        //   FillingComponent.arguments.dataGridView1[0, i].Value = i.toString();
        //   FillingComponent.arguments.dataGridView1[1, i].Value = this.F[i].toString();
      }

      for (var i = 0; i < this.dataService.comp_count; i++) {
        //   FillingComponent.arguments.dataGridView2.Rows.Add();
        //   FillingComponent.arguments.dataGridView2[0, i].Value = i.toString();
        //   FillingComponent.arguments.dataGridView2[1, i].Value = this.Overall_Shift[i].toString();
      }

      // реальный осевой ход компенсов берем из расчета

      // Расчет для каждого диаметра труб:
      // Площадь внутреннего сечения трубы S = pi * (0.060/2 - 0.003)^2 [м]
      // Моммент инерции сечения трубы J = pi * ( 6^4 - (6 - 0.3*2)^4 ) / 64 [см^2]
      // Масса
      // Рассчитываем общий вес воды

      // Определяем участки между НО
      // Для каждого участка считаем массу труб, вес сильфона, вес арматуры и изоляции(?). Для первой НО добавляем вес воды
      // Для каждого участка между НО считаем устойчивость

    }
  }

  ///This metod run click button "Оптимизировать проект"
  ///
  ///
  optimizeProject() {
    // Проверить, что компенсаторы стоят не чаще, чем раз в 3 этажа.
    // Если есть такие участки, то сместить НО и пересчитать.

    if (!this.dataService.project_optimized) {
      if ((this.dataService.comp_count > 0) && (this.dataService.hard_count > 0)) {
        for (var j = 0; j < (this.dataService.hard_count - 1); j++) {
          if (this.dataService.Hard_floors[j + 1] - this.dataService.Hard_floors[j] == 1) {
            // Сдвинуть нижнюю опору выше
            if (this.dataService.lower_extension < 15) {
              if (this.dataService.num_calcs > 0) {
                for (var i = 0; i < this.dataService.num_calcs; i++) {
                  this.dataService.dn = "";

                  switch (this.dataService.DN_index[i]) {
                    case (0):
                      this.dataService.dn = "DN15";
                      break;

                    case (1):
                      this.dataService.dn = "DN20";
                      break;

                    case (2):
                      this.dataService.dn = "DN25";
                      break;

                    case (3):
                      this.dataService.dn = "DN32";
                      break;

                    case (4):
                      this.dataService.dn = "DN40";
                      break;

                    case (5):
                      this.dataService.dn = "DN50";
                      break;

                    case (6):
                      this.dataService.dn = "DN65";
                      break;

                    case (7):
                      this.dataService.dn = "DN80";
                      break;

                    case (8):
                      this.dataService.dn = "DN100";
                      break;

                    case (9):
                      this.dataService.dn = "DN125";
                      break;

                    case (10):
                      this.dataService.dn = "DN150";
                      break;

                    case (11):
                      this.dataService.dn = "DN200";
                      break;
                  }

                  if (i == 0) {
                    this.dataService.Region1 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter1 = this.dataService.dn;
                    this.dataService.LengthField1 = this.dataService.Length[i];
                    this.dataService.GroundFloor1 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor1 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight1 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints1 = this.dataService.Shift[i];
                  }
                  if (i == 1) {
                    this.dataService.Region2 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter2 = this.dataService.dn;
                    this.dataService.LengthField2 = this.dataService.Length[i];
                    this.dataService.GroundFloor2 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor2 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight2 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints2 = this.dataService.Shift[i];
                  }
                  if (i == 2) {
                    this.dataService.Region3 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter3 = this.dataService.dn;
                    this.dataService.LengthField3 = this.dataService.Length[i];
                    this.dataService.GroundFloor3 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor3 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight3 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints3 = this.dataService.Shift[i];
                  }
                  if (i == 3) {
                    this.dataService.Region4 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter4 = this.dataService.dn;
                    this.dataService.LengthField4 = this.dataService.Length[i];
                    this.dataService.GroundFloor4 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor4 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight4 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints4 = this.dataService.Shift[i];
                  }
                  if (i == 4) {
                    this.dataService.Region5 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter5 = this.dataService.dn;
                    this.dataService.LengthField5 = this.dataService.Length[i];
                    this.dataService.GroundFloor5 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor5 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight5 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints5 = this.dataService.Shift[i];
                  }
                  if (i == 5) {
                    this.dataService.Region6 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter6 = this.dataService.dn;
                    this.dataService.LengthField6 = this.dataService.Length[i];
                    this.dataService.GroundFloor6 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor6 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight6 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints6 = this.dataService.Shift[i];
                  }
                  if (i == 6) {
                    this.dataService.Region7 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter7 = this.dataService.dn;
                    this.dataService.LengthField7 = this.dataService.Length[i];
                    this.dataService.GroundFloor7 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor7 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight7 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints7 = this.dataService.Shift[i];
                  }
                  if (i == 7) {
                    this.dataService.Region8 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter8 = this.dataService.dn;
                    this.dataService.LengthField8 = this.dataService.Length[i];
                    this.dataService.GroundFloor8 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor8 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight8 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints8 = this.dataService.Shift[i];
                  }
                  if (i == 8) {
                    this.dataService.Region9 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter9 = this.dataService.dn;
                    this.dataService.LengthField9 = this.dataService.Length[i];
                    this.dataService.GroundFloor9 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor9 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight9 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints9 = this.dataService.Shift[i];
                  }
                  if (i == 9) {
                    this.dataService.Region10 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter10 = this.dataService.dn;
                    this.dataService.LengthField10 = this.dataService.Length[i];
                    this.dataService.GroundFloor10 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor10 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight10 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints10 = this.dataService.Shift[i];
                  }
                  if (i == 10) {
                    this.dataService.Region11 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter11 = this.dataService.dn;
                    this.dataService.LengthField11 = this.dataService.Length[i];
                    this.dataService.GroundFloor11 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor11 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight11 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints11 = this.dataService.Shift[i];
                  }
                  if (i == 11) {
                    this.dataService.Region12 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter12 = this.dataService.dn;
                    this.dataService.LengthField12 = this.dataService.Length[i];
                    this.dataService.GroundFloor12 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor12 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight12 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints12 = this.dataService.Shift[i];
                  }
                  if (i == 12) {
                    this.dataService.Region13 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter13 = this.dataService.dn;
                    this.dataService.LengthField13 = this.dataService.Length[i];
                    this.dataService.GroundFloor13 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor13 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight13 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints13 = this.dataService.Shift[i];
                  }
                  if (i == 13) {
                    this.dataService.Region14 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter14 = this.dataService.dn;
                    this.dataService.LengthField14 = this.dataService.Length[i];
                    this.dataService.GroundFloor14 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor14 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight14 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints14 = this.dataService.Shift[i];
                  }
                  if (i == 14) {
                    this.dataService.Region15 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter15 = this.dataService.dn;
                    this.dataService.LengthField15 = this.dataService.Length[i];
                    this.dataService.GroundFloor15 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor15 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight15 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints15 = this.dataService.Shift[i];
                  }
                  if (i == 15) {
                    this.dataService.Region16 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter16 = this.dataService.dn;
                    this.dataService.LengthField16 = this.dataService.Length[i];
                    this.dataService.GroundFloor16 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor16 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight16 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints16 = this.dataService.Shift[i];
                  }
                  if (i == 16) {
                    this.dataService.Region17 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter17 = this.dataService.dn;
                    this.dataService.LengthField17 = this.dataService.Length[i];
                    this.dataService.GroundFloor17 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor17 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight17 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints17 = this.dataService.Shift[i];
                  }
                  if (i == 17) {
                    this.dataService.Region18 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter18 = this.dataService.dn;
                    this.dataService.LengthField18 = this.dataService.Length[i];
                    this.dataService.GroundFloor18 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor18 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight18 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints18 = this.dataService.Shift[i];
                  }
                  if (i == 18) {
                    this.dataService.Region19 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter19 = this.dataService.dn;
                    this.dataService.LengthField19 = this.dataService.Length[i];
                    this.dataService.GroundFloor19 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor19 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight19 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints19 = this.dataService.Shift[i];
                  }
                  if (i == 19) {
                    this.dataService.Region20 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter20 = this.dataService.dn;
                    this.dataService.LengthField20 = this.dataService.Length[i];
                    this.dataService.GroundFloor20 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor20 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight20 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints20 = this.dataService.Shift[i];
                  }
                  if (i == 20) {
                    this.dataService.Region21 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter21 = this.dataService.dn;
                    this.dataService.LengthField21 = this.dataService.Length[i];
                    this.dataService.GroundFloor21 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor21 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight21 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints21 = this.dataService.Shift[i];
                  }
                  if (i == 21) {
                    this.dataService.Region22 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter22 = this.dataService.dn;
                    this.dataService.LengthField22 = this.dataService.Length[i];
                    this.dataService.GroundFloor22 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor22 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight22 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints22 = this.dataService.Shift[i];
                  }
                  if (i == 22) {
                    this.dataService.Region23 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter23 = this.dataService.dn;
                    this.dataService.LengthField23 = this.dataService.Length[i];
                    this.dataService.GroundFloor23 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor23 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight23 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints23 = this.dataService.Shift[i];
                  }
                  if (i == 23) {
                    this.dataService.Region23 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter23 = this.dataService.dn;
                    this.dataService.LengthField23 = this.dataService.Length[i];
                    this.dataService.GroundFloor23 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor23 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight23 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints23 = this.dataService.Shift[i];
                  }
                  if (i == 24) {
                    this.dataService.Region25 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter25 = this.dataService.dn;
                    this.dataService.LengthField25 = this.dataService.Length[i];
                    this.dataService.GroundFloor25 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor25 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight25 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints25 = this.dataService.Shift[i];
                  }
                  if (i == 25) {
                    this.dataService.Region26 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter26 = this.dataService.dn;
                    this.dataService.LengthField26 = this.dataService.Length[i];
                    this.dataService.GroundFloor26 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor26 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight26 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints26 = this.dataService.Shift[i];
                  }
                  if (i == 26) {
                    this.dataService.Region27 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter27 = this.dataService.dn;
                    this.dataService.LengthField27 = this.dataService.Length[i];
                    this.dataService.GroundFloor27 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor27 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight27 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints27 = this.dataService.Shift[i];
                  }
                  if (i == 27) {
                    this.dataService.Region28 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter28 = this.dataService.dn;
                    this.dataService.LengthField28 = this.dataService.Length[i];
                    this.dataService.GroundFloor28 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor28 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight28 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints28 = this.dataService.Shift[i];
                  }
                  if (i == 28) {
                    this.dataService.Region29 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter29 = this.dataService.dn;
                    this.dataService.LengthField29 = this.dataService.Length[i];
                    this.dataService.GroundFloor29 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor29 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight29 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints29 = this.dataService.Shift[i];
                  }
                  if (i == 29) {
                    this.dataService.Region30 = this.dataService.idx[i];
                    this.dataService.PipelineDiameter30 = this.dataService.dn;
                    this.dataService.LengthField30 = this.dataService.Length[i];
                    this.dataService.GroundFloor30 = this.dataService.Start_floor[i];
                    this.dataService.FinalFloor30 = this.dataService.End_floor[i];
                    this.dataService.FloorHeight30 = this.dataService.Floor_height[i];
                    this.dataService.AcceptableOffsetOfTheInsetPoints30 = this.dataService.Shift[i];
                  }
                }

                if (this.dataService.enable_lower_comp) {
                  if (this.dataService.lower_automatic < 1) {
                    this.dataService.lowerSelfCompensationSection_Pipeline_Configuration = true;
                  }
                  //PipelineConfigurationComponent.arguments.textBox1.Text = this.lower_length;
                  //PipelineConfigurationComponent.arguments.textBox5.Text = this.lower_floor;
                  //PipelineConfigurationComponent.arguments.textBox3.Text = this.lower_extension;
                }

                if (this.dataService.enable_higher_comp) {
                  if (this.dataService.higher_automatic < 1) {
                    //PipelineConfigurationComponent.arguments..checkBox2.Checked = true;
                  }
                  //PipelineConfigurationComponent.arguments.textBox2.Text = this.higher_length;
                  //PipelineConfigurationComponent.arguments.textBox6.Text = this.higher_floor;
                  //PipelineConfigurationComponent.arguments.textBox4.Text = this.higher_extension;
                }

                  //PipelineConfigurationComponent.arguments.textBox8.Text = this.num_floors;
              }
                  //this.current = parseInt(PipelineConfigurationComponent.arguments.textBox5.Text);
              this.dataService.current++;
              //PipelineConfigurationComponent.arguments.textBox5.Text = this.current;

              this.dataService.Start_floor[0] = this.dataService.current;
              this.dataService.lower_floor = this.dataService.current;
              this.dataService.lower_extension += this.dataService.C * this.dataService.Floor_height[0] * (this.dataService.Tmax - this.dataService.Tmin) * this.dataService.k;
              this.dataService.lower_length += this.dataService.Floor_height[0];

              //PipelineConfigurationComponent.arguments.textBox1.Text = this.lower_length;
              //PipelineConfigurationComponent.arguments.textBox3.Text = this.lower_extension;

              if (this.dataService.Start_floor[0] == this.dataService.End_floor[0]) {
                // удалить участок, включив в нижнюю самокомпенсацию
                this.dataService.Start_floor[1] = this.dataService.lower_floor;
                // dataGridView1.Rows.RemoveAt(0);
                this.dataService.bad_params = 0;
                this.dataService.row = 0;
                j = 0;
                while (this.dataService.row == 0) {
                  //   if ((string)dataGridView1[0, j].Value == null)
                  //     {
                  this.dataService.row = 1;
                  //     }
                  //   else {
                  try {
                    // this.data = double.Parse((string)dataGridView1[0, j].Value, System.Globalization.CultureInfo.InvariantCulture);
                  }
                  catch {
                    this.dataService.bad_params++;
                  }
                  j++;
                }

                this.dataService.jmax = j;
                if (this.dataService.jmax > 0) {
                  for (j = 0; j < this.dataService.jmax; j++) {
                    this.dataService.dn = "";
                    this.dataService.errdn = 0;

                    try {
                      //this.idx[j] = int.Parse((string)PipelineConfigurationComponent.arguments.dataGridView1[0, j].Value, System.Globalization.CultureInfo.InvariantCulture);
                    }
                    catch { this.dataService.bad_params++; }

                    try {
                      //this.dn = (string)PipelineConfigurationComponent.arguments.dataGridView1[1, j].Value;
                    }
                    catch { this.dataService.bad_params++; this.dataService.errdn = 1; }

                    try {
                      // this.Start_floor[j] = double.Parse((string)PipelineConfigurationComponent.arguments.dataGridView1[3, j].Value, System.Globalization.CultureInfo.InvariantCulture);
                    }
                    catch { this.dataService.bad_params++; }

                    try {
                      //this.End_floor[j] = double.Parse((string)PipelineConfigurationComponent.arguments.dataGridView1[4, j].Value, System.Globalization.CultureInfo.InvariantCulture);
                    }
                    catch { this.dataService.bad_params++; }
                    try {
                      //this.Floor_height[j] = double.Parse((string)PipelineConfigurationComponent.arguments.dataGridView1[5, j].Value, System.Globalization.CultureInfo.InvariantCulture);
                    }
                    catch { this.dataService.bad_params++; }
                    try {
                      //this.Shift[j] = double.Parse((string)PipelineConfigurationComponent.arguments.dataGridView1[6, j].Value, System.Globalization.CultureInfo.InvariantCulture);
                    }
                    catch { this.dataService.bad_params++; }

                    if (this.dataService.bad_params == 0) {
                      if (this.dataService.Shift[j] < 15) {
                        this.dataService.Shift[j] = 15;
                        //    PipelineConfigurationComponent.arguments.dataGridView1[6, j].Value = "15";
                      }
                    }

                    if (this.dataService.bad_params == 0) {
                      this.dataService.Length[j] = (1 + this.dataService.End_floor[j] - this.dataService.Start_floor[j]) * this.dataService.Floor_height[j];
                      //    PipelineConfigurationComponent.arguments.dataGridView1[2, j].Value = this.Length[j];
                    }

                    if (this.dataService.errdn == 0) {
                      switch (this.dataService.dn) {
                        case ("DN15"):
                          this.dataService.DN_index[j] = 0;
                          break;

                        case ("DN20"):
                          this.dataService.DN_index[j] = 1;
                          break;

                        case ("DN25"):
                          this.dataService.DN_index[j] = 2;
                          break;

                        case ("DN32"):
                          this.dataService.DN_index[j] = 3;
                          break;

                        case ("DN40"):
                          this.dataService.DN_index[j] = 4;
                          break;

                        case ("DN50"):
                          this.dataService.DN_index[j] = 5;
                          break;

                        case ("DN65"):
                          this.dataService.DN_index[j] = 6;
                          break;

                        case ("DN80"):
                          this.dataService.DN_index[j] = 7;
                          break;

                        case ("DN100"):
                          this.dataService.DN_index[j] = 8;
                          break;

                        case ("DN125"):
                          this.dataService.DN_index[j] = 9;
                          break;

                        case ("DN150"):
                          this.dataService.DN_index[j] = 10;
                          break;

                        case ("DN200"):
                          this.dataService.DN_index[j] = 11;
                          break;
                      }
                    }
                  }
                }
                else {
                  this.dataService.bad_params++;
                }

                this.dataService.num_calcs = this.dataService.jmax;
              }

              // Recalc project
              // button3_Click(sender, e);

              this.dataService.project_optimized = true;

              (document.getElementById('status') as any).value = "успешно!";
            }
            else {
              this.dataService.project_optimized = true;
              (document.getElementById('status') as any).value = "Предельное удлинение достигнуто!";
            }
            break;
          }


          else //   if (this.Hard_floors[j + 1] - this.Hard_floors[j] == 1)
          {
            if (this.dataService.Hard_floors[j + 1] - this.dataService.Hard_floors[j] == 2) {
              if ((this.dataService.lower_extension < 15) && (this.dataService.higher_extension < 15)) {
                // Сдвинуть нижнюю опору выше и верхнюю ниже
                //  Form3 f = new Form3();
                //   f.Owner = this;

                if (this.dataService.num_calcs > 0) {
                  for (var i = 0; i < this.dataService.num_calcs; i++) {
                    this.dataService.dn = "";

                    switch (this.dataService.DN_index[i]) {
                      case (0):
                        this.dataService.dn = "DN15";
                        break;

                      case (1):
                        this.dataService.dn = "DN20";
                        break;

                      case (2):
                        this.dataService.dn = "DN25";
                        break;

                      case (3):
                        this.dataService.dn = "DN32";
                        break;

                      case (4):
                        this.dataService.dn = "DN40";
                        break;

                      case (5):
                        this.dataService.dn = "DN50";
                        break;

                      case (6):
                        this.dataService.dn = "DN65";
                        break;

                      case (7):
                        this.dataService.dn = "DN80";
                        break;

                      case (8):
                        this.dataService.dn = "DN100";
                        break;

                      case (9):
                        this.dataService.dn = "DN125";
                        break;

                      case (10):
                        this.dataService.dn = "DN150";
                        break;

                      case (11):
                        this.dataService.dn = "DN200";
                        break;
                    }
                  
                    if (i == 0) {
                      this.dataService.Region1 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter1 = this.dataService.dn;
                      this.dataService.LengthField1 = this.dataService.Length[i];
                      this.dataService.GroundFloor1 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor1 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight1 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints1 = this.dataService.Shift[i];
                    }
                    if (i == 1) {
                      this.dataService.Region2 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter2 = this.dataService.dn;
                      this.dataService.LengthField2 = this.dataService.Length[i];
                      this.dataService.GroundFloor2 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor2 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight2 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints2 = this.dataService.Shift[i];
                    }
                    if (i == 2) {
                      this.dataService.Region3 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter3 = this.dataService.dn;
                      this.dataService.LengthField3 = this.dataService.Length[i];
                      this.dataService.GroundFloor3 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor3 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight3 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints3 = this.dataService.Shift[i];
                    }
                    if (i == 3) {
                      this.dataService.Region4 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter4 = this.dataService.dn;
                      this.dataService.LengthField4 = this.dataService.Length[i];
                      this.dataService.GroundFloor4 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor4 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight4 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints4 = this.dataService.Shift[i];
                    }
                    if (i == 4) {
                      this.dataService.Region5 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter5 = this.dataService.dn;
                      this.dataService.LengthField5 = this.dataService.Length[i];
                      this.dataService.GroundFloor5 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor5 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight5 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints5 = this.dataService.Shift[i];
                    }
                    if (i == 5) {
                      this.dataService.Region6 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter6 = this.dataService.dn;
                      this.dataService.LengthField6 = this.dataService.Length[i];
                      this.dataService.GroundFloor6 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor6 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight6 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints6 = this.dataService.Shift[i];
                    }
                    if (i == 6) {
                      this.dataService.Region7 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter7 = this.dataService.dn;
                      this.dataService.LengthField7 = this.dataService.Length[i];
                      this.dataService.GroundFloor7 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor7 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight7 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints7 = this.dataService.Shift[i];
                    }
                    if (i == 7) {
                      this.dataService.Region8 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter8 = this.dataService.dn;
                      this.dataService.LengthField8 = this.dataService.Length[i];
                      this.dataService.GroundFloor8 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor8 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight8 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints8 = this.dataService.Shift[i];
                    }
                    if (i == 8) {
                      this.dataService.Region9 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter9 = this.dataService.dn;
                      this.dataService.LengthField9 = this.dataService.Length[i];
                      this.dataService.GroundFloor9 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor9 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight9 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints9 = this.dataService.Shift[i];
                    }
                    if (i == 9) {
                      this.dataService.Region10 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter10 = this.dataService.dn;
                      this.dataService.LengthField10 = this.dataService.Length[i];
                      this.dataService.GroundFloor10 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor10 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight10 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints10 = this.dataService.Shift[i];
                    }
                    if (i == 10) {
                      this.dataService.Region11 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter11 = this.dataService.dn;
                      this.dataService.LengthField11 = this.dataService.Length[i];
                      this.dataService.GroundFloor11 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor11 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight11 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints11 = this.dataService.Shift[i];
                    }
                    if (i == 11) {
                      this.dataService.Region12 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter12 = this.dataService.dn;
                      this.dataService.LengthField12 = this.dataService.Length[i];
                      this.dataService.GroundFloor12 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor12 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight12 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints12 = this.dataService.Shift[i];
                    }
                    if (i == 12) {
                      this.dataService.Region13 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter13 = this.dataService.dn;
                      this.dataService.LengthField13 = this.dataService.Length[i];
                      this.dataService.GroundFloor13 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor13 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight13 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints13 = this.dataService.Shift[i];
                    }
                    if (i == 13) {
                      this.dataService.Region14 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter14 = this.dataService.dn;
                      this.dataService.LengthField14 = this.dataService.Length[i];
                      this.dataService.GroundFloor14 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor14 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight14 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints14 = this.dataService.Shift[i];
                    }
                    if (i == 14) {
                      this.dataService.Region15 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter15 = this.dataService.dn;
                      this.dataService.LengthField15 = this.dataService.Length[i];
                      this.dataService.GroundFloor15 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor15 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight15 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints15 = this.dataService.Shift[i];
                    }
                    if (i == 15) {
                      this.dataService.Region16 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter16 = this.dataService.dn;
                      this.dataService.LengthField16 = this.dataService.Length[i];
                      this.dataService.GroundFloor16 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor16 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight16 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints16 = this.dataService.Shift[i];
                    }
                    if (i == 16) {
                      this.dataService.Region17 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter17 = this.dataService.dn;
                      this.dataService.LengthField17 = this.dataService.Length[i];
                      this.dataService.GroundFloor17 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor17 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight17 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints17 = this.dataService.Shift[i];
                    }
                    if (i == 17) {
                      this.dataService.Region18 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter18 = this.dataService.dn;
                      this.dataService.LengthField18 = this.dataService.Length[i];
                      this.dataService.GroundFloor18 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor18 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight18 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints18 = this.dataService.Shift[i];
                    }
                    if (i == 18) {
                      this.dataService.Region19 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter19 = this.dataService.dn;
                      this.dataService.LengthField19 = this.dataService.Length[i];
                      this.dataService.GroundFloor19 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor1 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight1 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints1 = this.dataService.Shift[i];
                    }
                    if (i == 19) {
                      this.dataService.Region20 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter20 = this.dataService.dn;
                      this.dataService.LengthField20 = this.dataService.Length[i];
                      this.dataService.GroundFloor20 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor20 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight20 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints20 = this.dataService.Shift[i];
                    }
                    if (i == 20) {
                      this.dataService.Region21 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter21 = this.dataService.dn;
                      this.dataService.LengthField21 = this.dataService.Length[i];
                      this.dataService.GroundFloor21 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor21 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight21 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints21 = this.dataService.Shift[i];
                    }
                    if (i == 21) {
                      this.dataService.Region22 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter22 = this.dataService.dn;
                      this.dataService.LengthField22 = this.dataService.Length[i];
                      this.dataService.GroundFloor22 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor22 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight22 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints22 = this.dataService.Shift[i];
                    }
                    if (i == 22) {
                      this.dataService.Region23 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter23 = this.dataService.dn;
                      this.dataService.LengthField23 = this.dataService.Length[i];
                      this.dataService.GroundFloor23 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor23 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight23 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints23 = this.dataService.Shift[i];
                    }
                    if (i == 23) {
                      this.dataService.Region23 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter23 = this.dataService.dn;
                      this.dataService.LengthField23 = this.dataService.Length[i];
                      this.dataService.GroundFloor23 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor23 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight23 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints23 = this.dataService.Shift[i];
                    }
                    if (i == 24) {
                      this.dataService.Region25 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter25 = this.dataService.dn;
                      this.dataService.LengthField25 = this.dataService.Length[i];
                      this.dataService.GroundFloor25 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor25 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight25 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints25 = this.dataService.Shift[i];
                    }
                    if (i == 25) {
                      this.dataService.Region26 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter26 = this.dataService.dn;
                      this.dataService.LengthField26 = this.dataService.Length[i];
                      this.dataService.GroundFloor26 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor26 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight26 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints26 = this.dataService.Shift[i];
                    }
                    if (i == 26) {
                      this.dataService.Region27 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter27 = this.dataService.dn;
                      this.dataService.LengthField27 = this.dataService.Length[i];
                      this.dataService.GroundFloor27 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor27 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight27 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints27 = this.dataService.Shift[i];
                    }
                    if (i == 27) {
                      this.dataService.Region28 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter28 = this.dataService.dn;
                      this.dataService.LengthField28 = this.dataService.Length[i];
                      this.dataService.GroundFloor28 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor28 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight28 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints28 = this.dataService.Shift[i];
                    }
                    if (i == 28) {
                      this.dataService.Region29 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter29 = this.dataService.dn;
                      this.dataService.LengthField29 = this.dataService.Length[i];
                      this.dataService.GroundFloor29 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor29 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight29 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints29 = this.dataService.Shift[i];
                    }
                    if (i == 29) {
                      this.dataService.Region30 = this.dataService.idx[i];
                      this.dataService.PipelineDiameter30 = this.dataService.dn;
                      this.dataService.LengthField30 = this.dataService.Length[i];
                      this.dataService.GroundFloor30 = this.dataService.Start_floor[i];
                      this.dataService.FinalFloor30 = this.dataService.End_floor[i];
                      this.dataService.FloorHeight30 = this.dataService.Floor_height[i];
                      this.dataService.AcceptableOffsetOfTheInsetPoints30 = this.dataService.Shift[i];
                    }













                    //PipelineConfigurationComponent.arguments.dataGridView1.Rows.Add();
                    //PipelineConfigurationComponent.arguments.dataGridView1[0, i].Value = this.idx[i];
                    //PipelineConfigurationComponent.arguments.dataGridView1[1, i].Value = this.dn;
                    //PipelineConfigurationComponent.arguments.dataGridView1[2, i].Value = this.Length[i];
                    //PipelineConfigurationComponent.arguments.dataGridView1[3, i].Value = this.Start_floor[i];
                    //PipelineConfigurationComponent.arguments.dataGridView1[4, i].Value = this.End_floor[i];
                    //PipelineConfigurationComponent.arguments.dataGridView1[5, i].Value = this.Floor_height[i];
                    //PipelineConfigurationComponent.arguments.dataGridView1[6, i].Value = this.Shift[i];
                  }
                  if (this.dataService.enable_lower_comp) {
                    if (this.dataService.lower_automatic < 1) {
                      //PipelineConfigurationComponent.arguments.checkBox1.Checked = true;
                    }
                    //PipelineConfigurationComponent.arguments.textBox1.Text = lower_length;
                    //PipelineConfigurationComponent.arguments.textBox5.Text = lower_floor;
                    //PipelineConfigurationComponent.arguments.textBox3.Text = lower_extension;
                  }

                  if (this.dataService.enable_higher_comp) {
                    if (this.dataService.higher_automatic < 1) {
                      //PipelineConfigurationComponent.arguments.checkBox2.Checked = true;
                    }
                    //PipelineConfigurationComponent.arguments.textBox2.Text = this.higher_length;
                    //PipelineConfigurationComponent.arguments.textBox6.Text = this.higher_floor;
                    //PipelineConfigurationComponent.arguments.textBox4.Text = this.higher_extension;
                  }
                  //PipelineConfigurationComponent.arguments.textBox8.Text = this.num_floors;
                }
                  //this.l_current = parseInt(f.textBox5.Text, System.Globalization.CultureInfo.InvariantCulture);
                this.dataService.l_current++;
                //PipelineConfigurationComponent.arguments.textBox5.Text = this.l_current;
                this.dataService.lower_floor = this.dataService.l_current;
                this.dataService.lower_extension += this.dataService.C * this.dataService.Floor_height[0] * (this.dataService.Tmax - this.dataService.Tmin) * this.dataService.k;
                this.dataService.lower_length += this.dataService.Floor_height[0];
                //PipelineConfigurationComponent.arguments.textBox1.Text = this.lower_length;
                //PipelineConfigurationComponent.arguments.textBox3.Text = this.lower_extension;

                //this.h_current = int.Parse(f.textBox6.Text, System.Globalization.CultureInfo.InvariantCulture);
                this.dataService.h_current--;
                //PipelineConfigurationComponent.arguments.textBox6.Text = this.h_current.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);

                this.dataService.last_cut = this.dataService.num_calcs - 1;
                this.dataService.higher_floor = this.dataService.h_current;
                this.dataService.higher_extension += this.dataService.C * this.dataService.Floor_height[this.dataService.last_cut] * (this.dataService.Tmax - this.dataService.Tmin) * this.dataService.k;
                this.dataService.higher_length += this.dataService.Floor_height[this.dataService.last_cut];
                //PipelineConfigurationComponent.arguments.textBox2.Text = this.higher_length;
                //PipelineConfigurationComponent.arguments.textBox4.Text = this.higher_extension;

                if (this.dataService.Start_floor[this.dataService.last_cut] == this.dataService.End_floor[this.dataService.last_cut]) {
                  this.dataService.End_floor[this.dataService.last_cut - 1] = this.dataService.higher_floor - 1;
                  //PipelineConfigurationComponent.arguments.dataGridView1[4, this.last_cut - 1].Value = (this.higher_floor - 1);
                  //PipelineConfigurationComponent.arguments.dataGridView1.Rows.RemoveAt(this.last_cut);
                }
                else {
                  this.dataService.End_floor[this.dataService.last_cut] = this.dataService.higher_floor - 1;
                  //PipelineConfigurationComponent.arguments.dataGridView1[4, this.last_cut].Value = (this.higher_floor - 1);
                }
                if (this.dataService.Start_floor[0] == this.dataService.End_floor[0]) {
                  this.dataService.Start_floor[1] = this.dataService.lower_floor;
                  //PipelineConfigurationComponent.arguments.dataGridView1[3, 1].Value = this.lower_floor;
                  //PipelineConfigurationComponent.arguments.dataGridView1.Rows.RemoveAt(0);
                }
                else {
                  this.dataService.Start_floor[0] = this.dataService.lower_floor;
                  //PipelineConfigurationComponent.arguments.dataGridView1[3, 0].Value = this.lower_floor;
                }

                this.dataService.bad_params = 0;
                this.dataService.row = 0;
                j = 0;
                while (this.dataService.row == 0) {
                  //if ((string)PipelineConfigurationComponent.arguments.dataGridView1[0, j].Value == null)
                  //{
                  this.dataService.row = 1;
                  //}
                  //else {
                  try {
                    // this.data = parseInt((string)PipelineConfigurationComponent.arguments.dataGridView1[0, j].Value, System.Globalization.CultureInfo.InvariantCulture);
                  }
                  catch { this.dataService.bad_params++; }
                  j++;
                  //}
                }
                this.dataService.jmax = j;
                if (this.dataService.jmax > 0) {
                  for (j = 0; j < this.dataService.jmax; j++) {
                    this.dataService.dn = "";
                    this.dataService.errdn = 0;
                    try {
                      //             this.idx[j] = parseInt(PipelineConfigurationComponent.arguments.dataGridView1[0, j].Value.toString(), System.Globalization.CultureInfo.InvariantCulture);
                    }
                    catch { this.dataService.bad_params++; }
                    try {
                      //             this.dn = PipelineConfigurationComponent.//dataGridView1[1, j].Value.toString();
                    }
                    catch { this.dataService.bad_params++; this.dataService.errdn = 1; }
                    try {
                      //             thi+s.Start_floor[j] = double.Parse(PipelineConfigurationComponent.// dataGridView1[3, j].Value.toString());
                    }
                    catch { this.dataService.bad_params++; }
                    try {
                      //             this.End_floor[j] = double.Parse(PipelineConfigurationComponent.// dataGridView1[4, j].Value.toString());
                    }
                    catch { this.dataService.bad_params++; }
                    try {
                      //             this.Floor_height[j] = double.Parse(PipelineConfigurationComponent.// dataGridView1[5, j].Value.toString);
                    }
                    catch { this.dataService.bad_params++; }
                    try {
                      //             this.Shift[j] = double.Parse(PipelineConfigurationComponent.// dataGridView1[6, j].Value.toString);
                    }
                    catch { this.dataService.bad_params++; }

                    if (this.dataService.bad_params == 0) {
                      if (this.dataService.Shift[j] < 15) {
                        this.dataService.Shift[j] = 15;
                        //           PipelineConfigurationComponent.// dataGridView1[6, j].Value = "15";
                      }
                    }

                    if (this.dataService.bad_params == 0) {
                      this.dataService.Length[j] = (1 + this.dataService.End_floor[j] - this.dataService.Start_floor[j]) * this.dataService.Floor_height[j];
                      //             PipelineConfigurationComponent. // dataGridView1[2, j].Value = this.Length[j].toString();
                    }

                    if (this.dataService.errdn == 0) {
                      switch (this.dataService.dn) {
                        case ("DN15"):
                          this.dataService.DN_index[j] = 0;
                          break;

                        case ("DN20"):
                          this.dataService.DN_index[j] = 1;
                          break;

                        case ("DN25"):
                          this.dataService.DN_index[j] = 2;
                          break;

                        case ("DN32"):
                          this.dataService.DN_index[j] = 3;
                          break;

                        case ("DN40"):
                          this.dataService.DN_index[j] = 4;
                          break;

                        case ("DN50"):
                          this.dataService.DN_index[j] = 5;
                          break;

                        case ("DN65"):
                          this.dataService.DN_index[j] = 6;
                          break;

                        case ("DN80"):
                          this.dataService.DN_index[j] = 7;
                          break;

                        case ("DN100"):
                          this.dataService.DN_index[j] = 8;
                          break;

                        case ("DN125"):
                          this.dataService.DN_index[j] = 9;
                          break;

                        case ("DN150"):
                          this.dataService.DN_index[j] = 10;
                          break;

                        case ("DN200"):
                          this.dataService.DN_index[j] = 11;
                          break;
                      }
                    }
                  }
                }
                else {
                  this.dataService.bad_params++;
                }
                this.dataService.num_calcs = this.dataService.jmax;
                //Recalc project
                //       button3_Click(sender, e);
                this.dataService.project_optimized = true;
                (document.getElementById('status') as any).value = "успешно!";
              }
              else {
                this.dataService.project_optimized = true;
                (document.getElementById('status') as any).value = "Предельное удлинение достигнуто!";
              }
              break;
            }
            else {
              //if (this.Hard_floors[j + 1] - this.Hard_floors[j] == 2) {
              //  if (this.Hard_floors[j + 1] - this.Hard_floors[j] == 3) {
              //    //         сдвинуть нижнюю опору выше, верхнюю ниже и искать недоиспользованные компенсаторы

              //    if (this.num_calcs > 0) {
              //      for (var i = 0; i < this.num_calcs; i++) {
              //        this.dn = "";

              //        switch (this.DN_index[i]) {
              //          case (0):
              //            this.dn = "DN15";
              //            break;

              //          case (1):
              //            this.dn = "DN20";
              //            break;

              //          case (2):
              //            this.dn = "DN25";
              //            break;

              //          case (3):
              //            this.dn = "DN32";
              //            break;

              //          case (4):
              //            this.dn = "DN40";
              //            break;

              //          case (5):
              //            this.dn = "DN50";
              //            break;

              //          case (6):
              //            this.dn = "DN65";
              //            break;

              //          case (7):
              //            this.dn = "DN80";
              //            break;

              //          case (8):
              //            this.dn = "DN100";
              //            break;

              //          case (9):
              //            this.dn = "DN125";
              //            break;

              //          case (10):
              //            this.dn = "DN150";
              //            break;

              //          case (11):
              //            this.dn = "DN200";
              //            break;
              //        }

              //        //          f.dataGridView1.Rows.Add();
              //        //          f.dataGridView1[0, i].Value = this.idx[i];
              //        //          f.dataGridView1[1, i].Value = this.dn;
              //        //          f.dataGridView1[2, i].Value = this.Length[i];
              //        //          f.dataGridView1[3, i].Value = this.Start_floor[i];
              //        //          f.dataGridView1[4, i].Value = this.End_floor[i];
              //        //          f.dataGridView1[5, i].Value = this.Floor_height[i];
              //        //          f.dataGridView1[6, i].Value = this.Shift[i];
              //      }

              //      if (this.enable_lower_comp) {
              //        if (this.lower_automatic < 1) { 
              //          //          f.checkBox1.Checked = true;
              //        }
              //          //          f.textBox1.Text = this.lower_length;
              //          //          f.textBox5.Text = this.lower_floor;
              //          //          f.textBox3.Text = this.lower_extension;
              //       }

              //      if (this.enable_higher_comp) {
              //        if (this.higher_automatic < 1) { 
              //          //          f.checkBox2.Checked = true;
              //        }
              //          //          f.textBox2.Text = this.higher_length;
              //          //          f.textBox6.Text = this.higher_floor;
              //          //          f.textBox4.Text = this.higher_extension;
              //        }

              //          //          f.textBox8.Text = this.num_floors;
              //        }

              //          //          this.l_current = int.Parse(f.textBox5.Text, System.Globalization.CultureInfo.InvariantCulture);
              //                      this.l_current++;
              //          //          f.textBox5.Text = this.l_current.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);

              //            this.lower_floor = this.l_current;
              //            this.lower_extension += this.C * this.Floor_height[0] * (this.Tmax - this.Tmin) * this.k;
              //            this.lower_length += this.Floor_height[0];

              //            //        f.textBox1.Text = this.lower_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
              //            //        f.textBox3.Text = this.lower_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
              //            //        this.h_current = int.Parse(f.textBox6.Text, System.Globalization.CultureInfo.InvariantCulture);
              //            this.h_current--;
              //            //        f.textBox6.Text = h_current.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);

              //            this.last_cut = this.num_calcs - 1;
              //            this.higher_floor = this.h_current;
              //            this.higher_extension += this.C * this.Floor_height[this.last_cut] * (this.Tmax - this.Tmin) * this.k;
              //            this.higher_length += this.Floor_height[this.last_cut];
              //            //        f.textBox2.Text = this.higher_length;
              //            //        f.textBox4.Text = this.higher_extension;
              //            if (this.Start_floor[this.last_cut] == this.End_floor[this.last_cut]) {
              //              this.End_floor[this.last_cut - 1] = this.higher_floor - 1;
              //              //      f.dataGridView1[4, this.last_cut - 1].Value = (this.higher_floor - 1);
              //              //      f.dataGridView1.Rows.RemoveAt(this.last_cut);
              //            }
              //            else {
              //              this.End_floor[this.last_cut] = this.higher_floor - 1;
              //              //      f.dataGridView1[4, this.last_cut].Value = (this.higher_floor - 1);
              //            }

              //            if (this.Start_floor[0] == this.End_floor[0]) {
              //              this.Start_floor[1] = this.lower_floor;
              //              //      f.dataGridView1[3, 1].Value = this.lower_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              //              //      f.dataGridView1.Rows.RemoveAt(0);
              //            }
              //            else {
              //              this.Start_floor[0] = this.lower_floor;
              //              //      f.dataGridView1[3, 0].Value = this.lower_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              //            }

              //              this.row = 0;
              //              j = 0;
              //              while (this.row == 0) {
              //               // if ((string)f.dataGridView1[0, j].Value == null)
              //                    {
              //                      this.row = 1;
              //                    }
              //               // else {
              //                try {
              //                  //  this.data = double.Parse((string)f.dataGridView1[0, j].Value, System.Globalization.CultureInfo.InvariantCulture);
              //                }
              //                catch { this.bad_params++; }
              //                j++;
              //              }
              //            }
              //            this.jmax = j;
              //            if (this.jmax > 0) {

              //              for (j = 0; j < this.jmax; j++) {
              //               this.dn = "";
              //              this.errdn = 0;
              //                try {
              //                // this.idx[j] = int.Parse((string)f.dataGridView1[0, j].Value, System.Globalization.CultureInfo.InvariantCulture);
              //                }
              //                catch { this.bad_params++; }
              //                try {
              //                // this.dn = (string)f.dataGridView1[1, j].Value;
              //                }
              //                catch { this.bad_params++; this.errdn = 1; }
              //                try {
              //                //  this.Start_floor[j] = double.Parse((string)f.dataGridView1[3, j].Value, System.Globalization.CultureInfo.InvariantCulture);
              //                }
              //                catch { this.bad_params++; }
              //                try {
              //                //  this.End_floor[j] = double.Parse((string)f.dataGridView1[4, j].Value, System.Globalization.CultureInfo.InvariantCulture);
              //                }
              //                catch { this.bad_params++; }
              //                try {
              //                //  this.Floor_height[j] = double.Parse((string)f.dataGridView1[5, j].Value, System.Globalization.CultureInfo.InvariantCulture);
              //                }
              //                catch { this.bad_params++; }
              //                try {
              //                //  this.Shift[j] = double.Parse((string)f.dataGridView1[6, j].Value, System.Globalization.CultureInfo.InvariantCulture);
              //                }
              //                catch { this.bad_params++; }
              //                  if (this.bad_params == 0) {
              //                    if (this.Shift[j] < 15) {
              //                        this.Shift[j] = 15;
              //                // f.datagridview1[6, j].value = "15";
              //                    }
              //                  }

              //                  if (this.bad_params == 0) {
              //                    this.Length[j] = (1 + this.End_floor[j] - this.start_floor[j]) * this.Floor_height[j];
              //                         //f.datagridview1[2, j].value = Length[j].tostring("f2", system.globalization.cultureinfo.invariantculture);
              //                        }
              //                        if (this.errdn == 0) {
              //                          switch (this.dn) {
              //                            case ("dn15"):
              //                              this.DN_index[j] = 0;
              //                              break;

              //                            case ("dn20"):
              //                              this.DN_index[j] = 1;
              //                              break;

              //                            case ("dn25"):
              //                              this.DN_index[j] = 2;
              //                              break;

              //                            case ("dn32"):
              //                              this.DN_index[j] = 3;
              //                              break;

              //                            case ("dn40"):
              //                              this.DN_index[j] = 4;
              //                              break;

              //                            case ("dn50"):
              //                              this.DN_index[j] = 5;
              //                              break;

              //                            case ("dn65"):
              //                              this.DN_index[j] = 6;
              //                              break;

              //                            case ("dn80"):
              //                              this.DN_index[j] = 7;
              //                              break;

              //                            case ("dn100"):
              //                              this.DN_index[j] = 8;
              //                              break;

              //                            case ("dn125"):
              //                              this.DN_index[j] = 9;
              //                              break;

              //                            case ("dn150"):
              //                              this.DN_index[j] = 10;
              //                              break;

              //                            case ("dn200"):
              //                              this.DN_index[j] = 11;
              //                              break;
              //                          }
              //                        }

              //                      }

              //                    }
              //                    else {
              //                      this.bad_params++;
              //                    }

              //                      this.num_calcs = this.jmax;

              //                    // recalc project
              //                    //button3_click(sender, e);


              //                     //попробовать найти недоиспользованные компенсаторы
              //                   for (var c = 0; c < this.acts_count; c++)
              //                    {
              //                     if (this.actualShift[c] < 15) {
              //                         this.tmp;
              //                         this.tmp = 0;
              //                      }
              //                    }


              //                     this.project_optimized = true;
              //                    (document.getElementById('status') as any).value = "успешно!";

              //                            break;
              //                          }
              //                      else {
              //                        (document.getElementById('status') as any).value = "оптимизация невозможна, проверьте допустимое смещение точек врезки!";
              //                      }

              (document.getElementById('status') as any).value = "оптимизация невозможна, проверьте допустимое смещение точек врезки!";
            }
          }
        }
      }
      else {
        (document.getElementById('status') as any).value = "проект уже оптимизирован!";
      }
    }
  }

  //фильтр группа стали и сплава
  // данный метод применяется для оперделения параметров программы при выборе пользователем определенного значения поля "группа стали и сплава" который ввел пользователь
  // имеются четыри заранее предопределенных значения поля [указать тклр],[группа 1],[группа 2],[группа 3]
  filterSteelAndAlloyGroup() {
    this.dataService.cur_idx = this.myForm.controls.steelаndаlloygroup.value;
    this.dataService.errTmax = 0;
    this.dataService.bad_params = 0;

    if (this.dataService.lic > 0) {
      if (this.dataService.errTmax == 0) {

        switch (this.myForm.controls.steelаndаlloygroup.value) {

          case ("указать тклр"):
            if (this.myForm.controls.temperaturecoefficientoflinearexpansion.value == "")
              this.dataService.bad_params++;
            if (this.myForm.controls.temperaturecoefficientoflinearexpansion.value.includes(",")) {
              this.dataService.bad_params++;
            }
            try { this.dataService.c = this.myForm.controls.temperaturecoefficientoflinearexpansion.value; }
            catch { this.dataService.bad_params++; }
            break;

          case ("группа 1"):
            this.dataService.c = (0.006214 * this.dataService.Tmax + 11.24) / 1000; // группа 1
            this.dataService.auto_change_C = true;
            (document.getElementById('temperaturecoefficientoflinearexpansion') as any).value = this.dataService.c;
            this.dataService.auto_change_C = false;
            break;

          case ("группа 2"):
            this.dataService.c = (0.004571 * this.dataService.Tmax + 9.843) / 1000; // группа 2
            this.dataService.auto_change_C = true;
            (document.getElementById('temperaturecoefficientoflinearexpansion') as any).value = this.dataService.c;
            this.dataService.auto_change_C = false;
            break;

          case ("группа 3"):
            this.dataService.c = (0.004000 * this.dataService.Tmax + 16.2) / 1000; // группа 3
            this.dataService.auto_change_C = true;
            (document.getElementById('temperaturecoefficientoflinearexpansion') as any).value = this.dataService.c;
            this.dataService.auto_change_C = false;
            break;
        }
      }

      if (this.myForm.controls.steelаndаlloygroup.value == "") {
        if (this.myForm.controls.temperaturecoefficientoflinearexpansion.value == "") {
          this.dataService.bad_params++;
        }
      }

      if (this.dataService.bad_params > 0)
        (document.getElementById('status') as any).value = "ошибка задания тклр!";
      else
        (document.getElementById('status') as any).value = "";

    }
  }
  ///тклр, мм/м × ℃
  ///
  ///
  filterTemperatureCoefficienToFlinarExpansion() {
    this.dataService.bad_params = 0;

    if (!this.dataService.auto_change_C) {
      (document.getElementById('temperaturecoefficientoflinearexpansion') as any).value = "указать тклр";

      if (this.myForm.controls.temperaturecoefficientoflinearexpansion.value == "")
        this.dataService.bad_params++;
      if (this.myForm.controls.temperaturecoefficientoflinearexpansion.value.includes(","))
        this.dataService.bad_params++;
      try { this.dataService.c = this.myForm.controls.temperaturecoefficientoflinearexpansion.value; }
      catch { this.dataService.bad_params++; }

      if (this.dataService.bad_params > 0)
        (document.getElementById('status') as any).value = "ошибка задания тклр!";
      else
        (document.getElementById('status') as any).value = "";
    }
  }

  ///коэффициент запаса, %
  ///
  ///
  metodsafetyfactor() {
    this.dataService.k1 = 0;
    this.dataService.bad_params = 0;

    if (this.myForm.controls.safetyfactor.value == "")
      this.dataService.bad_params++;
    if (this.myForm.controls.safetyfactor.value.contains(","))
      this.dataService.bad_params++;
    try { this.dataService.k1 = this.myForm.controls.safetyfactor.value; }
    catch { this.dataService.bad_params++; }

    this.dataService.k = (this.dataService.k1 / 100) + 1;

    if (this.dataService.bad_params > 0)
      (document.getElementById('status') as any).value = "ошибка задания коэффициента запаса!";
    else
      (document.getElementById('status') as any).value = "";
  }
  /// private void textbox2_textchanged(object sender, eventargs e)
  ///
  /// ошибка задания максимальной температуры!
  metodmaximumcoolantemperature() {
    this.dataService.bad_params = 0;

    if (this.myForm.controls.мaximumcoolantemperature.value == "")
      this.dataService.bad_params++;
    if (this.myForm.controls.мaximumcoolantemperature.value.includes(","))
      this.dataService.bad_params++;
    try { this.dataService.Tmax = this.myForm.controls.мaximumcoolantemperature.value; }
    catch { this.dataService.bad_params++; }
    if (this.dataService.bad_params > 0)
      (document.getElementById('status') as any).value = "ошибка задания максимальной температуры!";
    else
      (document.getElementById('status') as any).value = "";
    this.filterSteelAndAlloyGroup();
  }
  ///private void textbox3_textchanged(object sender, eventargs e)
  ///
  /// ошибка задания минимальной температуры
  metodminimumairtemperatureduringinstallationc() {
    this.dataService.bad_params = 0;

    if (this.myForm.controls.мinimumаirtemperatureduringinstallation.value == "")
      this.dataService.bad_params++;
    if (this.myForm.controls.мinimumаirtemperatureduringinstallation.value.contains(","))
      this.dataService.bad_params++;
    try { this.dataService.Tmin = this.myForm.controls.мinimumаirtemperatureduringinstallation.value; }
    catch { this.dataService.bad_params++; }

    this.dataService.name = "";

    if (this.dataService.bad_params > 0)
      (document.getElementById('status') as any).value = "ошибка задания минимальной температуры!";
    else
      (document.getElementById('status') as any).value = "";
  }

  calculation() {
    if (this.dataService.lic > 0) {
      for (var i = 0; i < 100; i++) {
        this.dataService.Comp_floors[i] = 0;
        this.dataService.Hard_floors[i] = 0;
        this.dataService.Comp_DN[i] = 0;
        this.dataService.Hard_DN[i] = 0;
        this.dataService.actualShift[i] = 0;
        this.dataService.FloorsIdx[i][0] = 0;
        this.dataService.FloorsIdx[i][1] = 0;
      }
      this.dataService.comp_count = 0;
      this.dataService.hard_count = 0;
      this.dataService.acts_count = 0;
    }
    if (this.myForm.controls.pipelinetype.value.tostring() == "") {
      this.dataService.bad_params++;
      this.dataService.errl = 1;
    }
    try { this.dataService.k1 = this.myForm.controls.pipelinetype.value; }
    catch { this.dataService.bad_params++; this.dataService.errl = 1; }
    if (this.dataService.name == "") {
      this.dataService.k = 0;
    }
    this.dataService.k = (this.dataService.k1 / 100) + 1;
    if (this.myForm.controls.мaximumcoolantemperature.toString() == "") { this.dataService.errTmin = 1; }

    this.dataService.methodVariableMaximumCoolanTemperature = this.myForm.controls.мaximumcoolantemperature.toString()
    if (this.dataService.methodVariableMaximumCoolanTemperature.includes(",")) {
      this.dataService.bad_params++;
      this.dataService.errTmin = 1;
    }
    try { this.dataService.Tmin = this.myForm.controls.мaximumcoolantemperature.value; }
    catch {
      this.dataService.bad_params++;
      this.dataService.errTmin = 1;
    }
    // this.dl = this.c * this.l * (this.tmax - this.tmin) * this.k ;
    // this.dl += this.c * this.floors_height * (this.tmax - this.tmin) * this.k; // запас против неудачного числа этажей


    if (this.myForm.controls.pipelinetype.value.tostring() == '') { //if (combobox2.selecteditem == null)
      this.dataService.errType = 1;
    }
    switch (this.myForm.controls.pipelinetype.value.tostring())  // switch (combobox2.selecteditem)
    {
      case ("отопление, сварное соединение"):
        this.dataService.Comp_art_base = "альтеза.а.x.1.6.";
        this.dataService.Hard_art_base = "альтеза.a.н.о-";
        this.dataService.Connect_type = "сварка";
        break;

      case ("водоснабжение, резьбовое соединение"):
        this.dataService.Comp_art_base = "альтеза.b.x.1.6.";
        this.dataService.Hard_art_base = "альтеза.b.н.о-";
        this.dataService.Connect_type = "резьба/фланец";
        break;

      case ("водоснабжение, грувлок соединение"):
        this.dataService.Comp_art_base = "альтеза.b.x.1.6.";
        this.dataService.Hard_art_base = "альтеза.b.н.о-";
        this.dataService.Connect_type = "грувлок";
        break;
    }
    if ((this.dataService.errdn + this.dataService.errType + this.dataService.errl + this.dataService.errTmax + this.dataService.errTmin == 0) || (this.dataService.num_calcs > 0)) {
      this.dataService.select_place = 0;
      this.dataService.fix_start_floor = 0;
      this.dataService.start_floor = 0;

      this.dataService.dL = 0;
      if (this.dataService.comp_near_hard) {
        if (this.dataService.enable_lower_comp) {
          this.dataService.Hard_floors[this.dataService.hard_count] = this.dataService.lower_floor;
          this.dataService.hard_count++;
        }

        for (var i = 0; i < this.dataService.num_calcs; i++) {
          this.dataService.max_ext;

          if (this.dataService.Shift[i] > 32) {
            if (this.dataService.DN_index[i] < 8)
              this.dataService.max_ext = 33;
            else
              this.dataService.max_ext = 35;
          } else
            this.dataService.max_ext = this.dataService.Shift[i];

          for (var j = this.dataService.start_floor[i]; j <= this.dataService.End_floor[i]; this.dataService.j++) {
            this.dataService.cur = this.dataService.c * this.dataService.Floor_height[i] * (this.dataService.Tmax - this.dataService.Tmin) * this.dataService.k;
            this.dataService.dL += this.dataService.cur;

            if (this.dataService.fix_start_floor == 0) {
              this.dataService.fix_start_floor = 1;
              this.dataService.start_floor = this.dataService.start_floor[i];
              this.dataService.FloorsIdx[0][0] = this.dataService.start_floor;  //   был такой масив this.floorsidx[0, 0]

            }

            if (this.dataService.dL > this.dataService.max_ext) {
              j--;

              this.dataService.Comp_floors[this.dataService.comp_count] = j;
              this.dataService.Comp_DN[this.dataService.comp_count] = this.dataService.DN_index[i];

              this.dataService.Hard_DN[this.dataService.hard_count] = this.dataService.DN_index[i];

              this.dataService.Hard_floors[this.dataService.hard_count] = j + 1;
              this.dataService.actualShift[this.dataService.acts_count] = this.dataService.dL - this.dataService.cur;
              this.dataService.FloorsIdx[this.dataService.acts_count + 1][0] = j + 1;
              this.dataService.FloorsIdx[this.dataService.acts_count][1] = j;
              this.dataService.comp_count++;
              this.dataService.hard_count++;
              this.dataService.acts_count++;
              this.dataService.dL = 0;
            }
          }
        }
        if (this.dataService.dL > 0) {
          this.dataService.Comp_floors[this.dataService.comp_count] = this.dataService.End_floor[this.dataService.num_calcs - 1];
          this.dataService.Comp_DN[this.dataService.comp_count] = this.dataService.DN_index[this.dataService.num_calcs - 1];
          if (this.dataService.enable_higher_comp)
            this.dataService.Hard_floors[this.dataService.hard_count] = this.dataService.higher_floor;
          else
            this.dataService.Hard_floors[this.dataService.hard_count] = this.dataService.End_floor[this.dataService.num_calcs - 1] + 1;
          this.dataService.Hard_DN[this.dataService.hard_count] = this.dataService.DN_index[this.dataService.num_calcs - 1];
          this.dataService.actualShift[this.dataService.acts_count] = this.dataService.dL;
          if (this.dataService.enable_higher_comp)
            this.dataService.FloorsIdx[this.dataService.acts_count][1] = this.dataService.higher_floor - 1;
          else
            this.dataService.FloorsIdx[this.dataService.acts_count][1] = this.dataService.End_floor[this.dataService.num_calcs - 1];
          this.dataService.comp_count++;
          this.dataService.hard_count++;
          this.dataService.acts_count++;
          this.dataService.dL = 0;
        }
      }
      else {
        this.dataService.op_mode = 0;

        if (this.dataService.enable_lower_comp) {
          this.dataService.Hard_DN[this.dataService.hard_count] = this.dataService.DN_index[0];
          this.dataService.Hard_floors[this.dataService.hard_count] = this.dataService.lower_floor;
          this.dataService.hard_count++;
        }

        for (var i = 0; i < this.dataService.num_calcs; i++) {
          this.dataService.max_ext;
          this.dataService.prev_op_mode = 0;
          this.dataService.prev_checkval = 0;

          this.dataService.prev_op_mode = this.dataService.op_mode;

          if (this.dataService.Shift[i] > 32) {
            this.dataService.op_mode = 0;
            if (this.dataService.DN_index[i] < 8)
              this.dataService.max_ext = 33;
            else
              this.dataService.max_ext = 35;
          }
          else {
            this.dataService.max_ext = this.dataService.Shift[i];
            this.dataService.op_mode = 1;
          }

          for (var j = this.dataService.start_floor[i]; j <= this.dataService.End_floor[i]; j++) {
            this.dataService.cur = this.dataService.c * this.dataService.Floor_height[i] * (this.dataService.Tmax - this.dataService.Tmin) * this.dataService.k;
            this.dataService.dL += this.dataService.cur;


            if (this.dataService.fix_start_floor == 0) {
              this.dataService.fix_start_floor = 1;
              this.dataService.start_floor = this.dataService.start_floor[i];
              this.dataService.FloorsIdx[0][0] = this.dataService.start_floor;
            }

            switch (this.dataService.op_mode) {
              case (0):
                if (this.dataService.dL > this.dataService.max_ext) {
                  j--;
                  this.dataService.Comp_floors[this.dataService.comp_count] = j;
                  this.dataService.Comp_DN[this.dataService.comp_count] = this.dataService.DN_index[i];
                  this.dataService.Hard_DN[this.dataService.hard_count] = this.dataService.DN_index[i];
                  this.dataService.Hard_floors[this.dataService.hard_count] = j + 1;
                  this.dataService.actualShift[this.dataService.acts_count] = this.dataService.dL - this.dataService.cur;
                  this.dataService.FloorsIdx[this.dataService.acts_count + 1][0] = j + 1;
                  this.dataService.FloorsIdx[this.dataService.acts_count][1] = j;
                  this.dataService.comp_count++;
                  this.dataService.hard_count++;
                  this.dataService.acts_count++;
                  this.dataService.dL = 0;
                }
                break;

              case (1):
                if (this.dataService.select_place == 0) {
                  this.dataService.checkval;

                  this.dataService.checkval = this.dataService.max_ext;
                  this.dataService.prev_checkval = this.dataService.checkval;

                  if (this.dataService.dL > this.dataService.checkval) {
                    j--;
                    this.dataService.Comp_floors[this.dataService.comp_count] = j;
                    this.dataService.Comp_DN[this.dataService.comp_count] = this.dataService.DN_index[i];
                    this.dataService.dL -= this.dataService.cur;
                    this.dataService.actualShift[this.dataService.acts_count] = this.dataService.dL;
                    this.dataService.FloorsIdx[this.dataService.acts_count + 1][0] = j + 1;
                    this.dataService.FloorsIdx[this.dataService.acts_count][1] = j;
                    if (this.dataService.Comp_DN[this.dataService.comp_count] > 4) {
                      this.dataService.Hard_DN[this.dataService.hard_count] = this.dataService.DN_index[i];
                      this.dataService.Hard_floors[this.dataService.hard_count] = j + 1;
                      this.dataService.select_place = 0;
                      this.dataService.hard_count++;
                      this.dataService.dL = 0;
                    }
                    else {
                      this.dataService.select_place = 1;
                    }
                    this.dataService.comp_count++;
                    this.dataService.acts_count++;


                  }
                }
                else {
                  if (((this.dataService.max_ext * 2) > 33) || ((this.dataService.prev_checkval + this.dataService.max_ext) > 33))
                    this.dataService.checkval = 33;
                  else
                    this.dataService.checkval = this.dataService.max_ext * 2;

                  this.dataService.prev_checkval = 0;
                  if (this.dataService.dL > this.dataService.checkval) {
                    this.dataService.Hard_DN[this.dataService.hard_count] = this.dataService.DN_index[i];
                    this.dataService.Hard_floors[this.dataService.hard_count] = j;
                    this.dataService.actualShift[this.dataService.acts_count] = this.dataService.dL - this.dataService.cur - this.dataService.actualShift[this.dataService.acts_count - 1];
                    this.dataService.FloorsIdx[this.dataService.acts_count + 1][0] = j;
                    this.dataService.FloorsIdx[this.dataService.acts_count][1] = j - 1;
                    this.dataService.hard_count++;
                    this.dataService.acts_count++;
                    this.dataService.dL = 0;
                    j--;
                    this.dataService.select_place = 0;
                  }
                }
                break;

              case (2):
                break;
            }
          }
        }

        if (this.dataService.dL > 0) {
          if (this.dataService.select_place == 0) {
            this.dataService.Comp_floors[this.dataService.comp_count] = this.dataService.End_floor[this.dataService.num_calcs - 1];
            this.dataService.Comp_DN[this.dataService.comp_count] = this.dataService.DN_index[this.dataService.num_calcs - 1];
            this.dataService.comp_count++;
            this.dataService.actualShift[this.dataService.acts_count] = this.dataService.dL;
          }
          else {
            this.dataService.actualShift[this.dataService.acts_count] = this.dataService.dL - this.dataService.actualShift[this.dataService.acts_count - 1];
          }

          if (this.dataService.enable_higher_comp)
            this.dataService.Hard_floors[this.dataService.hard_count] = this.dataService.higher_floor;
          else
            this.dataService.Hard_floors[this.dataService.hard_count] = this.dataService.End_floor[this.dataService.num_calcs - 1] + 1;

          this.dataService.Hard_DN[this.dataService.hard_count] = this.dataService.DN_index[this.dataService.num_calcs - 1];

          if (this.dataService.enable_higher_comp)
            this.dataService.FloorsIdx[this.dataService.acts_count][1] = this.dataService.higher_floor - 1;
          else
            this.dataService.FloorsIdx[this.dataService.acts_count][1] = this.dataService.End_floor[this.dataService.num_calcs - 1];
          this.dataService.hard_count++;
          this.dataService.acts_count++;
          this.dataService.dL = 0;
        }
      }

    }

    if ((this.dataService.errType + this.dataService.errl + this.dataService.errTmax + this.dataService.errTmin == 0) || (this.dataService.num_calcs > 0)) {
      this.dataService.error_message = "успешно!";
    }
    else {
      this.dataService.error_message = "ошибка! введите корректные параметры трубопровода.";
    }
    //      реализованно через  this.myform.controls.controls.status.value = this.error_message;
  }


  ///this metods for combobox
  ///
  ///
  ///*
  /////this metod for combobox
  /////
  /////modifies the filtered list as per input                                     
  //getfilteredlist() {
  //  this.listhidden = false;
  //  if (!this.listhidden && this.inputitem !== undefined) {
  //    this.filteredlist = this.list.filter((item) => item.tolowercase().startswith(this.inputitem.tolowercase()));
  //  }
  //}

  //// select highlighted item when enter is pressed or any item that is clicked
  //selectitem(ind) {
  //  this.inputitem = this.filteredlist[ind];
  //  this.listhidden = true;
  //  this.selectedindex = ind;
  //}

  ///// this metod for combobox
  ///// navigate through the list of items
  /////
  //onkeypress(event) {
  //  if (!this.listhidden) {
  //    if (event.key === 'escape') {
  //      this.selectedindex = -1;
  //      this.togglelistdisplay(0);
  //    } else if (event.key === 'enter') {
  //      this.togglelistdisplay(0);
  //    } else if (event.key === 'arrowdown') {
  //      this.listhidden = false;
  //      this.selectedindex = (this.selectedindex + 1) % this.filteredlist.length;
  //      if (this.filteredlist.length > 0 && !this.listhidden) {
  //        document.getelementsbytagname('list-item')[this.selectedindex].scrollintoview();
  //      }
  //    } else if (event.key === 'arrowup') {
  //      this.listhidden = false;
  //      if (this.selectedindex <= 0) {
  //        this.selectedindex = this.filteredlist.length;
  //      }
  //      this.selectedindex = (this.selectedindex - 1) % this.filteredlist.length;
  //      if (this.filteredlist.length > 0 && !this.listhidden) {
  //        document.getelementsbytagname('list-item')[this.selectedindex].scrollintoview();
  //      }
  //    }
  //  }
  //}



  ///// this metod for combobox
  ///// show or hide the dropdown list when input is focused or moves out of focus
  /////
  ///
  //togglelistdisplay(sender: number) {
  //  if (sender === 1) {
  //    this.listhidden = false;
  //    this.getfilteredlist();
  //  } else {
  //    // helps to select item by clicking
  //    settimeout(() => {
  //      this.selectitem(this.selectedindex);
  //      this.listhidden = true;
  //      if (!this.list.includes(this.inputitem)) {
  //        this.showerror = true;
  //        this.filteredlist = this.list;
  //      } else {
  //        this.showerror = false;
  //      }
  //    }, 500);
  //  }
  //}

}
