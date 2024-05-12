import { setFirstName } from "../slices/user/user-slice";
const InputFirstName = ({ props }: any) => {
  return (
    <div className="input-field col s6">
      <input
        id="first_name"
        type="text"
        className="validate"
        onChange={(e) => {
          props(setFirstName(e.target.value));
        }}
      />
      <label htmlFor="first_name">First Name</label>
    </div>
  );
};
export default InputFirstName;
