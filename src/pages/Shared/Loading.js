import React from 'react';

const Loading = () => {
    return (
       <div className='flex justify-center items-center h-screen'>
            <progress class="progress progress-info w-96"></progress>
       </div>
    );
};

export default Loading;