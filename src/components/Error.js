import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err=useRouteError();
  return (
    <div className='error'>

        <h1>OOPS!!</h1>
        <h3>Something went wrong!!</h3>
        <h2>
            {err.status}:{err.statusText}
        </h2>
    </div>
  )
}

export default Error