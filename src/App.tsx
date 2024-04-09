import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import TodoList from './pages/TodoList';
import AddToList from './pages/AddToList';

function App() {
  return (
    <Routes>
      <Route path='/todo/add' element={<AddToList />} />
      <Route path='/todo' element={<TodoList />} />
      <Route path='/' element={<Login />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
