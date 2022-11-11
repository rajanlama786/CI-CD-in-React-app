import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <>
        <ul className="list-group my-3">
          {this.props.items.map((value, index) => {
            return (
              <>
                <React.Fragment key={index}>
                  <li className="list-group-item">
                    {index} {value}
                    <button
                      type="button"
                      className="btn btn-danger btn-sm w-2 mx-auto my-1"
                      onClick={() => {
                        this.props.deleteItem(index);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                </React.Fragment>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}
