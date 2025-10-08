function handleClick(event) {
  console.log("Hello!");
  console.log(event);
}

function handleMouseOver() {
  console.log("Bye");
}

function handleDblClick() {
  console.log("you double clicked");
}

function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim atque nam
        ex possimus libero quod fugiat saepe molestias voluptatem? Odit optio
        alias ducimus laboriosam quisquam consequuntur maiores, obcaecati
        doloremque recusandae!
      </p>
      <button onDoubleClick={handleDblClick}>dbl click!</button>
    </div>
  );
}

export default Button;
