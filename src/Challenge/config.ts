export interface Column {
  id: string;
  name: string;
}

export interface ToDo {
  columnId: string;
  content: string;
  id: string;
}

export interface AppState {
  columns: Array<Column>;
  todos: Array<ToDo>;
}

export const appState = {
  columns: [
    { id: 'todo', name: 'To Do' },
    { id: 'in-progress', name: 'In Progress' },
    { id: 'done', name: 'Done' },
  ],
  todos: [] as Array<ToDo>,
} satisfies AppState;
