import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: JSON.parse(   window.localStorage.getItem("todo"))
}
const setPersist = (todos) => window.localStorage.setItem("todo", JSON.stringify(todos));

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
      saveTodo: (state,action) => {
          const todo = state.todoList.push(action.payload);
          setPersist(state.todoList)
        //   window.localStorage.setItem("todo", JSON.stringify(todo));
          return { ...state, todos: todo? todo : ''}
      },

      setCheck: (state,action) => {
          state.todoList.map(item => {
              if (action.payload === item.id)
              {
                  if(item.done === true)
                  {
                      item.done = false
                  }
                  else {
                      item.done=true
                  }
              }
          })
      }
  }
});

export const { saveTodo,setCheck } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList
export default todoSlice.reducer