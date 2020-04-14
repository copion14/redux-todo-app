import { createReducer, on } from '@ngrx/store';
import * as TodoAction from './todo.actions'
import { Todo } from './models/todo.model';


const todo1 = new Todo('Vencer a thanos');
const todo2 = new Todo('Salvar al mundo');
// todo1.completado = true;

export const initialState: Todo[] = [todo1, todo2];

const _todosReducer = createReducer(initialState,
  on(TodoAction.AGREGAR_TODO_ACTION, (state, { texto }) => {
    const todo = new Todo(texto);
    return [...state, todo];
  }),
  on(TodoAction.TOGGLE_TODO_ACTION, (state, { id }) => {

    return state.map((todoEdit) => {
      if (todoEdit.id === id) {
        return { ...todoEdit, completado: !todoEdit.completado };
      } else {
        return todoEdit;
      }
    })
  }),

  on(TodoAction.EDITAR_TODO_ACTION, (state, { id, texto }) => {


    return state.map((todoEdit) => {
      if (todoEdit.id === id) {
        return { ...todoEdit, texto: texto };
      } else {
        return todoEdit;
      }
    })
  }),

  on(TodoAction.BORRAR_TODO_ACTION, (state, { id }) => {
    return state.filter(todo => todo.id !== id);
  }),

  on(TodoAction.MARCAR_TODOS, (state, { completado }) => {

    return state.map(todoEdit => {
      return { ...todoEdit, completado: completado };

    })

  }),

  on(TodoAction.BORRAR_COMPLETADOS, (state) => {
    return state.filter(todo => !todo.completado);
  }),

);

export function todosreducer(state, action) {
  return _todosReducer(state, action);
}
