import InputTodo from "./components/todos/InputTodo";
import User from "./components/user/User";

const App = () => {
  return (
    <div className="container">
      <User />
      <hr />
      <InputTodo />
      <hr />
    </div>
  );
};
export default App;
