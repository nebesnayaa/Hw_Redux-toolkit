import { setLastName } from "../slices/user/user-slice";
const InputLastName = ({ props }: any) => {
  return (
    <div className="input-field col s6">
      <input
        id="last_name"
        type="text"
        className="validate"
        onChange={(e) => {
          props(setLastName(e.target.value));
        }}
      />
      <label htmlFor="last_name">Last Name</label>
    </div>
  );
};
export default InputLastName;
