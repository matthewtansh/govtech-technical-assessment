# Case Study 1

John found a bug where his age is not updated. It still remains as “25”. Could you fix the following code snippet?

```js
const [user, setUser] = useState({ name: "John", age: 25 });

const updateAge = () => {
  user.age = 26;
  setUser(user);
};
```

- John directly mutates the `user` object by setting its `age` property to `26`
- John calls `setUser` with the same object reference which remains unchanged
- React does not detect any state changes and does not re-render the component

```js
const updateAge = () => {
  setUser({ ...user, age: 26 });
};
```

- ensures immutability by creating a new object with the spread operator `...`
- calls `setUser()` with a new object reference
- React detects a state change and re-renders the component

# Case Study 2

Now we are keeping track of more users. However, original names are still displayed even though the method `updateUser` is called. Could you fix the following code snippet?

```js
const [users, setUsers] = useState([
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
]);

const updateUser = (id, newName) => {
  const user = users.find((u) => u.id === id);
  user.name = newName;
  setUsers(users);
};
```

- `users.find()` returns a reference to an object inside the `users` array
- `user` is now pointing to an object inside the `users` array
- John directly mutates the `users` array by setting the `name` property of `user` to `newName`
- John calls `setUsers()` with the same object reference which remains unchanged
- React does not detect any state changes and does not re-render the component

```js
const updateUser = (id, newName) => {
  setUsers(
    users.map((user) => (user.id === id ? { ...user, name: newName } : user)),
  );
};
```

- ensures immutability by creating a new array with `users.map()`
- calls `setUsers()` with a new object reference
- React detects a state change and re-renders the component

# Case Study 3

### 1. Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

### 2. Clone the Repository

Open a terminal (Command Prompt, PowerShell, or macOS Terminal) and run:

```git
git clone https://github.com/matthewtansh/govtech-technical-assessment.git
```

### 3. Navigate to the Project Directory

```sh
cd govtech-technical-assessment
```

### 4. Install Dependencies

```sh
npm install
```

### 5. Run the Application

```sh
npm run dev
```

### 6. Open in Browser

Once your browser and go to http://localhost:3000/
