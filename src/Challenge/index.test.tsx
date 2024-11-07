import { fireEvent, render, screen } from '@testing-library/react';

import Challenge from './index';

vi.mock('@gilbarbara/hooks', async () => {
  const hooks = await vi.importActual('@gilbarbara/hooks');

  return {
    ...hooks,
    // @ts-expect-error
    useLocalStorageState: (_: string, state: any) => hooks.useSetState(state),
  };
});

describe('Challenge', () => {
  it('should render properly', () => {
    render(<Challenge />);

    expect(screen.getByTestId('Challenge')).toMatchSnapshot();
  });

  it('should add a new task, move it around and remove it', () => {
    render(<Challenge />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New task' } });
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByTestId('ChallengeToDo').dataset.columnId).toBe('todo');

    fireEvent.click(screen.getByTestId('MoveToDoRight'));
    expect(screen.getByTestId('ChallengeToDo').dataset.columnId).toBe('in-progress');

    fireEvent.click(screen.getByTestId('MoveToDoLeft'));
    expect(screen.getByTestId('ChallengeToDo').dataset.columnId).toBe('todo');

    fireEvent.click(screen.getByTestId('RemoveTodo'));
    expect(screen.queryByTestId('ChallengeToDo')).not.toBeInTheDocument();
  });
});
