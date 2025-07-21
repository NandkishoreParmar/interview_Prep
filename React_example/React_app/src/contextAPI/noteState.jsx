import React,{useState} from "react";

import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [name, setName] = useState("Harry");
  return (
    <NoteContext.Provider value={{name,setName}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
