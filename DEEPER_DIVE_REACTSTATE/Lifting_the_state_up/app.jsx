// iss module hmme ye smjhaya gya h , ki jb hmm ek saath do file, jo aapas me phle, aur khud pr dependent hai 
// toh un dono ke jo function hai , umm dono me individually define krne k wajaye,, 
//  parent me hi defined kr de taaki , use krne me bhi aasan ho . . . .


import { useState } from "react";
import TodoForm from "./component/TodoForm";
import Todos from "./component/Todos";

function App() {
    
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Guitar", completed: false },
    { id: 2, title: "Learn React", completed: true },
  ]);

  // function 1
  const addTodo = (newTodo) => {
     setTodos((prev) => [...prev, newTodo]);
  };

  // function 2
  const removeTodo = (id) => {
     

    const newTodos = [];
    for (let todo of todos) {
      if (todo.id !== id) {
        newTodos.push(todo);
      }
    }
    setTodos(newTodos);
  };

  // # toogle using map
  const toogleCompleted = (id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div className="container">
      <h1 className="main-title">TodoList</h1> 

      {/* jaisa ki yha, hmm in dono me individually state nhi define kr rheah h  */}
      {/* yhi App me hi state define kr rheah h taki jo bhi hmme chaiye yha se use kr ske */}
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toogleCompleted={toogleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
