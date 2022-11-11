import React, { Component } from "react";
import TodoList from "./List";

export default class Form extends Component {

  constructor(props) { 

    super(props)
    
    this.state = {
      inputData: "",
      todoItems: ["Do Exercise","Create React Project"],
    }
  }

  changeTodoApp = (event) => { 
    this.setState({ inputData: event.target.value });
    //alert(this.state.inputData);
  }

  handleSubmit = (event) => { 
   // alert(`$( this.state.inputData)`)
    if (this.state.inputData !== '') { 
      let newItem = [...this.state.todoItems, this.state.inputData];
      this.setState({
        todoItems: newItem,
        inputData: ""
      })
    }
  }

  deleteItem = (index) => { 
    let original = [...this.state.todoItems];
    let left = original.filter((value, key) => { 
      return index!==key;
    })
    this.setState({
      original:left
    })

    
    
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <div className="row justify-content-center">
            <div
              className="col-md-10"
              style={{
                border: "2px solid #cdcdcd",
                borderRadius: "30px",
                boxShadow: "2px 2px 2px 2px #cdcdcd",
                padding: "50px",
              }}
            >
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label align-left">
                    <h1>To do Task</h1>
                  </label>
                    
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Type Task to do"
                    onChange={this.changeTodoApp }
                    value ={this.state.inputData}
                  />
                </div>

                <button type="button" className="btn btn-primary w-100">
                  <span onClick={this.handleSubmit}>
                    Add
                  </span>
                    
                </button>
              </form>
              <TodoList items={this.state.todoItems} deleteItem={this.deleteItem} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
