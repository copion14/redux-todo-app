import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';
export const SET_FILTRO = createAction('[TODO] SetFiltro todo', props<{ filtro: filtrosValidos }>());
