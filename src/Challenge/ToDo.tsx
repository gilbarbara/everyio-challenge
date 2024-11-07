import { DragEvent, MouseEvent, useState } from 'react';
import { Box, Button, ButtonUnstyled, Flex, FlexInline, Icon } from '@gilbarbara/components';

import type { ToDo } from './config';
import { useAppState } from './utils/context';

export default function ToDo(props: ToDo) {
  const { columnId, content, id } = props;
  const [opacity, setOpacity] = useState(1);
  const {
    setAppState,
    state: { columns, todos },
  } = useAppState();

  const firstColumnId = columns[0].id;
  const lastColumnId = columns[columns.length - 1].id;

  const getTargetColumnId = (type: string) => {
    const index = columns.findIndex(column => column.id === columnId);
    const nextColumn = type === 'next' ? columns[index + 1] : columns[index - 1];

    if (!nextColumn) {
      return columnId;
    }

    return nextColumn.id;
  };

  const handleClickMove = (event: MouseEvent<HTMLButtonElement>) => {
    const { type = '' } = event.currentTarget.dataset;

    const canBeMoved = type === 'next' ? columnId !== lastColumnId : columnId !== firstColumnId;

    if (!columnId || !id || !canBeMoved) {
      return;
    }

    setAppState({
      todos: todos?.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            columnId: getTargetColumnId(type),
          };
        }

        return todo;
      }),
    });
  };

  const handleClickRemove = (event: MouseEvent<HTMLButtonElement>) => {
    const { id: taskId = '' } = event.currentTarget.dataset;

    if (!taskId) {
      return;
    }

    setAppState({ todos: todos?.filter(todo => todo.id !== taskId) });
  };

  const handleDragStart = (event: DragEvent) => {
    event.dataTransfer.clearData();
    // Set the drag's format and data.
    // Use the event target's id for the data
    event.dataTransfer.setData('sourceId', event.currentTarget.id);
    setOpacity(0.6);
  };

  const handleDragEnd = () => {
    setOpacity(1);
  };

  return (
    <Box
      bg="white"
      data-column-id={columnId}
      data-component-name="ChallengeToDo"
      data-id={id}
      draggable
      id={id}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      opacity={opacity}
      p="xs"
      radius="md"
      shadow="low"
    >
      <Flex align="center" gap="xs" justify="space-between" textAlign="center">
        <Button
          bg="red.300"
          data-component-name="MoveToDoLeft"
          data-type="previous"
          disabled={columnId === firstColumnId}
          iconOnly
          onClick={handleClickMove}
          size="sm"
        >
          <Icon name="arrow-left" size={20} />
        </Button>
        <FlexInline data-component-name="ToDoContent" gap="xs">
          {content}
          <ButtonUnstyled
            aria-label="Remove task"
            data-component-name="RemoveTodo"
            data-id={id}
            onClick={handleClickRemove}
          >
            <Icon name="trash" />
          </ButtonUnstyled>
        </FlexInline>
        <Button
          bg="green.300"
          data-component-name="MoveToDoRight"
          data-type="next"
          disabled={columnId === lastColumnId}
          iconOnly
          onClick={handleClickMove}
          size="sm"
        >
          <Icon name="arrow-right" size={20} />
        </Button>
      </Flex>
    </Box>
  );
}
