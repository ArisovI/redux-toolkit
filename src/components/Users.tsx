import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/use-redux'
import { fetchUsers } from '../store/slices/users'

const Users = () => {
  const { error, isLoading, users } = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])


  if (isLoading) {
    return <div>loading</div>
  }

  if (error) {
    return <div>Ошибка {error}</div>
  }

  return <div>{users.length && users.map((user) => <li>{user.name}</li>)}</div>
}

export default Users
