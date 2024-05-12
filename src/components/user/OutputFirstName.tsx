import { useSelector } from "react-redux";

const OutputFirstName = () => {
  const first_name = useSelector((state: any) => {
    return state.user.firstName;
  });
  return (
    <div className="input-field col s6">
      <div className="card-panel">
        <span className="# white-text purple darken-2">{first_name}</span>
      </div>
    </div>
  );
};
export default OutputFirstName;
