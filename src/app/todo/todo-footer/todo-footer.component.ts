import { Component, OnInit } from '@angular/core';
import * as fromFiltrosAction from '../../filter/filter.actions'
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';
import { BORRAR_COMPLETADOS } from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltrosAction.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltrosAction.filtrosValidos;
  pendientes: number;

  constructor(
    private store: Store<appState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro
      this.contarPendientes(state.todos);
    })
  }

  cambiarFiltro(filtro: fromFiltrosAction.filtrosValidos) {
    this.store.dispatch(fromFiltrosAction.SET_FILTRO({ filtro: filtro }))
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => {
      return todo.completado === false;
    }).length

  }
  limpiarCompletados(){
    this.store.dispatch(BORRAR_COMPLETADOS());
  }
}
