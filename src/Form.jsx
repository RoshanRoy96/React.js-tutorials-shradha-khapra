function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form was submitted");
}

function Form() {
  return (
    <form>
      <input placeholder="write something...." />
      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}

export default Form;
