import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FillingComponent } from './filling/filling.component';
import { ResultsComponent } from './results/results.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CheckLicenseComponent } from './check-license/check-license.component';
import { AboutTheProgramComponent } from './about-the-program/about-the-program.component';
import { PipelineConfigurationComponent } from './pipeline-сonfiguration/pipeline-сonfiguration.component';
import { VerticalPipelineParameters } from './vertical-pipeline-parameters.component/vertical-pipeline-parameters.component';

import { OpenProjectComponent } from './open-project/open-project.component';
import { OpenСonfigurationComponent } from './open-configuration/open-configuration.component';
import { SaveProjectComponent } from './save-project/save-project.component';
import { SaveСonfigurationComponent } from './save-configuration/save-configuration.component';

import { DataService } from './_services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ResultsComponent,
    FillingComponent,
    AboutTheProgramComponent,
    VerticalPipelineParameters,
    PipelineConfigurationComponent,
    CheckLicenseComponent,

    OpenProjectComponent,
    SaveProjectComponent,
    OpenСonfigurationComponent,
    SaveСonfigurationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: '',                       component: VerticalPipelineParameters, pathMatch: 'full' },
      { path: 'pipeline-сonfiguration', component: PipelineConfigurationComponent },
      { path: 'about-the-program',      component: AboutTheProgramComponent },
      { path: 'results',                component: ResultsComponent },
      { path: 'filling',                component: FillingComponent },
      { path: 'check-license',          component: CheckLicenseComponent },
      { path: 'open-project',           component: OpenProjectComponent },
      { path: 'save-project',           component: SaveProjectComponent },
      { path: 'open-configuration',     component: OpenСonfigurationComponent },
      { path: 'save-configuration',     component: SaveСonfigurationComponent },
    ])
  ],
  providers: [DataService],

  bootstrap: [AppComponent]
})

export class AppModule { }
