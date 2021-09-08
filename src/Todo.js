import React from "react";

function Todo(props) {
  return (
    <div>
      {props.items.map((item, i) => {
        return (
          <li style={{ listStyle: "none" }} key={i}>
            {item}
            <button
              onClick={() => {
                props.handleDelete(i);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default Todo;
