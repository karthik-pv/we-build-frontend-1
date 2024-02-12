import React from 'react'

const Passkey = ({ passKey, setPassKey }) => {
    return (
        <div className='p-5 gap-5 flex flex-col'>
            <div className='flex justify-between items-center'>
                <span>Enter Passkey</span>
            </div>
            <form className='gap-5 flex flex-col'>
                <input className='w-full bg-slate-50 outline-none p-2 rounded-lg border border-slate-500' type='text' placeholder='123456' value={passKey} onChange={(e) => setPassKey(e.target.value)} required />
                <button className='bg-blue-900 text-white shadow w-full py-2 rounded-lg border border-slate-500 flex items-center justify-center'>Enter</button>
            </form>
        </div>
    )
}

export default Passkey