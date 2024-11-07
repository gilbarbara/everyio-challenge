import { DragEvent } from 'react';
import { Flex, H4, NonIdealState } from '@gilbarbara/components';

import type { Column } from './config';
import ToDo from './ToDo';
import { useAppState } from './utils/context';

export default function Column(props: Column) {
  const { id, name } = props;
  const { setAppState, state } = useAppState();

  const columnTodos = state.todos.filter(todo => todo.columnId === id);

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent) => {
    const sourceId = event.dataTransfer.getData('sourceId');

    const todos = state.todos.map(todo => {
      if (todo.id === sourceId) {
        return {
          ...todo,
          columnId: id,
        };
      }

      return todo;
    });

    setAppState({ todos });
  };

  const content = columnTodos.length ? (
    columnTodos.map(todo => <ToDo key={todo.id} {...todo} />)
  ) : (
    <NonIdealState color="gray.300" description="No tasks yet" icon="tasklist" title={null} />
  );

  return (
    <Flex
      data-component-name="ChallengeColumn"
      data-id={id}
      direction="column"
      flex
      minHeight="60vh"
      p="md"
      radius="md"
      shadow="mid"
    >
      <H4 align="center">{name}</H4>
      <Flex
        align="stretch"
        data-component-name="TodoList"
        direction="column"
        flex
        gap="md"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {content}
      </Flex>
    </Flex>
  );
}
