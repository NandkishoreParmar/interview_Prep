import { useRef } from "react";
 const UncontrolledInput = () => {
  const inputRef = useRef();
  const handleClick = () => alert(inputRef.current.value);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Show</button>
    </>
  );
}

export default UncontrolledInput;
