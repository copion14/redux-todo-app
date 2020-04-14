import { createReducer, on } from '@ngrx/store';
import * as fromFiltro from './filter.actions'

export const initialState: fromFiltro.filtrosValidos = 'todos';

const _filtrosReducer = createReducer(initialState,

  on(fromFiltro.SET_FILTRO, (state, { filtro }) => {
    return filtro;
  }),

);


export function filtrosReducer(state, action) {
  return _filtrosReducer(state, action);
}
