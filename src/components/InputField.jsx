/* eslint-disable react/prop-types */
const InputField = (props) => {
  return (
    <div>
      <input
        type={props.type}
        required
        id={props.id}
        className="w-[340px] rounded-xl p-1 border-[1px] border-[#A3A3A3] pr-2"
      />
      <label htmlFor="password" className="text-mainColor">
        {props.name}
      </label>
    </div>
  );
};

export default InputField;
