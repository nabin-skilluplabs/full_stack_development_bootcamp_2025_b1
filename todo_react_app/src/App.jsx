import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { createNewTodo, deleteTodoAction, getAllTodos, updateTodo } from "./actions/todo";

const schema = yup
  .object({
    title: yup.string().required('Title is required!')
  })
  .required()

function App() {
  const [todos, setTodos] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await createNewTodo(data);
    await populateTodos();
    setValue("title","");
  };

  async function populateTodos() {
    const allTodos = await getAllTodos();
    setTodos(allTodos.data);
  }

  useEffect(() => {
    (async () => {
      await populateTodos();
    })();
  }, []);

  async function deleteTodo(id) {
   const result =  confirm("Are you sure you want to delete this todo?");
   if(result) {
    await deleteTodoAction(id);
    
    await populateTodos();
   }
  }

  async function toggleTodo(event, id) {
    await updateTodo({
      id,
      isCompleted:event.target.checked
    });
    await populateTodos();
  }

  function editTitle(id) {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          isEditing: true
        }
      }
      return todo;
    }));
  }

  async function handleTitleChange(event, id) {
    const newTitle = event.target.value;
    if(event.key === 'Enter') {
      await updateTodo({
        id,
        title: newTitle
      });
      await populateTodos();
    }
  }
  return (
    <>
      <h2>To Do React App</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Add new task..." {...register("title")} />
        {
          errors.title && <p style={{color: "red"}}>{errors.title.message}</p>
        }
      </form>

      {
        todos?.map(todo=> (
          <div style={{textDecoration: todo.isCompleted ? 'line-through' : 'normal'}} key={todo.id}> 

          <input type="checkbox" checked={todo.isCompleted} onChange={(event) => toggleTodo(event, todo.id)}  />
          {
            todo.isEditing ? <input type="text" defaultValue={todo.title} onKeyDown={(event)=> handleTitleChange(event, todo.id)} /> : <span onClick={() => editTitle(todo.id)}>{todo.title} </span>
          }
          
          
          {todo.isCompleted ? "✅" : ""} <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          
          </div>
        ))
      }
    </>
  )
}

export default App
