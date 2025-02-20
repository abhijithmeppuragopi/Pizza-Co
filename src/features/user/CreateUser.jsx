import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch=useDispatch();
  const navigate=useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if(!username) return;
    dispatch(updateName(username));
    navigate('/menu');

  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='text-sm font-semibold md:text-base text-stone-600 pb-4'>👋 Welcome! Please start by telling us your name:</p>

      <input className='w-72 mb-6 rounded-full px-3 py-2 placeholder:text-sm'
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type='big'>Start Ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
