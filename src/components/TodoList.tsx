import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { todosAtom, toggleTodoAtom, updadteTodoAtom, removeTodoAtom } from "../store";

function TodoListItems() {
  const [todos] = useAtom(todosAtom);
  const [,toggleTodo] = useAtom(toggleTodoAtom);
  const [,upddateTodo] = useAtom(updadteTodoAtom);
  const [,removeTodo] = useAtom(removeTodoAtom);
  return (
    <>
      {todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
            checked={todo.done}
            onChange={()=> toggleTodo(todo.id)}
          />
          <Input mx={2} value={todo.text} onChange={(event:any)=>
            upddateTodo({id: todo.id, text:event.target.value})
          } />
          <Button onClick={(event:any)=> removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
