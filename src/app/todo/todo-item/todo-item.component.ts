import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { appState } from 'src/app/app.reducers';
import { TOGGLE_TODO_ACTION, EDITAR_TODO_ACTION, BORRAR_TODO_ACTION } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtNombreFisico') txtNombreFisico: ElementRef;
  editando: boolean

  checkField: FormControl;
  txtInput: FormControl;
  constructor(private store: Store<appState>) {

  }

  ngOnInit(): void {
    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required)

    this.checkField.valueChanges.subscribe(value => {
      this.store.dispatch(TOGGLE_TODO_ACTION({ id: this.todo.id }))
    })
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtNombreFisico.nativeElement.select();
    }, 1);
  }
  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid)
      return;

    if (this.txtInput.value === this.todo.texto) {
      return;
    }

    this.store.dispatch(EDITAR_TODO_ACTION({ id: this.todo.id, texto: this.txtInput.value }));

  }
  borrarTodo() {
    this.store.dispatch(BORRAR_TODO_ACTION({ id: this.todo.id }));
  }
}
