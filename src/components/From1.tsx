import React from 'react';

const Form1 = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">ENTER HERE</h1>
        <p className="mt-4 text-gray-600">
          Enter
        </p>
      </div>
      <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" action="#">
        <div>
          <label className="sr-only" htmlFor="email">data 1</label>
          <div className="relative">
            <input placeholder="Enter your data 1" className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent" id="email" type="email" />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label className="sr-only" htmlFor="password">data 2</label>
          <div className="relative">
            <input placeholder="Enter your data 2" className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent" id="password" type="password" />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label className="sr-only" htmlFor="password">data 3</label>
          <div className="relative">
            <input placeholder="Enter your data 2" className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent" id="password" type="password" />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label className="sr-only" htmlFor="password">data 4</label>
          <div className="relative">
            <input placeholder="Enter your data 2" className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent" id="password" type="password" />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
      
        <div className="flex items-center justify-between">
          
          <button className="inline-block rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form1;
