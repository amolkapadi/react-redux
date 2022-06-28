import React from 'react'

import Products from '../components/Products'

export default function Home() {
    return (
        <>
     
            <div className='container mt-5'>
            <h1 className='mt-5 text-muted text-center'>Welcome to the Store</h1>
                <div className='row'>
                    <Products />
                </div>
            </div>
        </>
    )
}
