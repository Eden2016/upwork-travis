import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { gateReducer } from './modules/stage-wizard/stage-wizard-page/store/gate.reducer';
import { fieldReducer } from './modules/opportunity-wizard/opportunity-wizard-page/field-set-up/store/field.reducer';
import { customActionReducer } from './modules/opportunity-wizard/opportunity-wizard-page/action-set-up/store/custom-action.reducer';
import { gateRuleReducer } from './modules/opportunity-wizard/opportunity-wizard-page/gate-rules/store/gate-rule.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      gates: gateReducer,
      fields: fieldReducer,
      customActions: customActionReducer,
      gateRules: gateRuleReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
