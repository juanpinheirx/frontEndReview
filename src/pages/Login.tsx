import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import banner from '../assets/welcome_banner.svg';

import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';

function Login() {
  const { onLogin } = useContext(Context);

  const navigate = useNavigate();
  // const [userName, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onLogin(input.username);
    navigate('/todo');
  };

  return (
    <>
      <h1>Welcome!</h1>
      <img src={banner} />
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='text'
          name='username'
          id='username'
          placeholder='Enter your username.'
        />
        <input
          onChange={handleChange}
          type='password'
          name='password'
          id='password'
          placeholder='Enter your password.'
        />
        <p>Forgot password</p>
        <button>Sign in</button>
      </form>
    </>
  );
}

export default Login;
