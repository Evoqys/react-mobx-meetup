import { action, computed, observable } from "mobx";
import { Todo } from "./TodoModel";
 class ObservableTodoStore {
    @observable
    todos: Todo[] = [];
  
    @computed
    get completedTodosCount() {
      return this.todos.filter(
        todo => todo.completed
      ).length;
    }

  
    @action
    addTodo(task: string) {
      this.todos.push(new Todo(task));
    }
  }
  
 export const todoStore = new ObservableTodoStore();
    