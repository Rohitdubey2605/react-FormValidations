import { useState } from "react";
// import { useEffect } from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched]  = useState(false);

  // useEffect({
  //   if(enteredNameIsValid)
  //   {
  //     console.log('Name Input is Valid.');
  //   }
  // },[enteredNameIsValid]);

  const enteredNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim().length === 0) {
      setEnteredNameIsValid(false);
      return;
    } 
    setEnteredName(event.target.value);
    console.log(enteredName);

    // const enteredValue = nameInputRef.current.value;

    // console.log(enteredValue);
    setEnteredName("");
    setEnteredNameIsValid(true);
    setEnteredNameTouched(false);
  };

   const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={enteredNameChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
