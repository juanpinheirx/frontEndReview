import { useContext } from 'react';
import Context from '../context/Context';
import banner from '../assets/todolist_banner.svg';

function TodoList() {
  const { user } = useContext(Context);

  return (
    <main className='todolist-container'>
      <h1>welcome, {user}</h1>
      <img src={banner} alt='' />
      <button type='button'>Add new task</button>
      <section>Daily tasks</section>
    </main>
  );
}

export default TodoList;
