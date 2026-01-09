import React from 'react';

const Loader = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-dark'>
            <div className="loader">
                <div className="thread t1"></div>
                <div className="thread t2"></div>
                <div className="thread t3"></div>
                <div className="thread t4"></div>
                <div className="node"></div>
            </div>

        </div>
    )
}

export default Loader;
