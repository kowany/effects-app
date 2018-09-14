import { AppState } from './../../store/app.reducer';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as usuariosActions from './../../store/actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor( public store: Store<AppState> ) { }

  ngOnInit() {
    
    this.store.select('usuarios')
        .subscribe( usuarios => {
          this.usuarios = usuarios.users;
          this.loading = usuarios.loading;
          this.error = usuarios.error;
        } );

    this.store.dispatch( new usuariosActions.CargarUsuarios() );
  }

}
