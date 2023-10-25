import JavaScript from "./JavaScript";
import DynamicStyling from "./DynamicStyling";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todo/TodoList";
import { useSelector } from "react-redux";

function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
    return (
      <div>
        <h1>Assignment 3</h1>
        <ul className="list-group">
          {todos.map((todo) => (
            <li className="list-group-item" key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
        <JavaScript/>
        <DynamicStyling/>
        <Classes/>
        <Styles/>
        <ConditionalOutput/>
        <TodoList/>
      </div>
    );
  }
export default Assignment3;