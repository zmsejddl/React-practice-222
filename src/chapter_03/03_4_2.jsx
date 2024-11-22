function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Inje",
  lastName: "Lee",
};

const element = <h1>Hello, {formatName(user)}</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
