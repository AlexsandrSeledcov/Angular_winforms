import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Axial_loads_on_fixed_bearings } from '../_models/Axial_loads_on_fixed_bearings';
import { Dependence_of_the_coefficient_of_linear } from '../_models/Dependence_of_the_coefficient_of_linear';

import { Compensators_with_groovlock_stainless_steel_pipe } from '../_models/Compensators_with_groovlock_stainless_steel_pipe';
import { Compensators_with_screwed_flanged_and_staimless_steel_pipes } from '../_models/Compensators_with_screwed_flanged_and_staimless_steel_pipes';
import { Compensators_with_welding_pipes } from '../_models/Compensators_with_welding_pipes';

import { Supports_for_piping_DN50_200 } from '../_models/Supports_for_piping_DN50_200';
import { Supports_for_piping_DN15_100 } from '../_models/Supports_for_piping_DN15_100';
import { Supports_for_piping_DN15_40 } from '../_models/Supports_for_piping_DN15_40';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string;
  private url = "/api";
  private phpUrl = "";
  constructor(private http: HttpClient) { }


// VerticalPipelineParameters


  // general
  comp_count: number = 1;
  hard_count: number = 0;

  // boolean
  comp_near_hard: boolean = false;
  auto_change_C: boolean = false;
  project_created: boolean = false;

  enable_lower_comp: boolean = false;
  enable_higher_comp: boolean = false;


  num_floors: number = 0;
  lower_length: number = 0;
  higher_length: number = 0;

  lower_extension: number = 0;
  higher_extension: number = 0;

  lower_automatic: number = 0;
  higher_automatic: number = 0;

  j_l: number = 0;
  jj_l: number = 0;

  j_h: number = 0;
  jj_h: number = 0;
  jmax_h: number = 0;

  saved: number = 0;

  lower_floor: number = 0;
  higher_floor: number = 0;

  acts_count: number = 0;

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
  l: number = 0;
  Ex: number = 0;
  NumComp: number = 0;
  use_floors: number = 0;
  floors_num: number = 0;
  floors_height: number = 0;

  idx: number[];//[100]
  Length: number[];//[100]

  Shift: number[];//[100]
  Comp_floors: number[];//[100]
  Comp_DN: number[];//[100]
  Hard_DN: number[];//[100]
  actualShift: number[];//[100]
  FloorsIdx: number[][];//[100,2]

  // method variables Plot_Graphics() 
  fontsize: number = 9;
  cur_floor: number = 0;
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
  Dn:     number[] = [this.num_floors];        // Внешний диаметр трубы [мм], double Dn = 0;
  Dt:     number[] = [this.num_floors];       // Толщина стенки [мм], double Dt = 0;
  Mt:     number[] = [this.num_floors];      // Масса погонного метра трубы[кг / м), double Mt1 = 0;
  Sv:     number[] = [this.num_floors];
  Fh:     number[] = [this.num_floors];
  Jx:     number[] = [this.num_floors];

  DN_index:           number[];//[100]
  Hard_floors:        number[];//[100]
  Start_floor:        number[];//[100]
  Start_floorNumber:  number;
  End_floor:          number[];//[100]
  End_floorNumber:    number;
  Floor_height:       number[];//[100]
  Floor_heightNumber: number;
  F_pipe:             number[] = [this.hard_count];
  nst:                number[] = [this.hard_count];
  Overall_Shift:      number[] = [this.hard_count];

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


  static saved: any = 0;
  static jmax_h: number;
  static idx: any;
  static Start_floor: any;
  static End_floor: any;
  static Floor_height: any;
  static Shift: any;
 // LengthField1: number;
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
   aj_h: any;
  // jj_h: any;
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


  //VerticalPipelineParameters/optimizeProject()/PipelineConfigurationComponent.arguments.dataGridView1.Rows.Add() {
  Region1: number;
  PipelineDiameter1: string;
  LengthField1: number;
  GroundFloor1: number;
  FinalFloor1: number;
  FloorHeight1: number;
  AcceptableOffsetOfTheInsetPoints1: number;

  Region2: number;
  PipelineDiameter2: string;
  LengthField2: number;
  GroundFloor2: number;
  FinalFloor2: number;
  FloorHeight2: number;
  AcceptableOffsetOfTheInsetPoints2: number;

  Region3: number;
  PipelineDiameter3: string;
  LengthField3: number;
  GroundFloor3: number;
  FinalFloor3: number;
  FloorHeight3: number;
  AcceptableOffsetOfTheInsetPoints3: number;

  Region4: number;
  PipelineDiameter4: string;
  LengthField4: number;
  GroundFloor4: number;
  FinalFloor4: number;
  FloorHeight4: number;
  AcceptableOffsetOfTheInsetPoints4: number;

  Region5: number;
  PipelineDiameter5: string;
  LengthField5: number;
  GroundFloor5: number;
  FinalFloor5: number;
  FloorHeight5: number;
  AcceptableOffsetOfTheInsetPoints5: number;

  Region6: number;
  PipelineDiameter6: string;
  LengthField6: number;
  GroundFloor6: number;
  FinalFloor6: number;
  FloorHeight6: number;
  AcceptableOffsetOfTheInsetPoints6: number;

  Region7: number;
  PipelineDiameter7: string;
  LengthField7: number;
  GroundFloor7: number;
  FinalFloor7: number;
  FloorHeight7: number;
  AcceptableOffsetOfTheInsetPoints7: number;

  Region8: number;
  PipelineDiameter8: string;
  LengthField8: number;
  GroundFloor8: number;
  FinalFloor8: number;
  FloorHeight8: number;
  AcceptableOffsetOfTheInsetPoints8: number;

  Region9: number;
  PipelineDiameter9: string;
  LengthField9: number;
  GroundFloor9: number;
  FinalFloor9: number;
  FloorHeight9: number;
  AcceptableOffsetOfTheInsetPoints9: number;

  Region10: number;
  PipelineDiameter10: string;
  LengthField10: number;
  GroundFloor10: number;
  FinalFloor10: number;
  FloorHeight10: number;
  AcceptableOffsetOfTheInsetPoints10: number;

  Region11: number;
  PipelineDiameter11: string;
  LengthField11: number;
  GroundFloor11: number;
  FinalFloor11: number;
  FloorHeight11: number;
  AcceptableOffsetOfTheInsetPoints11: number;

  Region12: number;
  PipelineDiameter12: string;
  LengthField12: number;
  GroundFloor12: number;
  FinalFloor12: number;
  FloorHeight12: number;
  AcceptableOffsetOfTheInsetPoints12: number;

  Region13: number;
  PipelineDiameter13: string;
  LengthField13: number;
  GroundFloor13: number;
  FinalFloor13: number;
  FloorHeight13: number;
  AcceptableOffsetOfTheInsetPoints13: number;

  Region14: number;
  PipelineDiameter14: string;
  LengthField14: number;
  GroundFloor14: number;
  FinalFloor14: number;
  FloorHeight14: number;
  AcceptableOffsetOfTheInsetPoints14: number;

  Region15: number;
  PipelineDiameter15: string;
  LengthField15: number;
  GroundFloor15: number;
  FinalFloor15: number;
  FloorHeight15: number;
  AcceptableOffsetOfTheInsetPoints15: number;

  Region16: number;
  PipelineDiameter16: string;
  LengthField16: number;
  GroundFloor16: number;
  FinalFloor16: number;
  FloorHeight16: number;
  AcceptableOffsetOfTheInsetPoints16: number;

  Region17: number;
  PipelineDiameter17: string;
  LengthField17: number;
  GroundFloor17: number;
  FinalFloor17: number;
  FloorHeight17: number;
  AcceptableOffsetOfTheInsetPoints17: number;

  Region18: number;
  PipelineDiameter18: string;
  LengthField18: number;
  GroundFloor18: number;
  FinalFloor18: number;
  FloorHeight18: number;
  AcceptableOffsetOfTheInsetPoints18: number;

  Region19: number;
  PipelineDiameter19: string;
  LengthField19: number;
  GroundFloor19: number;
  FinalFloor19: number;
  FloorHeight19: number;
  AcceptableOffsetOfTheInsetPoints19: number;

  Region20: number;
  PipelineDiameter20: string;
  LengthField20: number;
  GroundFloor20: number;
  FinalFloor20: number;
  FloorHeight20: number;
  AcceptableOffsetOfTheInsetPoints20: number;

  Region21: number;
  PipelineDiameter21: string;
  LengthField21: number;
  GroundFloor21: number;
  FinalFloor21: number;
  FloorHeight21: number;
  AcceptableOffsetOfTheInsetPoints21: number;

  Region22: number;
  PipelineDiameter22: string;
  LengthField22: number;
  GroundFloor22: number;
  FinalFloor22: number;
  FloorHeight22: number;
  AcceptableOffsetOfTheInsetPoints22: number;

  Region23: number;
  PipelineDiameter23: string;
  LengthField23: number;
  GroundFloor23: number;
  FinalFloor23: number;
  FloorHeight23: number;
  AcceptableOffsetOfTheInsetPoints23: number;

  Region24: number;
  PipelineDiameter24: string;
  LengthField24: number;
  GroundFloor24: number;
  FinalFloor24: number;
  FloorHeight24: number;
  AcceptableOffsetOfTheInsetPoints24: number;

  Region25: number;
  PipelineDiameter25: string;
  LengthField25: number;
  GroundFloor25: number;
  FinalFloor25: number;
  FloorHeight25: number;
  AcceptableOffsetOfTheInsetPoints25: number;

  Region26: number;
  PipelineDiameter26: string;
  LengthField26: number;
  GroundFloor26: number;
  FinalFloor26: number;
  FloorHeight26: number;
  AcceptableOffsetOfTheInsetPoints26: number;

  Region27: number;
  PipelineDiameter27: string;
  LengthField27: number;
  GroundFloor27: number;
  FinalFloor27: number;
  FloorHeight27: number;
  AcceptableOffsetOfTheInsetPoints27: number;

  Region28: number;
  PipelineDiameter28: string;
  LengthField28: number;
  GroundFloor28: number;
  FinalFloor28: number;
  FloorHeight28: number;
  AcceptableOffsetOfTheInsetPoints28: number;

  Region29: number;
  PipelineDiameter29: string;
  LengthField29: number;
  GroundFloor29: number;
  FinalFloor29: number;
  FloorHeight29: number;
  AcceptableOffsetOfTheInsetPoints29: number;

  Region30: number;
  PipelineDiameter30: string;
  LengthField30: number;
  GroundFloor30: number;
  FinalFloor30: number;
  FloorHeight30: number;
  AcceptableOffsetOfTheInsetPoints30: number;

  setСonfiguration_Control_MyForm_VerticalPipelineParameters: number;

  lowerSelfCompensationSection_Pipeline_Configuration: boolean; //checkBox1



  metodOn_CalculateLoad_VerticalPipelineParameters: boolean;
  metodOn_optimizeProject_VerticalPipelineParameters: boolean = false;


}
