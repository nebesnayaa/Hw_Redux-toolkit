import InputFirstName from "./InputFirstName";
import InputLastName from "./InputLastName";
import OutputFirstName from "./OutputFirstName";
import OutputLastName from "./OutputLastName";
import { useDispatch } from "react-redux";

const User = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="row">
        <InputFirstName props={dispatch} />
        <InputLastName props={dispatch} />
      </div>
      <div className="row">
        <OutputFirstName />
        <OutputLastName />
      </div>
    </>
  );
};
export default User;
