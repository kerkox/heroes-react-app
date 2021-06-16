import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

  const { dispatch} = useContext(AuthContext)

  const handleLogin = () => {
    const payload = {
      name:'Paul',
      logged:true
    }
    dispatch({
      type: types.login,
      payload
    });
    history.push('/')
  }
  return (
    <div className="container  mt-5">
      <h1>LoginScreen</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  )
}
