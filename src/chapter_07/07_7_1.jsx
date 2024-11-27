import { useEffect, useState } from "react";

function Mycomponent(props) {
  const [name, setName] = useState("Inje");

  if (name !== "") {
    useEffect(() => {
      // ...
    });
  }

  // ...
}
