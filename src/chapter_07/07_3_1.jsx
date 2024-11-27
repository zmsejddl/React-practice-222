import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷하게 작동합니다.
  useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다.`;
  });

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}
