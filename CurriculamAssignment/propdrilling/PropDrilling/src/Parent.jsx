import Child from './Child';

function Parent({ message }) {
  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid gray' }}>
      <h2>Parent Component</h2>
      <p>Received message: {message}</p>
      <Child message={message} />
    </div>
  );
}

export default Parent;