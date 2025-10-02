function MsgBox({ userName, textColor }) {
  let style = { color: textColor };
  return (
    <div style={style}>
      <h2>{"Hello" + " " + userName}</h2>
    </div>
  );
}

export default MsgBox;
