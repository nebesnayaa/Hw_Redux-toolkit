import { useSelector } from "react-redux";

const OutputLastName = () => {
  const last_name = useSelector((state: any) => {
    return state.user.lastName;
  });
  return (
    <div className="input-field col s6">
      <div className="card-panel">
        <span className="white-text purple darken-2">{last_name}</span>
      </div>
    </div>
  );
};
export default OutputLastName;
