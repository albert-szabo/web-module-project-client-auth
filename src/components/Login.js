import React from 'react';

const Login = () => {
    return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor='username'>Username:</label>
          <input id='username'/>
        </div>
  
        <div>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password'/>
        </div>
  
        <button>Submit</button>
      </form>
    </div>
    )
}

export default Login;