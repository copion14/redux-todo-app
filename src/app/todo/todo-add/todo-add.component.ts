import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from '../../app.reducers';
import * as TodoActions from '../todo.actions'
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;


  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo() {


    if (this.txtInput.invalid)
      return;

    this.store.dispatch(TodoActions.AGREGAR_TODO_ACTION({ texto: this.txtInput.value }))
    this.txtInput.setValue('');
  }
}
