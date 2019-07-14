import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './pages/About';
import uuid from 'uuid';
import './App.css';

class App extends React.Component {
  state = {
    
    //js object called todos
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Water my plant bbs',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go to the gym',
        completed: false
      },
    ]
  }

    markComplete = (id) => {
        this.setState({
          todos: this.state.todos.map(todo => {
            if(todo.id === id) {
              // here we need to toggle todo
              // if i set it to true, it will just stay true
              // that way if its completed and you click it again, its the opposite
              todo.completed = !todo.completed
            }
            return todo;
          }) 
        })
    }

    deleteTodo = (id) => {
      // filter out ids that don't match the id being clicked
      // basically we want to show other ids, not one we are deleting
      // spread operator copies curent array of todos
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }

    addTodo = (title) => {

        const newTodo = {
          id: uuid.v4(),
          title,
          completed: false
        }

        //concat returns new array with new todo item
        // NOTE: i didnt use push because push returns length (num) of new array
        this.setState({ todos: [...this.state.todos.concat(newTodo)]

        })
    }
    
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                  <React.Fragment>
                      <AddTodo addTodo={this.addTodo} />
                      <Todos 
                          todos={this.state.todos} 
                          markComplete={this.markComplete} 
                          deleteTodo={this.deleteTodo}
                      />
                  </React.Fragment>
              )} />
              <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
  )};
}

export default App;

//funtion component = stateless component / no lifecycle methods
//class componenent = stateful component with lifecycle methods


// ADD REST CALLS : https://www.youtube.com/watch?v=sBws8MSXN7A&t=1261s

