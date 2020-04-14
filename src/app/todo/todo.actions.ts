import { createAction, props } from '@ngrx/store';

export const AGREGAR_TODO_ACTION = createAction('[TODO] Agregar todo', props<{ texto: string }>());
export const TOGGLE_TODO_ACTION = createAction('[TODO] Toggle todo', props<{ id: number }>());
export const EDITAR_TODO_ACTION = createAction('[TODO] Editar todo', props<{ id: number, texto: string }>());
export const BORRAR_TODO_ACTION = createAction('[TODO] Borrar todo', props<{ id: number }>());

export const MARCAR_TODOS = createAction('[TODO] Marcar todo', props<{ completado: boolean }>());
export const BORRAR_COMPLETADOS = createAction('[TODO] Borrar_completados todo');
