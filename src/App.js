import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario cart" },
    ],
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />

        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

// import React, { useState } from "react";
// import Todos from "./Todos";
// import AddTodo from "./AddTodo";

// const App = () => {
//   const [todos, setTodos] = useState([
//     { id: 1, content: "buy some milk" },
//     { id: 2, content: "play mario cart" },
//   ]);

//   const deleteTodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   const addTodo = (todoContent) => {
//     const newTodo = { id: Math.random(), content: todoContent };
//     setTodos([...todos, newTodo]);
//   };

//   return (
//     <div className="container">
//       <h1 className="center blue-text">Todo's</h1>
//       <Todos todos={todos} deleteTodo={deleteTodo} />
//       <AddTodo addTodo={addTodo} />
//     </div>
//   );
// };

// export default App;
