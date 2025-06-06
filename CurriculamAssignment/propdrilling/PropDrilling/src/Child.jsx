function Child({ message }) {
  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid blue' }}>
      <h3>Child Component</h3>
      <p>Final destination for the message: <strong>{message}</strong></p>
    </div>
  );
}

export default Child;