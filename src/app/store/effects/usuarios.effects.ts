import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as usuariosActions from '../actions';

import { UsuarioService } from '../../services/usuario.service';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class UsuariosEffects {

    constructor( private actions$: Actions,
                 public usuarioService: UsuarioService ) { }

    @Effect( )
    cargarUsuarios$ = this.actions$.ofType( usuariosActions.CARGAR_USUARIOS )
        .pipe(
            switchMap( () => {
                return this.usuarioService.getUser()
                    .pipe(
                        map( users => new usuariosActions.CargarUsuariosSuccess( users ) ),
                        catchError( (error => of(new usuariosActions.CargarUsuariosFail( error ))) )
                    );
            } )
        );
}
