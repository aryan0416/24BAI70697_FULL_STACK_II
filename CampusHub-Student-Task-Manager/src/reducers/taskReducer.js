// Task Reducer managing task state with required actions: ADD_TASK, DELETE_TASK, UPDATE_TASK, TOGGLE_TASK

export const TASK_ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  SET_TASKS: 'SET_TASKS'
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case TASK_ACTIONS.ADD_TASK:
      return [
        {
          id: action.payload.id || Date.now().toString(),
          title: action.payload.title,
          description: action.payload.description || '',
          priority: action.payload.priority || 'Medium',
          completed: action.payload.completed || false,
          deadline: action.payload.deadline || new Date().toISOString().split('T')[0]
        },
        ...state
      ];

    case TASK_ACTIONS.DELETE_TASK:
      return state.filter(task => task.id !== action.payload);

    case TASK_ACTIONS.UPDATE_TASK:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );

    case TASK_ACTIONS.TOGGLE_TASK:
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );

    case TASK_ACTIONS.SET_TASKS:
      return action.payload;

    default:
      return state;
  }
};
