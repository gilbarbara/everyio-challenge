import { FormEvent } from 'react';
import { Box, Button, Flex, Icon, Input } from '@gilbarbara/components';
import { createId } from '@paralleldrive/cuid2';

import { ToDo } from './config';
import { useAppState } from './utils/context';

export default function Form() {
  const {
    setAppState,
    state: { columns, todos },
  } = useAppState();

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const content = formData.get('content') as string;

    const newTodo: ToDo = {
      id: createId(),
      content,
      columnId: columns[0].id,
    };

    setAppState({
      todos: [...todos, newTodo],
    });

    event.currentTarget.reset();
  };

  return (
    <Box as="form" data-component-name="ChallengeForm" method="POST" onSubmit={handleSubmitForm}>
      <Flex gap="xs">
        <Input name="content" placeholder="Add a new task" required width="280px" />
        <Button type="submit">
          <Icon name="plus-heavy" />
        </Button>
      </Flex>
    </Box>
  );
}
