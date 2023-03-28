import styles from './UserItem.module.scss';

interface UserItemProps {
  name: string
  age: number
  removeUser: (id: number) => void
  id: number
}

export const UserItem = ({ id, name, age, removeUser }: UserItemProps) => {

  return (
    <li onClick={() => removeUser(id)} className={styles.userItem}>
      {name} - {age} years old
    </li>
  )
};
