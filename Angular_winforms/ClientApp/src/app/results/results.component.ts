import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Self, Inject } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { VerticalPipelineParameters } from '../vertical-pipeline-parameters.component/vertical-pipeline-parameters.component';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-results-component',
  templateUrl: './results.component.html',
  styleUrls: ['/results.component.css']
})
export class ResultsComponent {
  public forecasts: WeatherForecast[];
  static myForm: any;
  VerticalPipelineParameters: VerticalPipelineParameters;
  myForm: FormGroup;
  get_params: number;
  bad_params: number;
  j: number;
  k: number;
  c: number;
  dL: number;
  cur_height: number;
  L: number;
  temp: number;
  cur_shift: string;
  prev_shift: number;

  //Cycle
  qCycle: number;
  jCycle: number;

  FloorsIdx0: number;

// DataService/VerticalPipelineParameters
  Start_floor: number[];//[100]
  End_floor: number[];//[100]
  //addResult() 
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

  //Necessary set of expansion joints and supports
  showNecessarySetOfExpansionJointsAndSupports2: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports3: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports4: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports5: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports6: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports7: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports8: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports9: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports10: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports11: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports12: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports13: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports14: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports15: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports16: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports17: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports18: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports19: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports20: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports21: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports22: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports23: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports24: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports25: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports26: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports27: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports28: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports29: boolean = false;
  showNecessarySetOfExpansionJointsAndSupports30: boolean = false;

  showBtnAddNecessarySetOfExpansionJointsAndSupports2: boolean = true;
  showBtnAddNecessarySetOfExpansionJointsAndSupports3: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports4: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports5: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports6: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports7: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports8: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports9: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports10: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports11: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports12: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports13: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports14: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports15: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports16: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports17: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports18: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports19: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports20: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports21: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports22: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports23: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports24: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports25: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports26: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports27: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports28: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports29: boolean = false;
  showBtnAddNecessarySetOfExpansionJointsAndSupports30: boolean = false;

  // Vertical pipeline parameters

  showVerticalPipelineParameters2: boolean = false;
  showVerticalPipelineParameters3: boolean = false;
  showVerticalPipelineParameters4: boolean = false;
  showVerticalPipelineParameters5: boolean = false;
  showVerticalPipelineParameters6: boolean = false;
  showVerticalPipelineParameters7: boolean = false;
  showVerticalPipelineParameters8: boolean = false;
  showVerticalPipelineParameters9: boolean = false;
  showVerticalPipelineParameters10: boolean = false;
  showVerticalPipelineParameters11: boolean = false;
  showVerticalPipelineParameters12: boolean = false;
  showVerticalPipelineParameters13: boolean = false;
  showVerticalPipelineParameters14: boolean = false;
  showVerticalPipelineParameters15: boolean = false;
  showVerticalPipelineParameters16: boolean = false;
  showVerticalPipelineParameters17: boolean = false;
  showVerticalPipelineParameters18: boolean = false;
  showVerticalPipelineParameters19: boolean = false;
  showVerticalPipelineParameters20: boolean = false;
  showVerticalPipelineParameters21: boolean = false;
  showVerticalPipelineParameters22: boolean = false;
  showVerticalPipelineParameters23: boolean = false;
  showVerticalPipelineParameters24: boolean = false;
  showVerticalPipelineParameters25: boolean = false;
  showVerticalPipelineParameters26: boolean = false;
  showVerticalPipelineParameters27: boolean = false;
  showVerticalPipelineParameters28: boolean = false;
  showVerticalPipelineParameters29: boolean = false;
  showVerticalPipelineParameters30: boolean = false;

  showBtnAddVerticalPipelineParameters2: boolean = true;
  showBtnAddVerticalPipelineParameters3: boolean = false;
  showBtnAddVerticalPipelineParameters4: boolean = false;
  showBtnAddVerticalPipelineParameters5: boolean = false;
  showBtnAddVerticalPipelineParameters6: boolean = false;
  showBtnAddVerticalPipelineParameters7: boolean = false;
  showBtnAddVerticalPipelineParameters8: boolean = false;
  showBtnAddVerticalPipelineParameters9: boolean = false;
  showBtnAddVerticalPipelineParameters10: boolean = false;
  showBtnAddVerticalPipelineParameters11: boolean = false;
  showBtnAddVerticalPipelineParameters12: boolean = false;
  showBtnAddVerticalPipelineParameters13: boolean = false;
  showBtnAddVerticalPipelineParameters14: boolean = false;
  showBtnAddVerticalPipelineParameters15: boolean = false;
  showBtnAddVerticalPipelineParameters16: boolean = false;
  showBtnAddVerticalPipelineParameters17: boolean = false;
  showBtnAddVerticalPipelineParameters18: boolean = false;
  showBtnAddVerticalPipelineParameters19: boolean = false;
  showBtnAddVerticalPipelineParameters20: boolean = false;
  showBtnAddVerticalPipelineParameters21: boolean = false;
  showBtnAddVerticalPipelineParameters22: boolean = false;
  showBtnAddVerticalPipelineParameters23: boolean = false;
  showBtnAddVerticalPipelineParameters24: boolean = false;
  showBtnAddVerticalPipelineParameters25: boolean = false;
  showBtnAddVerticalPipelineParameters26: boolean = false;
  showBtnAddVerticalPipelineParameters27: boolean = false;
  showBtnAddVerticalPipelineParameters28: boolean = false;
  showBtnAddVerticalPipelineParameters29: boolean = false;
  showBtnAddVerticalPipelineParameters30: boolean = false;

  //test
  comp_countTest: number;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private formBuilder: FormBuilder, private router: Router, private dataService: DataService) {
    this.myForm = formBuilder.group({                                                   //                                                [WinForm] 
      "groundFloor1": [""],                                                            // Начальный этаж                                  []
      "finalFloor1": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints1": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints1": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle1": [""],                                            // Этаж                                                []
      "compensatorArticle1": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport1": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport1": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor2": [""],                                                            // Начальный этаж                                  []
      "finalFloor2": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints2": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints2": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle2": [""],                                            // Этаж                                                []
      "compensatorArticle2": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport2": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport2": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor3": [""],                                                            // Начальный этаж                                  []
      "finalFloor3": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints3": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints3": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle3": [""],                                            // Этаж                                                []
      "compensatorArticle3": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport3": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport3": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor4": [""],                                                            // Начальный этаж                                  []
      "finalFloor4": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints4": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints4": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle4": [""],                                            // Этаж                                                []
      "compensatorArticle4": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport4": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport4": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor5": [""],                                                            // Начальный этаж                                  []
      "finalFloor5": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints5": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints5": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle5": [""],                                            // Этаж                                                []
      "compensatorArticle5": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport5": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport5": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor6": [""],                                                            // Начальный этаж                                  []
      "finalFloor6": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints6": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints6": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle6": [""],                                            // Этаж                                                []
      "compensatorArticle6": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport6": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport6": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor7": [""],                                                            // Начальный этаж                                  []
      "finalFloor7": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints7": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints7": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle7": [""],                                            // Этаж                                                []
      "compensatorArticle7": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport7": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport7": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor8": [""],                                                            // Начальный этаж                                  []
      "finalFloor8": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints8": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints8": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle8": [""],                                            // Этаж                                                []
      "compensatorArticle8": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport8": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport8": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor9": [""],                                                            // Начальный этаж                                  []
      "finalFloor9": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints9": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints9": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle9": [""],                                            // Этаж                                                []
      "compensatorArticle9": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport9": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport9": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor10": [""],                                                            // Начальный этаж                                  []
      "finalFloor10": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints10": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints10": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle10": [""],                                            // Этаж                                                []
      "compensatorArticle10": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport10": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport10": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor11": [""],                                                            // Начальный этаж                                  []
      "finalFloor11": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints11": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints11": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle11": [""],                                            // Этаж                                                []
      "compensatorArticle11": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport11": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport11": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor12": [""],                                                            // Начальный этаж                                  []
      "finalFloor12": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints12": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints12": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle12": [""],                                            // Этаж                                                []
      "compensatorArticle12": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport12": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport12": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor13": [""],                                                            // Начальный этаж                                  []
      "finalFloor13": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints13": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints13": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle13": [""],                                            // Этаж                                                []
      "compensatorArticle13": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport13": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport13": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor14": [""],                                                            // Начальный этаж                                  []
      "finalFloor14": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints14": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints14": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle14": [""],                                            // Этаж                                                []
      "compensatorArticle14": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport14": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport14": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor15": [""],                                                            // Начальный этаж                                  []
      "finalFloor15": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints15": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints15": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle15": [""],                                            // Этаж                                                []
      "compensatorArticle15": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport15": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport15": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor16": [""],                                                            // Начальный этаж                                  []
      "finalFloor16": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints16": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints16": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle16": [""],                                            // Этаж                                                []
      "compensatorArticle16": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport16": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport16": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor17": [""],                                                            // Начальный этаж                                  []
      "finalFloor17": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints17": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints17": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle17": [""],                                            // Этаж                                                []
      "compensatorArticle17": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport17": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport17": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor18": [""],                                                            // Начальный этаж                                  []
      "finalFloor18": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints18": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints18": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle18": [""],                                            // Этаж                                                []
      "compensatorArticle18": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport18": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport18": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor19": [""],                                                            // Начальный этаж                                  []
      "finalFloor19": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints19": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints19": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle19": [""],                                            // Этаж                                                []
      "compensatorArticle19": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport19": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport19": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor20": [""],                                                            // Начальный этаж                                  []
      "finalFloor20": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints20": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints20": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle20": [""],                                            // Этаж                                                []
      "compensatorArticle20": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport20": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport20": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor21": [""],                                                            // Начальный этаж                                  []
      "finalFloor21": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints21": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints21": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle21": [""],                                            // Этаж                                                []
      "compensatorArticle21": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport21": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport21": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor22": [""],                                                            // Начальный этаж                                  []
      "finalFloor22": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints22": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints22": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle22": [""],                                            // Этаж                                                []
      "compensatorArticle22": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport22": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport22": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor23": [""],                                                            // Начальный этаж                                  []
      "finalFloor23": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints23": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints23": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle23": [""],                                            // Этаж                                                []
      "compensatorArticle23": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport23": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport23": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor24": [""],                                                            // Начальный этаж                                  []
      "finalFloor24": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints24": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints24": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle24": [""],                                            // Этаж                                                []
      "compensatorArticle24": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport24": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport24": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor25": [""],                                                            // Начальный этаж                                  []
      "finalFloor25": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints25": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints25": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle25": [""],                                            // Этаж                                                []
      "compensatorArticle25": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport25": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport25": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor26": [""],                                                            // Начальный этаж                                  []
      "finalFloor26": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints26": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints26": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle26": [""],                                            // Этаж                                                []
      "compensatorArticle26": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport26": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport26": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor27": [""],                                                            // Начальный этаж                                  []
      "finalFloor27": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints27": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints27": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle27": [""],                                            // Этаж                                                []
      "compensatorArticle27": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport27": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport27": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor28": [""],                                                            // Начальный этаж                                  []
      "finalFloor28": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints28": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints28": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle28": [""],                                            // Этаж                                                []
      "compensatorArticle28": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport28": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport28": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor29": [""],                                                            // Начальный этаж                                  []
      "finalFloor29": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints29": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints29": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle29": [""],                                            // Этаж                                                []
      "compensatorArticle29": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport29": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport29": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "groundFloor30": [""],                                                            // Начальный этаж                                  []
      "finalFloor30": [""],                                                            // Конечный этаж                                    []
      "permissibleOffsetOfTheInsertionPoints30": [""],                                // Допустимое смещение точек врезки (миллиметрах)    []
      "maximumOffsetOfTheInsertionPoints30": [""],                                   // Максимальное смещение точек врезки (миллиметрах)   []
      "floorСompensatorArticle30": [""],                                            // Этаж                                                []
      "compensatorArticle30": [""],                                                // Минимальная температура воздуха при монтаже, °С      []
      "floorArticleOfTheFixedSupport30": [""],                                    // Этаж                                                  []
      "articleOfTheFixedSupport30": [""],                                        // Расположить компенсаторы вблизи неподвижных опор       []
      "status": [""],                                                           // статус                                                  []
    });
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
  ngOnInit(): void {
    this.Start_floor = this.dataService.Start_floor;
    this.End_floor   = this.dataService.End_floor;
  }

  /// Пересчетать
  ///
  ///
  public recalculate() {

    //Form1 main = this.Owner as Form1;

    if ((this.dataService.comp_count > 0) && (this.dataService.hard_count > 0)) {
      this.get_params = 0;
      this.bad_params = 0;

      if (this.dataService.name == "") {
        this.get_params = 0;
        this.dataService.comp_count = this.get_params * this.bad_params;
      }

      this.dataService.comp_count = 0;
      this.dataService.hard_count = 0;
      for (var i = 0; i < 100; i++) {
        this.dataService.Comp_floors[i] = 0;
        this.dataService.Hard_floors[i] = 0;
      }

      while (this.get_params == 0) {
        try {
          if (this.myForm.controls.floorСompensatorArticle1.value != null) { // dataGridView2[0, main.comp_count].Value != null) {
            this.dataService.Comp_floors[this.dataService.comp_count] = parseInt(this.myForm.controls.floorСompensatorArticle1.value);// int.Parse((string)dataGridView2[0, main.comp_count].Value);
            this.dataService.comp_count++;
          }
          else
            this.get_params = 1;
        }
        catch
        { this.bad_params++; this.get_params = 1; }
      }

      this.get_params = 0;


      while (this.get_params == 0) {
        try {
          if (this.myForm.controls.floorArticleOfTheFixedSupport1.value != null) {
            //dataGridView3[0, main.hard_count].Value != null) {
   
            this.dataService.Hard_floors[this.dataService.hard_count] = parseInt(this.myForm.controls.floorArticleOfTheFixedSupport1.value.toString());
            this.dataService.hard_count++;
          }
          else
            this.get_params = 1;
        }
        catch
        { this.bad_params++; this.get_params = 1; }
      }
      this.j = 1;
      this.k = 0;

      if (this.dataService.lic > 0) {
        for (var i = 0; i < 100; i++) {
          this.dataService.actualShift[i] = 0;
       // this.dataService.FloorsIdx[i, 0] = 0;
//          this.dataService.FloorsIdx[0] = 0;

       // this.dataService.FloorsIdx[i, 1] = 0;
//          this.dataService.FloorsIdx[1] = 0;

        }
        this.dataService.acts_count = 0;

        this.dataService.FloorsIdx[this.dataService.acts_count][0] = this.dataService.Hard_floors[0];

        for (var ii = this.dataService.Hard_floors[0]; ii < (this.dataService.Hard_floors[this.dataService.hard_count - 1] - 1); ii++) {
          if (ii == this.dataService.Hard_floors[this.j]) {
            if (this.dataService.Hard_floors[this.j] != (this.dataService.Comp_floors[this.k - 1] + 1)) {
              this.dataService.acts_count++;
              this.dataService.FloorsIdx[this.dataService.acts_count][0] = ii;
              this.dataService.FloorsIdx[this.dataService.acts_count - 1][1] = ii - 1;
            }
            else {
              this.dataService.FloorsIdx[this.dataService.acts_count][1] = ii;
            }
            this.j++;
          }
          if (i == this.dataService.Comp_floors[this.k]) {
            this.k++;
            this.dataService.acts_count++;
            this.dataService.FloorsIdx[this.dataService.acts_count][0] = ii + 1;
            this.dataService.FloorsIdx[this.dataService.acts_count - 1][1] = i;
          }
        }

        this.dataService.FloorsIdx[this.dataService.acts_count][1] = (this.dataService.Hard_floors[this.dataService.hard_count - 1] - 1);
        this.dataService.acts_count++;
      }

      this.c = 0;
      this.myForm.reset();
      //dataGridView1.Rows.Clear();

      //dataGridView1.Rows.Add();
      //dataGridView1[0, this.c].Value = "1";
      //dataGridView1[1, this.c].Value = (VerticalPipelineParameters.Hard_floors[0] - 1).toString();
      //dataGridView1[2, this.c].Value = "-";

      (document.getElementById('groundFloor1') as any).value = "1";
      (document.getElementById('finalFloor1') as any).value = this.dataService.Hard_floors[0] - 1;
      (document.getElementById('permissibleOffsetOfTheInsertionPoints1') as any).value = "-";

      this.dL = 0;
      this.cur_height = 0;
      this.L = 0;

      if (this.dataService.Hard_floors[0] > 1) {
        if (this.dataService.lower_automatic < 1) {
          for (var i = 1; i < this.dataService.Hard_floors[0]; i++) {
            this.cur_height = 0;
            for (var q = 0; q < this.dataService.num_calcs; q++) {
              if ((i >= this.dataService.Start_floor[q]) && (i <= this.dataService.End_floor[q])) {
                this.cur_height = this.dataService.Floor_height[q];
              }
            }

            if (this.cur_height == 0) {
              this.cur_height = this.dataService.Floor_height[0];
            }

            this.dL += this.dataService.C * this.cur_height * (this.dataService.Tmax - this.dataService.Tmin) * this.dataService.k;
            this.L += this.cur_height;
          }

          this.dataService.lower_extension = this.dL;
          this.dataService.lower_floor = this.dataService.Hard_floors[0];
          this.dataService.lower_length = this.L;

        }
        else {
          this.dL = this.dataService.lower_extension;
        }
        //dataGridView1[3, this.c].Value = this.dL.toString();
        (document.getElementById('maximumOffsetOfTheInsertionPoints1') as any).value = this.dL;
        this.c++;
      }

      for (var i = 0; i < this.dataService.acts_count; i++) {
        this.cur_shift = "";
        this.prev_shift = 0;

        this.dL = 0;
        this.L = 0;

        this.FloorsIdx0 = this.dataService.FloorsIdx[i][0];

        //for (var j = VerticalPipelineParameters.FloorsIdx[i, 0]; j <= VerticalPipelineParameters.FloorsIdx[i, 1]; j++) {
        for (var j = this.FloorsIdx0[0]; j <= this.dataService.FloorsIdx[1]; this.dataService.j++) {

          this.cur_height = 0;

          for (var q = 0; q < this.dataService.num_calcs; q++) {
            if ((j >= this.Start_floor[q]) && (j <= this.End_floor[q])) {  //if ((j >= this.Start_floor[q]) && (j <= this.dataService.End_floor[q])) {
              if (this.prev_shift != this.dataService.Shift[q]) {
                if (this.cur_shift == "")
                  this.cur_shift = this.dataService.Shift[q].toString();
                else
                  this.cur_shift.concat(this.cur_shift, ",", this.dataService.Shift[q].toString());
              }
              this.prev_shift = this.dataService.Shift[q];

              this.cur_height = this.dataService.Floor_height[q];
            }
          }

          this.dL += this.dataService.C * this.cur_height * (this.dataService.Tmax - this.dataService.Tmin) * this.dataService.k;
          this.L += this.cur_height;
        }

        this.dataService.actualShift[i] = this.dL;

        //dataGridView1.Rows.Add();
        //dataGridView1[0, this.c].Value = VerticalPipelineParameters.FloorsIdx[i, 0].ToString();
        //dataGridView1[1, this.c].Value = VerticalPipelineParameters.FloorsIdx[i, 1].ToString();
        //dataGridView1[2, this.c].Value = this.cur_shift;
        //dataGridView1[3, this.c].Value = VerticalPipelineParameters.ActualShift[i].toString();

        (document.getElementById('groundFloor1') as any).value = this.dataService.FloorsIdx[0];
        (document.getElementById('finalFloor1') as any).value = this.dataService.Hard_floors[0] - 1;
        (document.getElementById('permissibleOffsetOfTheInsertionPoints1') as any).value = "-";
        (document.getElementById('maximumOffsetOfTheInsertionPoints1') as any).value = "-";

        this.c++;
      }

      this.temp = this.dataService.num_floors;

      this.dL = 0;
      this.L = 0;

      if ((this.temp - this.dataService.Hard_floors[this.dataService.hard_count - 1]) >= 0) {
        for (var ii = this.dataService.Hard_floors[this.dataService.hard_count - 1]; ii < this.temp + 1; ii++) {
          this.cur_height = 0;
          for (var q = 0; q < this.dataService.num_calcs; q++) {
            if ((i >= this.dataService.Start_floor[q]) && (i <= this.dataService.End_floor[q])) {
              this.cur_height = this.dataService.Floor_height[q];
            }
          }

          if (this.cur_height == 0) {
            this.cur_height = this.dataService.Floor_height[this.dataService.num_calcs - 1];
          }

          this.dL += this.dataService.C * this.cur_height * (this.dataService.Tmax - this.dataService.Tmin) * this.dataService.k;
          this.L += this.cur_height;
        }

        this.dataService.higher_extension = this.dL;
        this.dataService.higher_floor = this.dataService.Hard_floors[this.dataService.hard_count - 1];
        this.dataService.higher_length = this.L;

        //dataGridView1.Rows.Add();
        //dataGridView1[0, this.c].Value = VerticalPipelineParameters.Hard_floors[VerticalPipelineParameters.hard_count - 1].ToString();
        //dataGridView1[1, this.c].Value = this.temp.toString();
        //dataGridView1[2, this.c].Value = "-";
        //dataGridView1[3, this.c].Value = this.dL.toString();

        (document.getElementById('groundFloor1') as any).value = this.dataService.Hard_floors[this.dataService.hard_count - 1];
        (document.getElementById('finalFloor1') as any).value = this.temp;
        (document.getElementById('permissibleOffsetOfTheInsertionPoints1') as any).value = "-";
        (document.getElementById('maximumOffsetOfTheInsertionPoints1') as any).value = this.dL;
      }

      if (this.bad_params > 0) {

        (document.getElementById('status') as any).value = "Ошибка!";
      }
      else {
        (document.getElementById('status') as any).value = "Успешно!";
      }
    }
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

// Necessary Set Of Expansion Joints And Supports
// Необходимый набор компенсаторов и опор
//
  addNecessarySetOfExpansionJointsAndSupports2() {
    this.showNecessarySetOfExpansionJointsAndSupports2 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports2 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports3 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports3() {
    this.showNecessarySetOfExpansionJointsAndSupports3 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports3 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports4 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports4() {
    this.showNecessarySetOfExpansionJointsAndSupports4 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports4 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports5 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports5() {
    this.showNecessarySetOfExpansionJointsAndSupports5 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports5 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports6 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports6() {
    this.showNecessarySetOfExpansionJointsAndSupports6 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports6 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports7 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports7() {
    this.showNecessarySetOfExpansionJointsAndSupports7 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports7 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports8 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports8() {
    this.showNecessarySetOfExpansionJointsAndSupports8 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports8 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports9 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports9() {
    this.showNecessarySetOfExpansionJointsAndSupports9 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports9 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports10 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports10() {
    this.showNecessarySetOfExpansionJointsAndSupports10 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports10 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports11 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports11() {
    this.showNecessarySetOfExpansionJointsAndSupports11 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports11 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports12 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports12() {
    this.showNecessarySetOfExpansionJointsAndSupports12 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports12 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports13 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports13() {
    this.showNecessarySetOfExpansionJointsAndSupports13 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports13 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports14 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports14() {
    this.showNecessarySetOfExpansionJointsAndSupports14 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports14 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports15 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports15() {
    this.showNecessarySetOfExpansionJointsAndSupports15 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports15 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports16 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports16() {
    this.showNecessarySetOfExpansionJointsAndSupports16 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports16 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports17 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports17() {
    this.showNecessarySetOfExpansionJointsAndSupports17 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports17 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports18 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports18() {
    this.showNecessarySetOfExpansionJointsAndSupports18 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports18 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports19 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports19() {
    this.showNecessarySetOfExpansionJointsAndSupports19 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports19 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports20 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports20() {
    this.showNecessarySetOfExpansionJointsAndSupports20 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports20 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports21 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports21() {
    this.showNecessarySetOfExpansionJointsAndSupports21 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports21 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports22 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports22() {
    this.showNecessarySetOfExpansionJointsAndSupports22 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports22 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports23 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports23() {
    this.showNecessarySetOfExpansionJointsAndSupports23 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports23 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports24 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports24() {
    this.showNecessarySetOfExpansionJointsAndSupports24 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports24 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports25 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports25() {
    this.showNecessarySetOfExpansionJointsAndSupports25 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports25 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports26 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports26() {
    this.showNecessarySetOfExpansionJointsAndSupports26 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports26 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports27 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports27() {
    this.showNecessarySetOfExpansionJointsAndSupports27 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports27 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports28 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports28() {
    this.showNecessarySetOfExpansionJointsAndSupports28 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports28 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports29 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports29() {
    this.showNecessarySetOfExpansionJointsAndSupports29 = true;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports29 = false;
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports30 = true;
  }
  addNecessarySetOfExpansionJointsAndSupports30() {
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports30 = false;
    this.showNecessarySetOfExpansionJointsAndSupports30 = true;
  }



// Vertical Pipeline Parameters
// Параметры вертикального трубопровода
//
  addVerticalPipelineParameters2() {
    this.showVerticalPipelineParameters2 = true;
    this.showBtnAddVerticalPipelineParameters2 = false;
    this.showBtnAddVerticalPipelineParameters3 = true;
  }
  addVerticalPipelineParameters3() {
    this.showVerticalPipelineParameters3 = true;
    this.showBtnAddVerticalPipelineParameters3 = false;
    this.showBtnAddVerticalPipelineParameters4 = true;
  }
  addVerticalPipelineParameters4() {
    this.showVerticalPipelineParameters4 = true;
    this.showBtnAddVerticalPipelineParameters4 = false;
    this.showBtnAddVerticalPipelineParameters5 = true;
  }
  addVerticalPipelineParameters5() {
    this.showVerticalPipelineParameters5 = true;
    this.showBtnAddVerticalPipelineParameters5 = false;
    this.showBtnAddVerticalPipelineParameters6 = true;
  }
  addVerticalPipelineParameters6() {
    this.showVerticalPipelineParameters6 = true;
    this.showBtnAddVerticalPipelineParameters6 = false;
    this.showBtnAddVerticalPipelineParameters7 = true;
  }
  addVerticalPipelineParameters7() {
    this.showVerticalPipelineParameters7 = true;
    this.showBtnAddVerticalPipelineParameters7 = false;
    this.showBtnAddVerticalPipelineParameters8 = true;
  }
  addVerticalPipelineParameters8() {
    this.showVerticalPipelineParameters8 = true;
    this.showBtnAddVerticalPipelineParameters8 = false;
    this.showBtnAddVerticalPipelineParameters9 = true;
  }
  addVerticalPipelineParameters9() {
    this.showVerticalPipelineParameters9 = true;
    this.showBtnAddVerticalPipelineParameters9 = false;
    this.showBtnAddVerticalPipelineParameters10 = true;
  }
  addVerticalPipelineParameters10() {
    this.showVerticalPipelineParameters10 = true;
    this.showBtnAddVerticalPipelineParameters10 = false;
    this.showBtnAddVerticalPipelineParameters11 = true;
  }
  addVerticalPipelineParameters11() {
    this.showVerticalPipelineParameters11 = true;
    this.showBtnAddVerticalPipelineParameters11 = false;
    this.showBtnAddVerticalPipelineParameters12 = true;
  }
  addVerticalPipelineParameters12() {
    this.showVerticalPipelineParameters12 = true;
    this.showBtnAddVerticalPipelineParameters12 = false;
    this.showBtnAddVerticalPipelineParameters13 = true;
  }
  addVerticalPipelineParameters13() {
    this.showVerticalPipelineParameters13 = true;
    this.showBtnAddVerticalPipelineParameters13 = false;
    this.showBtnAddVerticalPipelineParameters14 = true;
  }
  addVerticalPipelineParameters14() {
    this.showVerticalPipelineParameters14 = true;
    this.showBtnAddVerticalPipelineParameters14 = false;
    this.showBtnAddVerticalPipelineParameters15 = true;
  }
  addVerticalPipelineParameters15() {
    this.showVerticalPipelineParameters15 = true;
    this.showBtnAddVerticalPipelineParameters15 = false;
    this.showBtnAddVerticalPipelineParameters16 = true;
  }
  addVerticalPipelineParameters16() {
    this.showVerticalPipelineParameters16 = true;
    this.showBtnAddVerticalPipelineParameters16 = false;
    this.showBtnAddVerticalPipelineParameters17 = true;
  }
  addVerticalPipelineParameters17() {
    this.showVerticalPipelineParameters17 = true;
    this.showBtnAddVerticalPipelineParameters17 = false;
    this.showBtnAddVerticalPipelineParameters18 = true;
  }
  addVerticalPipelineParameters18() {
    this.showVerticalPipelineParameters18 = true;
    this.showBtnAddVerticalPipelineParameters18 = false;
    this.showBtnAddVerticalPipelineParameters19 = true;
  }
  addVerticalPipelineParameters19() {
    this.showVerticalPipelineParameters19 = true;
    this.showBtnAddVerticalPipelineParameters19 = false;
    this.showBtnAddVerticalPipelineParameters20 = true;
  }
  addVerticalPipelineParameters20() {
    this.showVerticalPipelineParameters20 = true;
    this.showBtnAddVerticalPipelineParameters20 = false;
    this.showBtnAddVerticalPipelineParameters21 = true;
  }
  addVerticalPipelineParameters21() {
    this.showVerticalPipelineParameters21 = true;
    this.showBtnAddVerticalPipelineParameters21 = false;
    this.showBtnAddVerticalPipelineParameters22 = true;
  }
  addVerticalPipelineParameters22() {
    this.showVerticalPipelineParameters22 = true;
    this.showBtnAddVerticalPipelineParameters22 = false;
    this.showBtnAddVerticalPipelineParameters23 = true;
  }
  addVerticalPipelineParameters23() {
    this.showVerticalPipelineParameters23 = true;
    this.showBtnAddVerticalPipelineParameters23 = false;
    this.showBtnAddVerticalPipelineParameters24 = true;
  }
  addVerticalPipelineParameters24() {
    this.showVerticalPipelineParameters24 = true;
    this.showBtnAddVerticalPipelineParameters24 = false;
    this.showBtnAddVerticalPipelineParameters25 = true;
  }
  addVerticalPipelineParameters25() {
    this.showVerticalPipelineParameters25 = true;
    this.showBtnAddVerticalPipelineParameters25 = false;
    this.showBtnAddVerticalPipelineParameters26 = true;
  }
  addVerticalPipelineParameters26() {
    this.showVerticalPipelineParameters26 = true;
    this.showBtnAddVerticalPipelineParameters26 = false;
    this.showBtnAddVerticalPipelineParameters27 = true;
  }
  addVerticalPipelineParameters27() {
    this.showVerticalPipelineParameters27 = true;
    this.showBtnAddVerticalPipelineParameters27 = false;
    this.showBtnAddVerticalPipelineParameters28 = true;
  }
  addVerticalPipelineParameters28() {
    this.showVerticalPipelineParameters28 = true;
    this.showBtnAddVerticalPipelineParameters28 = false;
    this.showBtnAddVerticalPipelineParameters29 = true;
  }
  addVerticalPipelineParameters29() {
    this.showVerticalPipelineParameters29 = true;
    this.showBtnAddVerticalPipelineParameters29 = false;
    this.showBtnAddVerticalPipelineParameters30 = true;
  }
  addVerticalPipelineParameters30() {
    this.showBtnAddNecessarySetOfExpansionJointsAndSupports30 = false;
    this.showNecessarySetOfExpansionJointsAndSupports30 = true;
    this.showVerticalPipelineParameters30 = true;
    this.showBtnAddVerticalPipelineParameters30 = false;
  }





}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}



