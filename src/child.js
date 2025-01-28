function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      Hello {name}, you are {age} years old
    </div>
  );
}

export default ChildComponent;
