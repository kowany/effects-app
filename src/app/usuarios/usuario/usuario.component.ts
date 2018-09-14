import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from './../../store/app.reducer';
import { CargarUsuario } from './../../store/actions/usuario.actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  user: Usuario;
  loading: boolean;
  error: any;

  constructor( private router: ActivatedRoute,
               private store: Store<AppState> ) { }

  ngOnInit() {

    this.store.select('usuario')
        .subscribe( usuario => {
          this.user = usuario.user;
          this.loading = usuario.loading;
          this.error = usuario.error;
        } );
    this.router.params.subscribe( params => {
      const id = params['id'];
      this.store.dispatch( new CargarUsuario( id ) );
    });
  }

}
