import { UserItem } from 'components/User/UserItem';
import { IUser } from 'types/User';
import styles from './UserList.module.scss';

interface UserListProps {
  users: IUser[]
  removeUser: (id: number) => void
}

export const UserList = ({ users, removeUser }: UserListProps) => {



  return (
    <ul className={styles.userList}>
      {users.map(user => <UserItem id={user.id} key={user.id} name={user.name} age={user.age} removeUser={removeUser} />)}
    </ul>
  )
};
