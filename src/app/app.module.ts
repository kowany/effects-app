import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// NGRX

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effectsArray } from './store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducer';

// ENVIRONMENT

import { environment } from '../environments/environment'; // Angular CLI environemnt

// Modules

import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AppRoutingModule } from './app-routing.module';

// Components

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot( effectsArray ),
    SharedModule,
    UsuariosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
