import { UserForm } from "components/User/UserForm";
import { UserList } from "components/User/UserList";
import { useState } from "react";
import { IUser } from "types/User";


const INITIAL_ARRAY = [
  { id: 1, name: 'Egor', age: 33 },
  { id: 2, name: 'Elena', age: 40 },
  { id: 3, name: 'Olga', age: 32 },
]


const App = () => {
  const [users, setUsers] = useState<IUser[]>(INITIAL_ARRAY)

  const handleUserInfo = (newUser: IUser) => {
    setUsers((prev) => {
      return [...prev, newUser]
    })
  }
  const removeUser = (id: number) => {
    const array = users.filter(user => user.id !== id)
    setUsers(() => array)
  }


  return (
    <div className="App">
      <UserForm handleUserInfo={handleUserInfo} />
      <UserList users={users} removeUser={removeUser} />
    </div>
  );
}

export default App;
