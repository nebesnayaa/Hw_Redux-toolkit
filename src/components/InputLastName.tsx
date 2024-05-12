import { setLastName } from "../slices/user/user-slice";
import { useDispatch } from "react-redux";
const InputLastName = () => {
  const dispacth = useDispatch();
  return (
    <div className="input-field col s6">
      <input
        id="last_name"
        type="text"
        className="validate"
        onChange={(e) => {
          dispacth(setLastName(e.target.value));
        }}
      />
      <label htmlFor="last_name">Last Name</label>
    </div>
  );
};
export default InputLastName;
