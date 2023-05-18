import React, { FC } from 'react';
import { Todo } from '../../types/Todo';
import { LoadingTodo } from '../LoadingTodo';
import { TodoComponent } from '../TodoComponent/TodoComponent';

interface Props {
  todos: Todo[];
  removeTodo: (todoData: Todo) => void;
  tempTodo: Todo | null;
  onChangeTodo: (todo: Todo, value: boolean | string) => void;
}

export const MainTodoApp: FC<Props> = React.memo(({
  todos,
  removeTodo,
  tempTodo,
  onChangeTodo,
}) => (
  <section className="todoapp__main">
    {todos.map((todo) => (
      tempTodo?.id !== todo.id
        ? (
          <TodoComponent
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            onChangeTodo={onChangeTodo}
          />
        )
        : <LoadingTodo key={todo.id} todo={tempTodo} />
    ))}

    {todos.every(({ id }) => id !== tempTodo?.id) && tempTodo && (
      <LoadingTodo todo={tempTodo} />
    )}
  </section>
));
