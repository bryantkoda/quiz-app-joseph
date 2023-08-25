import React, { useState } from "react";
export const DataContext = React.createContext([]);

const DataProvider = ({ children }) => {
  const [questions, setQuestionsList] = useState([]);
  return (
    <DataContext.Provider
      value={{
        questions,
        setQuestionsList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
