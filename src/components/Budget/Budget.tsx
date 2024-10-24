import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const Budget = () => {
  const { budget, setBudget } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  //initialize newBudget to old budget amount
  const [ newBudget, setNewBudget ] = useState(budget);

  // Toggle between edit and view mode
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Save the new budget value and exit edit mode
  const handleSaveClick = () => {
    setBudget(newBudget); // Update the budget
    setIsEditing(false);  // Exit edit mode
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewBudget(Number(event.target.value));
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <div>
        {/*if editing, show input mode; otherwise, show budget */}
        {isEditing ? (
          <input
            type="number"
            value={newBudget}
            onChange={handleInputChange}
            className="form-control"
          />
        ) : (
          <div>Budget: ${budget}</div>
        )}
      </div>
      <div>
        {isEditing ? (
          <button className="btn btn-primary" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Budget;
