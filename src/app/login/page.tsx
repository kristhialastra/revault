import React from 'react'
import NavBar from '../component/NavBar'

const LogIn = () => (
    <div>
        <NavBar />
        <main className='flex flex-row justify-center items-center'>
            <div className='w-96 m-5 p-6 h-120 rounded-4xl outline-2 outline-offset-4'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-mono font-bold text-teal'>ReVault</h1>
                </div>
                

                <form className='w-2xs mt-3 p-2 ' action=""></form>
                <div className='flex flex-col justify-center items-center'>
                    <input className='p-4 w-xs h-10 border-2 rounded-lg' type="text" placeholder='Student Number'/>
                </div>
                

                <form className='w-2xs mt-0.5 p-2' action=""></form>
                <div className='flex flex-col justify-center items-center'>
                    <input className='p-4 w-xs h-10 border-2 rounded-lg' type="text" placeholder='Password'/>
                </div>
                

                <div className='flex flex-row justify-between items-center m-3'>
                    <div className='flex flex-row justify-center'>
                        <input type="checkbox" name="" id="" placeholder=''/>
                        <p className='font-inter text-xs text-align ml-1'>Remember Password</p>
                    </div>

                    <p className='font-inter text-teal text-xs text-align'>Forgot Password?</p>
                </div>

                <button type="button" className='w-xs h-10 border-2 rounded-lg bg-gradient-to-r from-teal-gradient-left to-teal-gradient-right hover:bg-gradient-to-br font-sans'>Log In</button>

            </div>
        </main>
    </div>

);

export default LogIn;
