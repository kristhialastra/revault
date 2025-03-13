import React from 'react'
import NavBar from '../component/NavBar'

function Settings() {
  return (
    <div>
        <NavBar/>

        <main>
            <div className='p-8'>
                <h1 className='text-3xl font-bold'>Settings</h1>
            </div>
        </main>
    </div>
  )
}

export default Settings