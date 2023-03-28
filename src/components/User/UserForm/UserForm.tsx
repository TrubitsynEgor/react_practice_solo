import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import { Modal } from 'components/UI/Modal';
import { useState } from 'react';
import { IUser } from 'types/User';
import styles from './UserForm.module.scss';

interface UserFormProps {
  handleUserInfo: (newUser: IUser) => void
}


export const UserForm = ({ handleUserInfo }: UserFormProps) => {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [nameIsValidate, setNameIsValidate] = useState(true)
  const [ageIsValidate, setAgeIsValidate] = useState(true)

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(+e.target.value)
  }
  const handleModalVisible = () => {
    setNameIsValidate(true)
    setAgeIsValidate(true)
  }


  const addNewUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (age <= 0) {
      setAgeIsValidate(false)
      return
    }
    if (name.trim().length === 0) {
      setNameIsValidate(false)
      return
    }
    setNameIsValidate(true)
    setAgeIsValidate(true)
    const newUser: IUser = {
      id: Math.random(),
      name,
      age,
    }
    handleUserInfo(newUser)
    setName('')
    setAge(0)

  }

  return (
    <form className={styles.userForm} onSubmit={(e) => addNewUser(e)}>
      {!nameIsValidate && <Modal onHandleModalVisible={handleModalVisible} className={styles.userFormModal}>Invalid name <p>Please entered valid name</p></Modal>}
      {!ageIsValidate && <Modal onHandleModalVisible={handleModalVisible} className={styles.userFormModal}>Invalid age <p>Please entered valid age</p></Modal>}

      <Input onChange={handleName} value={name} className={styles.userFormInput} type='text' name='name' placeholder='Entered name'>Name</Input>
      <Input onChange={handleAge} value={age} className={styles.userFormInput} type='number' name='age' placeholder='Entered age'>Age</Input>
      <Button className={styles.userFormBtn} type='submit'>Add user</Button>
    </form>
  )
};
