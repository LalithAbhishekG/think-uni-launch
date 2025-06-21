import React from 'react';

const Launch = () => {

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div> <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/Assets/Background.mp4"
            type="video/mp4"
        />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 bg-black bg-opacity-40">
                <img src="/Assets/Logo.png" alt="Logo" className="w-[800px] mb-6" />
                <p className='text-white pb-4 text-4xl mb-10'>THE ONE STOP SOLUTION</p>

                <button
                    onClick={handleRefresh}
                    className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-orange-500 border-2 border-orange-500 rounded-full bg-white overflow-hidden transition-all duration-300 ease-out active:scale-95"
                >
                    {/* Sweep overlay */}
                    <span
                        className="absolute inset-0 w-full h-full bg-orange-500 transform -skew-x-12 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"
                        aria-hidden="true"
                    ></span>

                    {/* Text + icon (above sweep) */}
                    <span className="relative z-10 flex items-center transition-colors duration-300 group-hover:text-white">
                        <svg
                            className="w-5 h-5 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                            />
                        </svg>
                        Launch Now
                    </span>
                </button>

            </div></div>
    );
};

export default Launch;