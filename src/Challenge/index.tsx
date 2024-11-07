import React from 'react';
import { Box, Flex, Paragraph } from '@gilbarbara/components';

import Column from './Column';
import Form from './Form';
import { StateProvider, useAppState } from './utils/context';

function ChallengeComponent() {
  const { state } = useAppState();

  return (
    <Box data-component-name="Challenge" p="lg">
      <Flex data-component-name="Columns" gap="xl">
        {state.columns.map(column => (
          <Column {...column} key={column.id} />
        ))}
      </Flex>
      <Flex justify="space-between" mt="lg">
        <Form />
        <Paragraph color="gray.400">You can also drag and drop between columns.</Paragraph>
      </Flex>
    </Box>
  );
}

export default function Challenge() {
  return (
    <StateProvider>
      <ChallengeComponent />
    </StateProvider>
  );
}
