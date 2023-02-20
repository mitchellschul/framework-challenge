import './App.css';
import batman from './images/batman-icon.png';

function App() {
  return (
    <div>
      <div className='flex flex-col h-screen items-center justify-center'>
        <div className='text-2xl font-varela-round text-gray-500'>Oh snap Batman, we've encountered a</div>
        <div className='flex flex-row items-center'>
          <h1 className='text-9xl mr-2 font-varela-round'>4</h1>
          <img src={batman} alt='batman' className='w-40' />
          <h1 className='text-9xl ml-2 font-varela-round'>4</h1>
        </div>

        <div className='text-2xl font-varela-round text-gray-500'>The page you are looking for does not exist...</div>
        <div className='mt-5 p-2 text-gray-100 cursor-pointer font-varela-round bg-gray-500 rounded-md hover:bg-gray-400 hover:scale-105 transition'>Back to the Batcave</div>
      </div>
    </div>

  );
}

export default App;
