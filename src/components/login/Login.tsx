import React, { Dispatch, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { loginStart } from '../../store/modules/user/userSlice';
const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const selector = useSelector((state) => state);

  console.log(selector);
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const handleLogin = () => {
    dispatch(loginStart({ username, password }));
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>button</button>
    </div>
  );
};

export default Login;
