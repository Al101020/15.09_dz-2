import './CustomHook.css';

import CompData from './CompData';
import CompError from './CompError';
import CompLoading from './CompLoading';

function CustomHook() {  // console.log('CustomHook');

  return (
    <>
      <div>
        <div className='task2'>
          <h1 className='titleTask'>CustomHook</h1>
          <CompData />
          <CompError />
          <CompLoading />
        </div>
      </div>
    </>
  )
}

export default CustomHook;
