import { Usuario } from '../../models/usuario.model';
import * as fromUsuarios from '../actions';

export interface UsuariosState {
    users: Usuario[];
    laoded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuariosState = {
    users: [],
    laoded: false,
    loading: false,
    error: null
}

export function usuariosReducer( state = estadoInicial, action: fromUsuarios.UsuariosAcciones ): UsuariosState {

    switch ( action.type ) {

        case fromUsuarios.CARGAR_USUARIOS:
            return {
                ...state,
                loading: true,
                error: null
            };
        case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                laoded: true,
                users: [...action.usuarios]
            };
        case fromUsuarios.CARGAR_USUARIOS_FAIL:
            return {
                ...state,
                laoded: true,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };

        default:
            return state;

    }

}
