import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { appState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';
import * as fromFiltroAction from '../../filter/filter.actions'
// import { FilterPipe } from '../../filter/filter.pipe';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];

  filtro: fromFiltroAction.filtrosValidos
  constructor(private store: Store<appState>) {  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.todos = state.todos
      this.filtro = state.filtro

    })
  }

}
