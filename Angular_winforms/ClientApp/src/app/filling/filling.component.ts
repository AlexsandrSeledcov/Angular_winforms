import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Self, Inject } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators'; 

@Component({
  selector: 'app-filling-component',
  templateUrl: './filling.component.html',
  styleUrls: ['./filling.component.css']
})
export class FillingComponent {
  myForm: FormGroup;
  public forecasts: WeatherForecast[];

  showAddResult2:  boolean = false;
  showAddResult3:  boolean = false;
  showAddResult4:  boolean = false;
  showAddResult5:  boolean = false;
  showAddResult6:  boolean = false;
  showAddResult7:  boolean = false;
  showAddResult8:  boolean = false;
  showAddResult9:  boolean = false;
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

  showBtnAddResult2:  boolean = true;
  showBtnAddResult3:  boolean = false;
  showBtnAddResult4:  boolean = false;
  showBtnAddResult5:  boolean = false;
  showBtnAddResult6:  boolean = false;
  showBtnAddResult7:  boolean = false;
  showBtnAddResult8:  boolean = false;
  showBtnAddResult9:  boolean = false;
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

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private formBuilder: FormBuilder, private router: Router) {
    this.myForm = formBuilder.group({                                       // [ WinForm ]
      "fixedSupport1": [""],                                                // Неподвижная опора 1     []
      "workload1":     [""],                                                // Рабочая нагрузка 1       []                                                
      "compensator1":  [""],                                                // Компенсатор 1             []
      "axialStroke1": [""],                                                 // Осевой ход  1               []
      "fixedSupport2": [""],                                                // Неподвижная опора 2     []
      "workload2":     [""],                                                // Рабочая нагрузка 2       []
      "compensator2":  [""],                                                // Компенсатор 2             []
      "axialStroke2": [""],                                                 // Осевой ход  2                  []
      "fixedSupport3": [""],                                                // Неподвижная опора 3     []                                                
      "workload3":     [""],                                                // Рабочая нагрузка 3       []
      "compensator3":  [""],                                                // Компенсатор 3             []
      "axialStroke3": [""],                                                 // Осевой ход  3               []
      "fixedSupport4": [""],                                                // Неподвижная опора 4     []
      "workload4":     [""],                                                // Рабочая нагрузка 4       []
      "compensator4":  [""],                                                // общие число этажей        []
      "axialStroke4": [""],                                                 // Осевой ход  4               []                                                
      "fixedSupport5": [""],                                                // Неподвижная опора 5     []
      "workload5":     [""],                                                // Рабочая нагрузка 5       []
      "compensator5":  [""],                                                // Компенсатор 5             []
      "axialStroke5": [""],                                                 // Осевой ход  5           []
      "fixedSupport6": [""],                                                // Неподвижная опора 6     []
      "workload6": [""],                                                // Рабочая нагрузка 6       []                                                
      "compensator6": [""],                                                // Компенсатор 6             []
      "axialStroke6": [""],                                                 // Осевой ход  6               []
      "fixedSupport7": [""],                                                // Неподвижная опора 7     []
      "workload7": [""],                                                // Рабочая нагрузка 7       []
      "compensator7": [""],                                                // Компенсатор 7             []
      "axialStroke7": [""],                                                 // Осевой ход 7                  []
      "fixedSupport8": [""],                                                // Неподвижная опора 8     []                                                
      "workload8": [""],                                                // Рабочая нагрузка 8       []
      "compensator8": [""],                                                // Компенсатор 8             []
      "axialStroke8": [""],                                                 // Осевой ход  8               []
      "fixedSupport9": [""],                                                // Неподвижная опора 9     []
      "workload9": [""],                                                // Рабочая нагрузка 9       []
      "compensator9": [""],                                                // общие число этажей 9       []
      "axialStroke9": [""],                                                 // Осевой ход 9                []                                                
      "fixedSupport10": [""],                                                // Неподвижная опора 10     []
      "workload10": [""],                                                // Рабочая нагрузка 10       []
      "compensator10": [""],                                                // Компенсатор 10             []
      "axialStroke10": [""],                                                 // Осевой ход 10         []
      "fixedSupport11": [""],                                                // Неподвижная опора 11     []
      "workload11": [""],                                                // Рабочая нагрузка 11       []                                                
      "compensator11": [""],                                                // Компенсатор 11             []
      "axialStroke11": [""],                                                 // Осевой ход                 []
      "fixedSupport12": [""],                                                // Неподвижная опора 12     []
      "workload12": [""],                                                // Рабочая нагрузка 12       []
      "compensator12": [""],                                                // Компенсатор 12             []
      "axialStroke12": [""],                                                 // Осевой ход 12                   []
      "fixedSupport13": [""],                                                // Неподвижная опора 13     []                                                
      "workload13": [""],                                                // Рабочая нагрузка 13       []
      "compensator13": [""],                                                // Компенсатор 13             []
      "axialStroke13": [""],                                                 // Осевой ход  13               []
      "fixedSupport14": [""],                                                // Неподвижная опора 14     []
      "workload14": [""],                                                // Рабочая нагрузка 14       []
      "compensator14": [""],                                                // общие число этажей 14       []
      "axialStroke14": [""],                                                 // Осевой ход 14                []                                                
      "fixedSupport15": [""],                                                // Неподвижная опора 15     []
      "workload15": [""],                                                // Рабочая нагрузка 15       []
      "compensator15": [""],                                                // Компенсатор 15             []
      "axialStroke15": [""],                                                 // Осевой ход 15           []
      "fixedSupport16": [""],                                                // Неподвижная опора 16     []
      "workload16": [""],                                                // Рабочая нагрузка 16       []                                                
      "compensator16": [""],                                                // Компенсатор 16             []
      "axialStroke16": [""],                                                 // Осевой ход 16                []
      "fixedSupport17": [""],                                                // Неподвижная опора 17     []
      "workload17": [""],                                                // Рабочая нагрузка 17       []
      "compensator17": [""],                                                // Компенсатор 17             []
      "axialStroke17": [""],                                                 // Осевой ход 17                   []
      "fixedSupport18": [""],                                                // Неподвижная опора 18     []                                                
      "workload18": [""],                                                // Рабочая нагрузка 18       []
      "compensator18": [""],                                                // Компенсатор 18             []
      "axialStroke18": [""],                                                 // Осевой ход 18                []
      "fixedSupport19": [""],                                                // Неподвижная опора 19     []
      "workload19": [""],                                                // Рабочая нагрузка 19       []
      "compensator19": [""],                                                // общие число этажей 19       []
      "axialStroke19": [""],                                                 // Осевой ход 19                []                                                
      "fixedSupport20": [""],                                                // Неподвижная опора 20     []
      "workload20": [""],                                                // Рабочая нагрузка 20       []
      "compensator20": [""],                                                // Компенсатор 20             []
      "axialStroke20": [""],                                                 // Осевой ход 20          []
      "fixedSupport21": [""],                                                // Неподвижная опора 21     []
      "workload21": [""],                                                // Рабочая нагрузка 21       []                                                
      "compensator21": [""],                                                // Компенсатор 21             []
      "axialStroke21": [""],                                                 // Осевой ход  21               []
      "fixedSupport22": [""],                                                // Неподвижная опора 22     []
      "workload22": [""],                                                // Рабочая нагрузка 22       []
      "compensator22": [""],                                                // Компенсатор 22             []
      "axialStroke22": [""],                                                 // Осевой ход  22                  []
      "fixedSupport23": [""],                                                // Неподвижная опора 23     []                                                
      "workload23": [""],                                                // Рабочая нагрузка 23       []
      "compensator23": [""],                                                // Компенсатор 23             []
      "axialStroke23": [""],                                                 // Осевой ход  23               []
      "fixedSupport24": [""],                                                // Неподвижная опора 24     []
      "workload24": [""],                                                // Рабочая нагрузка 24       []
      "compensator24": [""],                                                // общие число этажей  24      []
      "axialStroke24": [""],                                                 // Осевой ход  24               []                                                
      "fixedSupport25": [""],                                                // Неподвижная опора 25     []
      "workload25": [""],                                                // Рабочая нагрузка 25       []
      "compensator25": [""],                                                // Компенсатор 25             []
      "axialStroke25": [""],                                                 // Осевой ход  25           []
      "fixedSupport26": [""],                                                // Неподвижная опора 26     []
      "workload26": [""],                                                // Рабочая нагрузка 26       []                                                
      "compensator26": [""],                                                // Компенсатор 26             []
      "axialStroke26": [""],                                                 // Осевой ход  26               []
      "fixedSupport27": [""],                                                // Неподвижная опора 27     []
      "workload27": [""],                                                // Рабочая нагрузка 27       []
      "compensator27": [""],                                                // Компенсатор 27             []
      "axialStroke27": [""],                                                 // Осевой ход 27                  []
      "fixedSupport28": [""],                                                // Неподвижная опора 28     []                                                
      "workload28": [""],                                                // Рабочая нагрузка 28       []
      "compensator28": [""],                                                // Компенсатор 28             []
      "axialStroke28": [""],                                                 // Осевой ход  28               []
      "fixedSupport29": [""],                                                // Неподвижная опора 29     []
      "workload29": [""],                                                // Рабочая нагрузка 29       []
      "compensator29": [""],                                                // общие число этажей 29       []
      "axialStroke29": [""],                                                 // Осевой ход 29                []                                                
      "fixedSupport30": [""],                                                // Неподвижная опора 30     []
    });


    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
}
/// Пересчетать
///
///
  public recalculate() {

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



