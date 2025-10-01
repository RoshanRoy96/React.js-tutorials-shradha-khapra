function Title() {
  return <h1>I am the Title!</h1>;
}

function Multiply() {
  let name = "Roshan";
  return (
    <div>
      <p>2 * 2 = {2 * 2}</p>
      <h1>Hi, {name.toUpperCase()}</h1>
    </div>
  );
}

export { Title, Multiply };
