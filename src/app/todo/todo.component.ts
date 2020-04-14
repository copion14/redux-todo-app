import { Component, OnInit } from '@angular/core';
import { MARCAR_TODOS } from './todo.actions';
import { Store } from '@ngrx/store';
import { appState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  completado = false;

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
  }
  toggleAll() {
    this.completado = !this.completado

    this.store.dispatch(MARCAR_TODOS({ completado: this.completado }))
  }

}
