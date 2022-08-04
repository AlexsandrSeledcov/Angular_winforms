import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Self, Inject } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { VerticalPipelineParameters } from '../vertical-pipeline-parameters.component/vertical-pipeline-parameters.component';

import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-pipeline-сonfiguration',
  templateUrl: './pipeline-сonfiguration.component.html',
  styleUrls: ['./pipeline-сonfiguration.component.css']
})
export class PipelineConfigurationComponent {
  public forecasts: WeatherForecast[];
  upperSelfCompensationSection: boolean = false;
  lowerSelfCompensationSection: boolean = false;
  myForm: FormGroup;
  

  //check()
  data:          number;
  bad_params:    number = 0;
  row:           number = 0;
  j:             number = 0;
  jmax:          number;
  error_message: string = "успешно";
  dn:            string;
  errdn:         number;
  temp:          number;
  dL:            number;
  stop:          number;
  length:        number;
  tmp:           number;
  cur_shift:     number;
  err:           number;

  tempString:    string;
  lengthString:  string;
  tmpString:     string;
  jjString:      string;
  VerticalPipelineParameters: VerticalPipelineParameters;


  //autoSelect()
  tmpjmax: number;
  jj:      number;

  //manuallySetTheLowerSelfCompensationSection()
  val: boolean;

  //addResult() 
  showAddResult2: boolean = false;
  showAddResult3: boolean = false;
  showAddResult4: boolean = false;
  showAddResult5: boolean = false;
  showAddResult6: boolean = false;
  showAddResult7: boolean = false;
  showAddResult8: boolean = false;
  showAddResult9: boolean = false;
  showAddResult10: boolean = false;
  showAddResult11: boolean = false;
  showAddResult12: boolean = false;
  showAddResult13: boolean = false;
  showAddResult14: boolean = false;
  showAddResult15: boolean = false;
  showAddResult16: boolean = false;
  showAddResult17: boolean = false;
  showAddResult18: boolean = false;
  showAddResult19: boolean = false;
  showAddResult20: boolean = false;
  showAddResult21: boolean = false;
  showAddResult22: boolean = false;
  showAddResult23: boolean = false;
  showAddResult24: boolean = false;
  showAddResult25: boolean = false;
  showAddResult26: boolean = false;
  showAddResult27: boolean = false;
  showAddResult28: boolean = false;
  showAddResult29: boolean = false;
  showAddResult30: boolean = false;

  showBtnAddResult2: boolean = true;
  showBtnAddResult3: boolean = false;
  showBtnAddResult4: boolean = false;
  showBtnAddResult5: boolean = false;
  showBtnAddResult6: boolean = false;
  showBtnAddResult7: boolean = false;
  showBtnAddResult8: boolean = false;
  showBtnAddResult9: boolean = false;
  showBtnAddResult10: boolean = false;
  showBtnAddResult11: boolean = false;
  showBtnAddResult12: boolean = false;
  showBtnAddResult13: boolean = false;
  showBtnAddResult14: boolean = false;
  showBtnAddResult15: boolean = false;
  showBtnAddResult16: boolean = false;
  showBtnAddResult17: boolean = false;
  showBtnAddResult18: boolean = false;
  showBtnAddResult19: boolean = false;
  showBtnAddResult20: boolean = false;
  showBtnAddResult21: boolean = false;
  showBtnAddResult22: boolean = false;
  showBtnAddResult23: boolean = false;
  showBtnAddResult24: boolean = false;
  showBtnAddResult25: boolean = false;
  showBtnAddResult26: boolean = false;
  showBtnAddResult27: boolean = false;
  showBtnAddResult28: boolean = false;
  showBtnAddResult29: boolean = false;
  showBtnAddResult30: boolean = false;



  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private formBuilder: FormBuilder, private router: Router, private dataService: DataService) {
    this.myForm = formBuilder.group({                                       //                                   [ WinForm ]
        "Region1": [""],                                                       // Участок                           []
      "PipelineDiameter1": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField1": [""],                                                  // Длина, м                          []
      "GroundFloor1": [""],                                                  // Начальный этаж                    []
      "FinalFloor1": [""],                                                   // Конечный этаж                     []
      "FloorHeight1": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints1": [""],                             // Допустимое смещение точек врезки  []
        "Region2": [""],                                                      // Участок                           []
      "PipelineDiameter2": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField2": [""],                                                 // Длина, м                          []
      "GroundFloor2": [""],                                                 // Начальный этаж                    []
      "FinalFloor2": [""],                                                  // Конечный этаж                     []
      "FloorHeight2": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints2": [""],                            // Допустимое смещение точек врезки  []
        "Region3": [""],                                                       // Участок                           []
      "PipelineDiameter3": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField3": [""],                                                  // Длина, м                          []
      "GroundFloor3": [""],                                                  // Начальный этаж                    []
      "FinalFloor3": [""],                                                   // Конечный этаж                     []
      "FloorHeight3": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints3": [""],                             // Допустимое смещение точек врезки  []
        "Region4": [""],                                                      // Участок                           []
      "PipelineDiameter4": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField4": [""],                                                 // Длина, м                          []
      "GroundFloor4": [""],                                                 // Начальный этаж                    []
      "FinalFloor4": [""],                                                  // Конечный этаж                     []
      "FloorHeight4": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints4": [""],                            // Допустимое смещение точек врезки  []     
        "Region5": [""],                                                       // Участок                           []
      "PipelineDiameter5": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField5": [""],                                                  // Длина, м                          []
      "GroundFloor5": [""],                                                  // Начальный этаж                    []
      "FinalFloor5": [""],                                                   // Конечный этаж                     []
      "FloorHeight5": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints5": [""],                             // Допустимое смещение точек врезки  []
        "Region6": [""],                                                      // Участок                           []
      "PipelineDiameter6": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField6": [""],                                                 // Длина, м                          []
      "GroundFloor6": [""],                                                 // Начальный этаж                    []
      "FinalFloor6": [""],                                                  // Конечный этаж                     []
      "FloorHeight6": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints6": [""],                            // Допустимое смещение точек врезки  []     
        "Region7": [""],                                                      // Участок                           []
      "PipelineDiamete7": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField7": [""],                                                  // Длина, м                          []
      "GroundFloor7": [""],                                                  // Начальный этаж                    []
      "FinalFloor7": [""],                                                   // Конечный этаж                     []
      "FloorHeight7": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints7": [""],                             // Допустимое смещение точек врезки  []
        "Region8": [""],                                                      // Участок                           []
      "PipelineDiameter8": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField8": [""],                                                 // Длина, м                          []
      "GroundFloor8": [""],                                                 // Начальный этаж                    []
      "FinalFloor8": [""],                                                  // Конечный этаж                     []
      "FloorHeight8": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints8": [""],                            // Допустимое смещение точек врезки  []     
        "Region9": [""],                                                      // Участок                           []
      "PipelineDiameter9": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField9": [""],                                                  // Длина, м                          []
      "GroundFloor9": [""],                                                  // Начальный этаж                    []
      "FinalFloor9": [""],                                                   // Конечный этаж                     []
      "FloorHeight9": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints9": [""],                             // Допустимое смещение точек врезки  []
        "Region10": [""],                                                      // Участок                           []
      "PipelineDiameter10": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField10": [""],                                                 // Длина, м                          []
      "GroundFloor10": [""],                                                 // Начальный этаж                    []
      "FinalFloor10": [""],                                                  // Конечный этаж                     []
      "FloorHeight10": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints10": [""],
        "Region11": [""],                                                      // Участок                           []
      "PipelineDiameter11": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField11": [""],                                                  // Длина, м                          []
      "GroundFloor11": [""],                                                  // Начальный этаж                    []
      "FinalFloor11": [""],                                                   // Конечный этаж                     []
      "FloorHeight11": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints11": [""],                             // Допустимое смещение точек врезки  []
        "Region12": [""],                                                      // Участок                           []
      "PipelineDiameter12": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField12": [""],                                                 // Длина, м                          []
      "GroundFloor12": [""],                                                 // Начальный этаж                    []
      "FinalFloor12": [""],                                                  // Конечный этаж                     []
      "FloorHeight12": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints12": [""],                            // Допустимое смещение точек врезки  []     
        "Region13": [""],                                                      // Участок                           []
      "PipelineDiameter13": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField13": [""],                                                  // Длина, м                          []
      "GroundFloor13": [""],                                                  // Начальный этаж                    []
      "FinalFloor13": [""],                                                   // Конечный этаж                     []
      "FloorHeight13": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints13": [""],                             // Допустимое смещение точек врезки  []
        "Region14": [""],                                                      // Участок                           []
      "PipelineDiameter14": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField14": [""],                                                 // Длина, м                          []
      "GroundFloor14": [""],                                                 // Начальный этаж                    []
      "FinalFloor14": [""],                                                  // Конечный этаж                     []
      "FloorHeight14": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints14": [""],                            // Допустимое смещение точек врезки  []    
        "Region15": [""],                                                      // Участок                           []
      "PipelineDiameter15": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField15": [""],                                                  // Длина, м                          []
      "GroundFloor15": [""],                                                  // Начальный этаж                    []
      "FinalFloor15": [""],                                                   // Конечный этаж                     []
      "FloorHeight15": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints15": [""],                             // Допустимое смещение точек врезки  []
        "Region16": [""],                                                      // Участок                           []
      "PipelineDiameter16": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField16": [""],                                                 // Длина, м                          []
      "GroundFloor16": [""],                                                 // Начальный этаж                    []
      "FinalFloor16": [""],                                                  // Конечный этаж                     []
      "FloorHeight16": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints16": [""],                            // Допустимое смещение точек врезки  []    
        "Region17": [""],                                                      // Участок                           []
      "PipelineDiameter17": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField17": [""],                                                  // Длина, м                          []
      "GroundFloor17": [""],                                                  // Начальный этаж                    []
      "FinalFloor17": [""],                                                   // Конечный этаж                     []
      "FloorHeight17": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints17": [""],                             // Допустимое смещение точек врезки  []
        "Region18": [""],                                                      // Участок                           []
      "PipelineDiameter18": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField18": [""],                                                 // Длина, м                          []
      "GroundFloor18": [""],                                                 // Начальный этаж                    []
      "FinalFloor18": [""],                                                  // Конечный этаж                     []
      "FloorHeight18": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints18": [""],                            // Допустимое смещение точек врезки  []    
        "Region19": [""],                                                      // Участок                           []
      "PipelineDiameter19": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField19": [""],                                                  // Длина, м                          []
      "GroundFloor19": [""],                                                  // Начальный этаж                    []
      "FinalFloor19": [""],                                                   // Конечный этаж                     []
      "FloorHeight19": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints19": [""],                             // Допустимое смещение точек врезки  []
        "Region20": [""],                                                      // Участок                           []
      "PipelineDiameter21": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField21": [""],                                                 // Длина, м                          []
      "GroundFloor21": [""],                                                 // Начальный этаж                    []
      "FinalFloor21": [""],                                                  // Конечный этаж                     []
      "FloorHeight21": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints21": [""],                            // Допустимое смещение точек врезки  []    
      "Region21": [""],                                                      // Участок                           []
      "PipelineDiameter22": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField22": [""],                                                  // Длина, м                          []
      "GroundFloor22": [""],                                                  // Начальный этаж                    []
      "FinalFloor22": [""],                                                   // Конечный этаж                     []
      "FloorHeight22": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints22": [""],                             // Допустимое смещение точек врезки  []
        "Region23": [""],                                                      // Участок                           []
      "PipelineDiameter23": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField23": [""],                                                 // Длина, м                          []
      "GroundFloor23": [""],                                                 // Начальный этаж                    []
      "FinalFloor23": [""],                                                  // Конечный этаж                     []
      "FloorHeight23": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints23": [""],                            // Допустимое смещение точек врезки  []    
        "Region24": [""],                                                      // Участок                           []
      "PipelineDiameter24": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField24": [""],                                                  // Длина, м                          []
      "GroundFloor24": [""],                                                  // Начальный этаж                    []
      "FinalFloor24": [""],                                                   // Конечный этаж                     []
      "FloorHeight24": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints24": [""],                             // Допустимое смещение точек врезки  []
        "Region25": [""],                                                      // Участок                           []
      "PipelineDiameter25": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField25": [""],                                                 // Длина, м                          []
      "GroundFloor25": [""],                                                 // Начальный этаж                    []
      "FinalFloor25": [""],                                                  // Конечный этаж                     []
      "FloorHeight25": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints25": [""],                            // Допустимое смещение точек врезки  []   
        "Region26": [""],                                                      // Участок                           []
      "PipelineDiameter26": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField26": [""],                                                  // Длина, м                          []
      "GroundFloor26": [""],                                                  // Начальный этаж                    []
      "FinalFloor26": [""],                                                   // Конечный этаж                     []
      "FloorHeight26": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints26": [""],                             // Допустимое смещение точек врезки  []
        "Region27": [""],                                                      // Участок                           []
      "PipelineDiameter27": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField27": [""],                                                 // Длина, м                          []
      "GroundFloor27": [""],                                                 // Начальный этаж                    []
      "FinalFloor27": [""],                                                  // Конечный этаж                     []
      "FloorHeight27": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints27": [""],                            // Допустимое смещение точек врезки  []               
        "Region28": [""],                                                      // Участок                           []
      "PipelineDiameter28": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField28": [""],                                                  // Длина, м                          []
      "GroundFloor28": [""],                                                  // Начальный этаж                    []
      "FinalFloor28": [""],                                                   // Конечный этаж                     []
      "FloorHeight28": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints28": [""],                             // Допустимое смещение точек врезки  []
        "Region29": [""],                                                      // Участок                           []
      "PipelineDiameter29": [""],                                            // Диаметр трубопровода              []                                                
      "LengthField29": [""],                                                 // Длина, м                          []
      "GroundFloor29": [""],                                                 // Начальный этаж                    []
      "FinalFloor29": [""],                                                  // Конечный этаж                     []
      "FloorHeight29": [""],                                                 // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints29": [""],                            // Допустимое смещение точек врезки  []                                                                              
        "Region30": [""],                                                      // Участок                           []
      "PipelineDiameter30": [""],                                             // Диаметр трубопровода              []                                                
      "LengthField30": [""],                                                  // Длина, м                          []
      "GroundFloor30": [""],                                                  // Начальный этаж                    []
      "FinalFloor30": [""],                                                   // Конечный этаж                     []
      "FloorHeight30": [""],                                                  // Высота этажа                      []
      "AcceptableOffsetOfTheInsetPoints30": [""],                             // Допустимое смещение точек врезки  []
      "totalNumberOfFloors": [""],                                          // общие число этажей                [textBox8]
      "status":                         [""],                               // статус                            [textBox7]                                                
      "Length1":                        [""],                               // Длина, м                          [textBox1]
      "Length2":                        [""],                               // Длина, м                          [textBox2]
      "Elongation1":                    [""],                               // Удленнение, мм                    [textBox3]
      "Elongation2":                    [""],                               // Удленнение, мм                    [textBox4]
      "floorInstallationFixedSupport1": [""],                               // Этаж установки неподвижной опоры  [textBox5]
      "floorInstallationFixedSupport2": [""],                               // Этаж установки неподвижной опоры  [textBox6]
    });
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {

    



    (document.getElementById('Region1') as any).value = this.dataService.Region1;
    (document.getElementById('PipelineDiameter1') as any).value = this.dataService.PipelineDiameter1;
    (document.getElementById('LengthField1') as any).value = this.dataService.LengthField1;
    (document.getElementById('GroundFloor1') as any).value = this.dataService.GroundFloor1;
    (document.getElementById('FinalFloor1') as any).value = this.dataService.FinalFloor1;
    (document.getElementById('FloorHeight1') as any).value = this.dataService.FloorHeight1;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints1') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints1;

    (document.getElementById('Region2') as any).value = this.dataService.Region2;
    (document.getElementById('PipelineDiameter2') as any).value = this.dataService.dn;
    (document.getElementById('LengthField2') as any).value = this.dataService.PipelineDiameter2;
    (document.getElementById('GroundFloor2') as any).value = this.dataService.GroundFloor2;
    (document.getElementById('FinalFloor2') as any).value = this.dataService.FinalFloor2;
    (document.getElementById('FloorHeight2') as any).value = this.dataService.FloorHeight2;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints2') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints2;

    (document.getElementById('Region3') as any).value = this.dataService.Region3;
    (document.getElementById('PipelineDiameter3') as any).value = this.dataService.PipelineDiameter3;
    (document.getElementById('LengthField3') as any).value = this.dataService.LengthField3;
    (document.getElementById('GroundFloor3') as any).value = this.dataService.GroundFloor3;
    (document.getElementById('FinalFloor3') as any).value = this.dataService.FinalFloor3;
    (document.getElementById('FloorHeight3') as any).value = this.dataService.FloorHeight3;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints3') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints3;

    (document.getElementById('Region4') as any).value = this.dataService.Region4;
    (document.getElementById('PipelineDiameter4') as any).value = this.dataService.PipelineDiameter4;
    (document.getElementById('LengthField4') as any).value = this.dataService.LengthField4;
    (document.getElementById('GroundFloor4') as any).value = this.dataService.GroundFloor4;
    (document.getElementById('FinalFloor4') as any).value = this.dataService.FinalFloor4;
    (document.getElementById('FloorHeight4') as any).value = this.dataService.FloorHeight4;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints4') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints4;

    (document.getElementById('Region5') as any).value = this.dataService.Region5;
    (document.getElementById('PipelineDiameter5') as any).value = this.dataService.PipelineDiameter5;
    (document.getElementById('LengthField5') as any).value = this.dataService.LengthField5;
    (document.getElementById('GroundFloor5') as any).value = this.dataService.GroundFloor5;
    (document.getElementById('FinalFloor5') as any).value = this.dataService.FinalFloor5;
    (document.getElementById('FloorHeight5') as any).value = this.dataService.FloorHeight5;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints5') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints5;

    (document.getElementById('Region6') as any).value = this.dataService.Region6;
    (document.getElementById('PipelineDiameter6') as any).value = this.dataService.PipelineDiameter6;
    (document.getElementById('LengthField6') as any).value = this.dataService.LengthField6;
    (document.getElementById('GroundFloor6') as any).value = this.dataService.GroundFloor6;
    (document.getElementById('FinalFloor6') as any).value = this.dataService.FinalFloor6;
    (document.getElementById('FloorHeight6') as any).value = this.dataService.FloorHeight6;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints6') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints6;

    (document.getElementById('Region7') as any).value = this.dataService.Region7;
    (document.getElementById('PipelineDiameter7') as any).value = this.dataService.PipelineDiameter7;
    (document.getElementById('LengthField7') as any).value = this.dataService.LengthField7;
    (document.getElementById('GroundFloor7') as any).value = this.dataService.GroundFloor7;
    (document.getElementById('FinalFloor7') as any).value = this.dataService.FinalFloor7;
    (document.getElementById('FloorHeight7') as any).value = this.dataService.FloorHeight7;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints7') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints7;

    (document.getElementById('Region8') as any).value = this.dataService.Region8;
    (document.getElementById('PipelineDiameter8') as any).value = this.dataService.PipelineDiameter8;
    (document.getElementById('LengthField8') as any).value = this.dataService.LengthField8;
    (document.getElementById('GroundFloor8') as any).value = this.dataService.GroundFloor8;
    (document.getElementById('FinalFloor8') as any).value = this.dataService.FinalFloor8;
    (document.getElementById('FloorHeight8') as any).value = this.dataService.FloorHeight8;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints8') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints8;

    (document.getElementById('Region9') as any).value = this.dataService.Region9;
    (document.getElementById('PipelineDiameter9') as any).value = this.dataService.PipelineDiameter9;
    (document.getElementById('LengthField9') as any).value = this.dataService.LengthField9;
    (document.getElementById('GroundFloor9') as any).value = this.dataService.GroundFloor9;
    (document.getElementById('FinalFloor9') as any).value = this.dataService.FinalFloor9;
    (document.getElementById('FloorHeight9') as any).value = this.dataService.FloorHeight9;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints9') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints9;

    (document.getElementById('Region10') as any).value = this.dataService.Region10;
    (document.getElementById('PipelineDiameter10') as any).value = this.dataService.PipelineDiameter10;
    (document.getElementById('LengthField10') as any).value = this.dataService.LengthField10;
    (document.getElementById('GroundFloor10') as any).value = this.dataService.GroundFloor10;
    (document.getElementById('FinalFloor10') as any).value = this.dataService.FinalFloor10;
    (document.getElementById('FloorHeight10') as any).value = this.dataService.FloorHeight10;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints10') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints10;

    (document.getElementById('Region11') as any).value = this.dataService.Region11;
    (document.getElementById('PipelineDiameter11') as any).value = this.dataService.PipelineDiameter11;
    (document.getElementById('LengthField11') as any).value = this.dataService.LengthField11;
    (document.getElementById('GroundFloor11') as any).value = this.dataService.GroundFloor11;
    (document.getElementById('FinalFloor11') as any).value = this.dataService.FinalFloor21;
    (document.getElementById('FloorHeight11') as any).value = this.dataService.FloorHeight11;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints11') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints11;

    (document.getElementById('Region12') as any).value = this.dataService.Region12;
    (document.getElementById('PipelineDiameter12') as any).value = this.dataService.PipelineDiameter12;
    (document.getElementById('LengthField12') as any).value = this.dataService.LengthField12;
    (document.getElementById('GroundFloor12') as any).value = this.dataService.GroundFloor12;
    (document.getElementById('FinalFloor12') as any).value = this.dataService.FinalFloor12;
    (document.getElementById('FloorHeight12') as any).value = this.dataService.FloorHeight12;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints12') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints12;

    (document.getElementById('Region13') as any).value = this.dataService.Region13;
    (document.getElementById('PipelineDiameter13') as any).value = this.dataService.PipelineDiameter13;
    (document.getElementById('LengthField13') as any).value = this.dataService.LengthField13;
    (document.getElementById('GroundFloor13') as any).value = this.dataService.GroundFloor13;
    (document.getElementById('FinalFloor13') as any).value = this.dataService.FinalFloor13;
    (document.getElementById('FloorHeight13') as any).value = this.dataService.FloorHeight13;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints13') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints13;

    (document.getElementById('Region14') as any).value = this.dataService.Region14;
    (document.getElementById('PipelineDiameter14') as any).value = this.dataService.PipelineDiameter14;
    (document.getElementById('LengthField14') as any).value = this.dataService.LengthField14;
    (document.getElementById('GroundFloor14') as any).value = this.dataService.GroundFloor14;
    (document.getElementById('FinalFloor14') as any).value = this.dataService.FinalFloor14;
    (document.getElementById('FloorHeight14') as any).value = this.dataService.FloorHeight14;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints14') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints14;

    (document.getElementById('Region15') as any).value = this.dataService.Region15;
    (document.getElementById('PipelineDiameter15') as any).value = this.dataService.PipelineDiameter15;
    (document.getElementById('LengthField15') as any).value = this.dataService.LengthField15;
    (document.getElementById('GroundFloor15') as any).value = this.dataService.GroundFloor15;
    (document.getElementById('FinalFloor15') as any).value = this.dataService.FinalFloor15;
    (document.getElementById('FloorHeight15') as any).value = this.dataService.FloorHeight15;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints15') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints15;

    (document.getElementById('Region16') as any).value = this.dataService.Region16;
    (document.getElementById('PipelineDiameter16') as any).value = this.dataService.PipelineDiameter16;
    (document.getElementById('LengthField16') as any).value = this.dataService.LengthField16;
    (document.getElementById('GroundFloor16') as any).value = this.dataService.GroundFloor16;
    (document.getElementById('FinalFloor16') as any).value = this.dataService.FinalFloor16;
    (document.getElementById('FloorHeight16') as any).value = this.dataService.FloorHeight16;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints16') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints16;

    (document.getElementById('Region17') as any).value = this.dataService.Region17;
    (document.getElementById('PipelineDiameter17') as any).value = this.dataService.PipelineDiameter17;
    (document.getElementById('LengthField17') as any).value = this.dataService.LengthField17;
    (document.getElementById('GroundFloor17') as any).value = this.dataService.GroundFloor17;
    (document.getElementById('FinalFloor17') as any).value = this.dataService.FinalFloor17;
    (document.getElementById('FloorHeight17') as any).value = this.dataService.FloorHeight17;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints17') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints17;

    (document.getElementById('Region18') as any).value = this.dataService.Region18;
    (document.getElementById('PipelineDiameter18') as any).value = this.dataService.PipelineDiameter18;
    (document.getElementById('LengthField18') as any).value = this.dataService.LengthField18;
    (document.getElementById('GroundFloor18') as any).value = this.dataService.GroundFloor18;
    (document.getElementById('FinalFloor18') as any).value = this.dataService.FinalFloor18;
    (document.getElementById('FloorHeight18') as any).value = this.dataService.FloorHeight18;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints18') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints18;

    (document.getElementById('Region19') as any).value = this.dataService.Region19;
    (document.getElementById('PipelineDiameter19') as any).value = this.dataService.PipelineDiameter19;
    (document.getElementById('LengthField19') as any).value = this.dataService.LengthField19;
    (document.getElementById('GroundFloor19') as any).value = this.dataService.GroundFloor19;
    (document.getElementById('FinalFloor19') as any).value = this.dataService.FinalFloor19;
    (document.getElementById('FloorHeight19') as any).value = this.dataService.FloorHeight19;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints19') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints19;

    (document.getElementById('Region20') as any).value = this.dataService.Region20;
    (document.getElementById('PipelineDiameter20') as any).value = this.dataService.PipelineDiameter20;
    (document.getElementById('LengthField20') as any).value = this.dataService.LengthField20;
    (document.getElementById('GroundFloor20') as any).value = this.dataService.GroundFloor20;
    (document.getElementById('FinalFloor20') as any).value = this.dataService.FinalFloor20;
    (document.getElementById('FloorHeight20') as any).value = this.dataService.FloorHeight20;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints20') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints20;

    (document.getElementById('Region21') as any).value = this.dataService.Region21;
    (document.getElementById('PipelineDiameter21') as any).value = this.dataService.PipelineDiameter21;
    (document.getElementById('LengthField21') as any).value = this.dataService.LengthField21;
    (document.getElementById('GroundFloor21') as any).value = this.dataService.GroundFloor21;
    (document.getElementById('FinalFloor21') as any).value = this.dataService.FinalFloor21;
    (document.getElementById('FloorHeight21') as any).value = this.dataService.FloorHeight21;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints21') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints21;

    (document.getElementById('Region22') as any).value = this.dataService.Region22;
    (document.getElementById('PipelineDiameter22') as any).value = this.dataService.PipelineDiameter22;
    (document.getElementById('LengthField22') as any).value = this.dataService.LengthField22;
    (document.getElementById('GroundFloor22') as any).value = this.dataService.GroundFloor22;
    (document.getElementById('FinalFloor22') as any).value = this.dataService.FinalFloor22;
    (document.getElementById('FloorHeight22') as any).value = this.dataService.FloorHeight22;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints22') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints22;

    (document.getElementById('Region23') as any).value = this.dataService.Region23;
    (document.getElementById('PipelineDiameter23') as any).value = this.dataService.PipelineDiameter23;
    (document.getElementById('LengthField23') as any).value = this.dataService.LengthField23;
    (document.getElementById('GroundFloor23') as any).value = this.dataService.GroundFloor23;
    (document.getElementById('FinalFloor23') as any).value = this.dataService.FinalFloor23;
    (document.getElementById('FloorHeight23') as any).value = this.dataService.FloorHeight23;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints23') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints23;

    (document.getElementById('Region24') as any).value = this.dataService.Region24;
    (document.getElementById('PipelineDiameter24') as any).value = this.dataService.PipelineDiameter24;
    (document.getElementById('LengthField24') as any).value = this.dataService.LengthField24;
    (document.getElementById('GroundFloor24') as any).value = this.dataService.GroundFloor24;
    (document.getElementById('FinalFloor24') as any).value = this.dataService.FinalFloor24;
    (document.getElementById('FloorHeight24') as any).value = this.dataService.FloorHeight24;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints24') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints24;

    (document.getElementById('Region25') as any).value = this.dataService.Region25;
    (document.getElementById('PipelineDiameter25') as any).value = this.dataService.PipelineDiameter25;
    (document.getElementById('LengthField25') as any).value = this.dataService.LengthField25;
    (document.getElementById('GroundFloor25') as any).value = this.dataService.GroundFloor25;
    (document.getElementById('FinalFloor25') as any).value = this.dataService.FinalFloor25;
    (document.getElementById('FloorHeight25') as any).value = this.dataService.FloorHeight25;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints25') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints25;

    (document.getElementById('Region26') as any).value = this.dataService.Region26;
    (document.getElementById('PipelineDiameter26') as any).value = this.dataService.PipelineDiameter26;
    (document.getElementById('LengthField26') as any).value = this.dataService.LengthField26;
    (document.getElementById('GroundFloor26') as any).value = this.dataService.GroundFloor26;
    (document.getElementById('FinalFloor26') as any).value = this.dataService.FinalFloor26;
    (document.getElementById('FloorHeight26') as any).value = this.dataService.FloorHeight26;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints26') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints26;

    (document.getElementById('Region27') as any).value = this.dataService.Region27;
    (document.getElementById('PipelineDiameter27') as any).value = this.dataService.PipelineDiameter27;
    (document.getElementById('LengthField27') as any).value = this.dataService.LengthField27;
    (document.getElementById('GroundFloor27') as any).value = this.dataService.GroundFloor27;
    (document.getElementById('FinalFloor27') as any).value = this.dataService.FinalFloor27;
    (document.getElementById('FloorHeight27') as any).value = this.dataService.FloorHeight27;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints27') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints27;

    (document.getElementById('Region28') as any).value = this.dataService.Region28;
    (document.getElementById('PipelineDiameter28') as any).value = this.dataService.PipelineDiameter28;
    (document.getElementById('LengthField28') as any).value = this.dataService.LengthField28;
    (document.getElementById('GroundFloor28') as any).value = this.dataService.GroundFloor28;
    (document.getElementById('FinalFloor28') as any).value = this.dataService.FinalFloor28;
    (document.getElementById('FloorHeight28') as any).value = this.dataService.FloorHeight28;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints28') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints28;

    (document.getElementById('Region29') as any).value = this.dataService.Region29;
    (document.getElementById('PipelineDiameter29') as any).value = this.dataService.PipelineDiameter29;
    (document.getElementById('LengthField29') as any).value = this.dataService.LengthField29;
    (document.getElementById('GroundFloor29') as any).value = this.dataService.GroundFloor29;
    (document.getElementById('FinalFloor29') as any).value = this.dataService.FinalFloor29;
    (document.getElementById('FloorHeight29') as any).value = this.dataService.FloorHeight29;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints29') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints29;

    (document.getElementById('Region30') as any).value = this.dataService.Region30;
    (document.getElementById('PipelineDiameter30') as any).value = this.dataService.PipelineDiameter30;
    (document.getElementById('LengthField30') as any).value = this.dataService.LengthField30;
    (document.getElementById('GroundFloor30') as any).value = this.dataService.GroundFloor30;
    (document.getElementById('FinalFloor30') as any).value = this.dataService.FinalFloor30;
    (document.getElementById('FloorHeight30') as any).value = this.dataService.FloorHeight30;
    (document.getElementById('AcceptableOffsetOfTheInsetPoints30') as any).value = this.dataService.AcceptableOffsetOfTheInsetPoints30;

    this.lowerSelfCompensationSection = this.dataService.lowerSelfCompensationSection_Pipeline_Configuration; //checkBox1
    
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

      }

      if (this.dataService.metodOn_optimizeProject_VerticalPipelineParameters) {

        if (this.dataService.enable_lower_comp) {
          if (this.dataService.lower_automatic < 1)
            this.lowerSelfCompensationSection = true;

          (document.getElementById('Length1') as any).value = this.dataService.lower_length;
          (document.getElementById('Elongation1') as any).value = this.dataService.lower_floor;
          (document.getElementById('floorInstallationFixedSupport1') as any).value = this.dataService.lower_extension;
        }

        if (this.dataService.enable_higher_comp) {
          if (this.dataService.higher_automatic < 1)
            this.upperSelfCompensationSection = true;


          (document.getElementById('Length2') as any).value = this.dataService.higher_length;
          (document.getElementById('Elongation2') as any).value = this.dataService.higher_floor;
          (document.getElementById('floorInstallationFixedSupport2') as any).value = this.dataService.higher_extension;
        }

        (document.getElementById('totalNumberOfFloors') as any).value = this.dataService.num_floors;
      }
    }
  }

  /// This metod run click button "Проверить"
  ///
  ///
  check() {
    this.dataService.saved = 0;
    while (this.row == 0)
    {
              if (this.myForm.controls.Region.value == null)
             {
                  this.row = 1;
             }
             else
                {
                try {
                  this.data = parseInt(this.myForm.controls.Region.value);
                }
                catch { this.bad_params++; }
          this.j++;
        }
                    }
           this.jmax = this.j;
           this.dataService.jmax_h = this.jmax;
           if (this.jmax > 0) {

          for (this.j = 0; this.j < this.jmax; this.j++) {
            this.dn = "";
            this.errdn = 0;
            try { this.dataService.idx[this.j] = parseInt(this.myForm.controls.Region.value.toString()); }
            catch { this.bad_params++; }
            try { this.dn = this.myForm.controls.PipelineDiameter.value.toString(); }
            catch { this.bad_params++; this.errdn = 1; }
            try { this.dataService.Start_floor[this.j] = parseInt(this.myForm.controls.GroundFloor.value.toString()); }
            catch { this.bad_params++; }
            try { this.dataService.End_floor[j] = parseInt(this.myForm.controls.FinalFloor.value.toString()); }
            catch { this.bad_params++; }
            try { this.dataService.Floor_height[j] = parseInt(this.myForm.controls.FloorHeight.value.toString()); }
            catch { this.bad_params++; }
            try { this.dataService.Shift[j] = parseInt(this.myForm.controls.AcceptableOffsetOfTheInsetPoints.value.toString()); }
            catch { this.bad_params++; }

            if (this.bad_params == 0) {
              if (this.dataService.Shift[this.j] < 15) {
                this.dataService.Shift[this.j] = 15;
                  this.myForm.controls.AcceptableOffsetOfTheInsetPoints.value.toString = "15";
              }
            }

            if (this.bad_params == 0) {
              this.dataService.LengthField1 = (1 + this.dataService.End_floorNumber - this.dataService.Start_floorNumber) * this.dataService.Floor_heightNumber;
              this.myForm.controls.Length.value.toString = this.dataService.Length.toString();
            }

            if (this.errdn == 0) {
              switch (this.dn) {
                case ("DN15"):
                  this.dataService.DN_index[this.j] = 0;
                  break;

                case ("DN20"):
                  this.dataService.DN_index[this.j] = 1;
                  break;

                case ("DN25"):
                  this.dataService.DN_index[this.j] = 2;
                  break;

                case ("DN32"):
                  this.dataService.DN_index[this.j] = 3;
                  break;

                case ("DN40"):
                  this.dataService.DN_index[this.j] = 4;
                  break;

                case ("DN50"):
                  this.dataService.DN_index[this.j] = 5;
                  break;

                case ("DN65"):
                  this.dataService.DN_index[this.j] = 6;
                  break;

                case ("DN80"):
                  this.dataService.DN_index[this.j] = 7;
                  break;

                case ("DN100"):
                  this.dataService.DN_index[this.j] = 8;
                  break;

                case ("DN125"):
                  this.dataService.DN_index[this.j] = 9;
                  break;

                case ("DN150"):
                  this.dataService.DN_index[this.j] = 10;
                  break;

                case ("DN200"):
                  this.dataService.DN_index[this.j] = 11;
                  break;
              }
            }

          }

        }
           else {
           this.bad_params++;
        }

    if (this.dataService.enable_lower_comp) {
      try { this.dataService.lower_length = parseInt(this.myForm.controls.Length1.value); } 
          catch { this.bad_params++; }

        if (this.bad_params == 0) {
          this.temp = this.dataService.C * this.dataService.lower_length * (this.dataService.Tmax - this.dataService.Tmin) * this.dataService.k;

            this.tempString = this.temp.toString();
            (document.getElementById('Elongation1') as any).value = this.tempString;
            this.dataService.lower_extension = this.temp;

          try { this.dataService.lower_floor = parseInt(this.myForm.controls.floorInstallationFixedSupport1.value); }
            catch { this.bad_params++; }
          }
        }
        else {
          this.dataService.lower_automatic = 1;
          this.dL = 0;
          this.stop = 0;
          this.length = 0;
          this.tmp = 0;
          this.cur_shift = 0;

          for (this.j = 0; this.j < this.jmax; this.j++) {
            for (var jj = this.dataService.Start_floor[j]; jj <= this.dataService.End_floor[j]; jj++)
            {
              this.length += this.dataService.Floor_height[j];
              this.tmp = this.dataService.C * this.dataService.Floor_height[j] * (this.dataService.Tmax - this.dataService.Tmin) * this.dataService.k;
              this.dL += this.tmp;

              if (this.dL > this.dataService.Shift[j]) {
                this.length = this.length - this.dataService.Floor_height[j];
                //main.enable_lower_comp = true;
                this.dataService.lower_length = this.length;
                this.tmp = this.dL - this.tmp;
                this.dataService.lower_extension = this.tmp;
                this.dataService.lower_floor = jj;

                this.lengthString = this.length.toString();
                (document.getElementById('Length2') as any).value = this.lengthString;

                this.tmpString = this.tmp.toString();
                (document.getElementById('Elongation2') as any).value = this.tmpString;

                this.jjString = jj.toString();
                (document.getElementById('floorInstallationFixedSupport2') as any).value = this.jjString;

                this.dataService.j_l = j;
                this.dataService.jj_l = jj;

                this.stop = 1;
                break;
              }
            }
            if (this.stop > 0)
              break;
          }
        }

    if (this.dataService.enable_higher_comp) {
      try { this.dataService.higher_length = parseInt(this.myForm.controls.Length2.value); }
          catch { this.bad_params++; }

          if (this.bad_params == 0) {
            this.temp = this.dataService.C * this.dataService.higher_length * (this.dataService.Tmax - this.dataService.Tmin) * this.dataService.k;
            this.tempString = this.temp.toString();
            (document.getElementById('Elongation1') as any).value = this.tempString;
            this.dataService.higher_extension = this.temp;

            try { this.dataService.higher_floor = parseInt(this.myForm.controls.floorInstallationFixedSupport2.value); }
            catch { this.bad_params++; }
          }
        }
        else {
         this.dataService.higher_automatic = 1;

          this.dL = 0;
          this.stop = 0;
          this.length = 0;
          this.tmp = 0;

      for (var j = this.jmax - 1; j >= 0; j--) {



            for (var jj = this.dataService.End_floor[j]; jj >= this.dataService.Start_floor[j]; jj--)
            {
              this.length += this.dataService.Floor_height[this.j];
              this.tmp = this.dataService.C * this.dataService.Floor_height[this.j] * (this.dataService.Tmax - this.dataService.Tmin) * this.dataService.k;
              this.dL += this.tmp;

              if (this.dL > this.dataService.Shift[j]) {
                this.length = this.length - this.dataService.Floor_height[this.j];
                this.dataService.enable_higher_comp = true;
                this.dataService.higher_length = length;
                this.tmp = this.dL - this.tmp;
                this.dataService.higher_extension = this.tmp;
                this.dataService.higher_floor = jj + 1;

                this.lengthString = this.length.toString();
                (document.getElementById('Length2') as any).value = this.lengthString;

                this.tmpString = this.tmp.toString();
                (document.getElementById('Elongation2') as any).value = this.tmpString;
  
                this.jjString = (jj + 1).toString();
                (document.getElementById('floorInstallationFixedSupport2') as any).value = this.jjString;

                this.dataService.j_h = j;
                this.dataService.jj_h = jj;

                this.stop = 1;
                break;
              }
            }
            if (this.stop > 0)
              break;
          }
        }

    this.dataService.setСonfiguration_Control_MyForm_VerticalPipelineParameters = this.bad_params; //"F2"); VerticalPipelineParameters.myForm.controls.setСonfiguration = this.bad_params.toString();//"F2");
    this.dataService.num_calcs = this.jmax;
    try { this.dataService.num_floors = parseInt(this.myForm.controls.totalNumberOfFloors.value); }
        catch { this.bad_params++; }

    if ((this.bad_params == 0) && (this.jmax > 0)) {
         this.err = 0;
         this.error_message = "успешно!";

      if (this.dataService.enable_lower_comp) {
        if (this.dataService.lower_floor != this.dataService.Start_floor[0]) {
              this.error_message = "ошибка! Введите корректные параметры первого участка.";
              (document.getElementById('status') as any).value = "ошибка! Введите корректные параметры первого участка.";
              this.err = 1;
            }
          }
      if (this.dataService.enable_higher_comp) {
        if (this.dataService.higher_floor <= this.dataService.End_floor[this.jmax - 1]) {
              if (this.err == 0) {
                this.error_message = "ошибка! Введите корректные параметры последнего участка.";
                (document.getElementById('status') as any).value = "ошибка! Введите корректные параметры последнего участка.";
              }
              else {
                this.error_message = "ошибка! Введите корректные параметры первого и последнего участков.";
                (document.getElementById('status') as any).value = "ошибка! Введите корректные параметры первого и последнего участков.";
              }
            }
          }
        }
        else {
      this.error_message = "ошибка! Введите корректные параметры трубопровода.";
      (document.getElementById('status') as any).value = "ошибка! Введите корректные параметры трубопровода.";
        }
  }

  /// This metod run click button "Очистить форму"
  ///
  ///
  clear() {
  //dataGridView1.Rows.Clear();
    this.myForm.reset();
    this.lowerSelfCompensationSection = false;
    this.upperSelfCompensationSection = false;
  }

  /// This metod run click button "Авто-выбор"
  ///
  ///
  autoSelect() {
    this.data;
    this.bad_params = 0;
    this.j;
    this.row;
    this.jmax;
    this.tmpjmax;
    if (this.dataService.saved == 0) {
      this.dataService.saved = 1;
      this.tmpjmax = this.dataService.jmax_h;
      if (this.dataService.lower_automatic > 0) {
        this.dataService.enable_lower_comp = true;
        this.dataService.Start_floor[this.dataService.j_l] = this.dataService.jj_l;
        this.jj = this.dataService.jj_l;
        this.myForm.controls.GroundFloor.value.toString = this.jj.toString();
      }
      if (this.dataService.higher_automatic > 0) {
        this.dataService.enable_higher_comp = true;
        this.dataService.End_floor[this.dataService.aj_h] = this.dataService.jj_h;
        this.jj = this.dataService.jj_h;
        this.myForm.controls.FinalFloor.value.toString = this.jj.toString();
      }
      if (this.dataService.lower_automatic > 0) {
        if (this.dataService.j_l > 0) {
          for (var k = 0; k < this.dataService.j_l; k++) {
            // dataGridView1.Rows.RemoveAt(0);
            this.myForm.controls.Region.reset();
            this.myForm.controls.PipelineDiameter.reset();
            this.myForm.controls.Length.reset();
            this.myForm.controls.GroundFloor.reset();
            this.myForm.controls.FinalFloor.reset();
            this.myForm.controls.FloorHeight.reset();
            this.myForm.controls.AcceptableOffsetOfTheInsetPoints.reset();

            this.tmpjmax--;
          }
        }
      }
      if (this.dataService.higher_automatic > 0) {
        if (this.dataService.j_h < this.dataService.jmax_h - 1) {
          for (var k = 0; k < (this.dataService.jmax_h - this.dataService.j_h - 1); k++) {
            //dataGridView1.Rows.RemoveAt(this.tmpjmax - 1);
            this.myForm.controls.Region.reset();
            this.myForm.controls.PipelineDiameter.reset();
            this.myForm.controls.Length.reset();
            this.myForm.controls.GroundFloor.reset();
            this.myForm.controls.FinalFloor.reset();
            this.myForm.controls.FloorHeight.reset();
            this.myForm.controls.AcceptableOffsetOfTheInsetPoints.reset();
            this.tmpjmax--;
          }
        }
      }
      this.row = 0;
      this.j = 0;
      while (this.row == 0) {
        if (this.myForm.controls.Region.value.toString() == null) {
          this.row = 1;
        }
        else {
          try { this.data = parseInt(this.myForm.controls.Region.value.toString()); }
          catch { this.bad_params++; }
          this.j++;
        }
      }
      this.jmax = this.j;
      if (this.jmax > 0) {
        for (var j = 0; j < this.jmax; j++) {
          this.dn = "";
          this.errdn = 0;
          try { this.dataService.idx[j] = parseInt(this.myForm.controls.Region.value.toString()); }
          catch { this.bad_params++; }
          try { this.dn = this.myForm.controls.Region.value.toString(); }
          catch { this.bad_params++; this.errdn = 1; }
          try { this.dataService.Start_floor[j] = parseInt(this.myForm.controls.GroundFloor.value.toString()); }
          catch { this.bad_params++; }
          try { this.dataService.End_floor[j] = parseInt(this.myForm.controls.FinalFloor.value.toString()); }
          catch { this.bad_params++; }
          try { this.dataService.Floor_height[j] = parseInt(this.myForm.controls.FloorHeight.value.toString()); }
          catch { this.bad_params++; }
          try { this.dataService.Shift[j] = parseInt(this.myForm.controls.AcceptableOffsetOfTheInsetPoints.value.toString()); }
          catch { this.bad_params++; }

          if (this.bad_params == 0) {
            if (this.dataService.Shift[j] < 15) {
                this.dataService.Shift[j] = 15;
              //    dataGridView1[6, this.j].Value = "15";
            }
          }
          if (this.bad_params == 0) {
            this.dataService.Length[j] = (1 + this.dataService.End_floor[j] - this.dataService.Start_floor[j]) * this.dataService.Floor_height[j];

            //  dataGridView1[2, j].Value = main.Length[j].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
          }
          if (this.errdn == 0) {
            switch (this.dn) {
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
        this.bad_params++;
      }
      this.dataService.num_calcs = this.jmax;
    }
  }

  /// This metod run click checkbox "Задать вручную нижний участок самокомпенсации"
  ///
  ///
  manuallySetTheLowerSelfCompensationSection(value: boolean) {
    this.lowerSelfCompensationSection = value;

    this.val = this.lowerSelfCompensationSection;
    this.lowerSelfCompensationSection = !this.val;

    this.val = this.lowerSelfCompensationSection = value;
    this.lowerSelfCompensationSection = !this.val;

  this.dataService.enable_lower_comp = this.lowerSelfCompensationSection;
  }

  /// This metod run click checkbox "Задать вручную верхний участок самокомпенсации"
  ///
  ///
  manuallySetTheUpperSelfCompensationSection(value: boolean) {
    this.upperSelfCompensationSection = value;

    this.val = this.upperSelfCompensationSection;
    this.upperSelfCompensationSection = !this.val;

    this.val = this.upperSelfCompensationSection = value;
    this.upperSelfCompensationSection = !this.val;
  }

  // Result
  // Результаты
  //
  public addResult2() {
    this.showAddResult2 = true;
    this.showBtnAddResult2 = false;
    this.showBtnAddResult3 = true;
  }
  public addResult3() {
    this.showAddResult3 = true;
    this.showBtnAddResult3 = false;
    this.showBtnAddResult4 = true;
  }
  public addResult4() {
    this.showAddResult4 = true;
    this.showBtnAddResult4 = false;
    this.showBtnAddResult5 = true;
  }
  public addResult5() {
    this.showAddResult5 = true;
    this.showBtnAddResult5 = false;
    this.showBtnAddResult6 = true;
  }
  public addResult6() {
    this.showAddResult6 = true;
    this.showBtnAddResult6 = false;
    this.showBtnAddResult7 = true;
  }
  public addResult7() {
    this.showAddResult7 = true;
    this.showBtnAddResult7 = false;
    this.showBtnAddResult8 = true;
  }
  public addResult8() {
    this.showAddResult8 = true;
    this.showBtnAddResult8 = false;
    this.showBtnAddResult9 = true;
  }
  public addResult9() {
    this.showAddResult9 = true;
    this.showBtnAddResult9 = false;
    this.showBtnAddResult10 = true;
  }
  public addResult10() {
    this.showAddResult10 = true;
    this.showBtnAddResult10 = false;
    this.showBtnAddResult11 = true;
  }
  public addResult11() {
    this.showAddResult11 = true;
    this.showBtnAddResult11 = false;
    this.showBtnAddResult12 = true;
  }
  public addResult12() {
    this.showAddResult12 = true;
    this.showBtnAddResult12 = false;
    this.showBtnAddResult13 = true;
  }
  public addResult13() {
    this.showAddResult13 = true;
    this.showBtnAddResult13 = false;
    this.showBtnAddResult14 = true;
  }
  public addResult14() {
    this.showAddResult14 = true;
    this.showBtnAddResult14 = false;
    this.showBtnAddResult15 = true;
  }
  public addResult15() {
    this.showAddResult15 = true;
    this.showBtnAddResult15 = false;
    this.showBtnAddResult16 = true;
  }
  public addResult16() {
    this.showAddResult16 = true;
    this.showBtnAddResult16 = false;
    this.showBtnAddResult17 = true;
  }
  public addResult17() {
    this.showAddResult17 = true;
    this.showBtnAddResult17 = false;
    this.showBtnAddResult18 = true;
  }
  public addResult18() {
    this.showAddResult18 = true;
    this.showBtnAddResult18 = false;
    this.showBtnAddResult19 = true;
  }
  public addResult19() {
    this.showAddResult19 = true;
    this.showBtnAddResult19 = false;
    this.showBtnAddResult20 = true;
  }
  public addResult20() {
    this.showAddResult20 = true;
    this.showBtnAddResult20 = false;
    this.showBtnAddResult21 = true;
  }
  public addResult21() {
    this.showAddResult21 = true;
    this.showBtnAddResult21 = false;
    this.showBtnAddResult22 = true;
  }
  public addResult22() {
    this.showAddResult22 = true;
    this.showBtnAddResult22 = false;
    this.showBtnAddResult23 = true;
  }
  public addResult23() {
    this.showAddResult23 = true;
    this.showBtnAddResult23 = false;
    this.showBtnAddResult24 = true;
  }
  public addResult24() {
    this.showAddResult24 = true;
    this.showBtnAddResult24 = false;
    this.showBtnAddResult25 = true;
  }
  public addResult25() {
    this.showAddResult25 = true;
    this.showBtnAddResult25 = false;
    this.showBtnAddResult26 = true;
  }
  public addResult26() {
    this.showAddResult26 = true;
    this.showBtnAddResult26 = false;
    this.showBtnAddResult27 = true;
  }
  public addResult27() {
    this.showAddResult27 = true;
    this.showBtnAddResult27 = false;
    this.showBtnAddResult28 = true;
  }
  public addResult28() {
    this.showAddResult28 = true;
    this.showBtnAddResult28 = false;
    this.showBtnAddResult29 = true;
  }
  public addResult29() {
    this.showAddResult29 = true;
    this.showBtnAddResult29 = false;
    this.showBtnAddResult30 = true;
  }
  public addResult30() {
    this.showAddResult30 = true;
    this.showBtnAddResult30 = false;
  }

}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
