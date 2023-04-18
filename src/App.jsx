import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { userAction } from './redux/actions/userActions'
import User from './components/User'

const App = () => {
  
  const dispatch = useDispatch()
  const usersList = useSelector(state => state.usersList)
  const {loading,users,error} = usersList

  useEffect(() => {
    dispatch(userAction())
  }, [dispatch])

  return (
    <>
    {
      loading ? <h2>...Loading</h2> : error ? <h2>{error}</h2> : 
       <User users={users}/>
    }
    </>
  )
}

export default App