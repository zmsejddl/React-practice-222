const root = ReactDOM.createRoot(rootNode);
root.render(<input value="hi" />);

setTimeout(function () {
  root.render(<input value={null} />);
}, 1000);
