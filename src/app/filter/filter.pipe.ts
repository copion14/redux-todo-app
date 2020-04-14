import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';
import * as fromFiltroAction from '../filter/filter.actions'
@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFiltroAction.filtrosValidos): Todo[] {

    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado)
      case 'pendientes':
        return todos.filter(todo => !todo.completado)
      default:
        return todos;
    }
  }

}
