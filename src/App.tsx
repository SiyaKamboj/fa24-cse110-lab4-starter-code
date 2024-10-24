import "bootstrap/dist/css/bootstrap.min.css";
import { MyBudgetTracker } from "./views/MyBudgetTracker";
import { AppContext } from "./context/AppContext";
import { Expense } from "./types/types";
import { useState } from "react";

const App = () => {
  // HINT: Wrap the MyBudgetTracker component with AppContextProvider
  const [expenses, setExpenses] = useState<Expense[]>([]);
  
  return(
    <AppContext.Provider value={{ expenses, setExpenses }}>
      <MyBudgetTracker />
    </AppContext.Provider>
  ); 
};

export default App;
