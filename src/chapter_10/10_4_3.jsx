const todoItems = todos.map((todo, index) => (
  // 아아템들의 고유한 ID가 없을 경우에만 사용해야 함
  <li key={index}>{todo.text}</li>
));
