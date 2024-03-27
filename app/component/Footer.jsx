import React from 'react'

export default function Footer() {
    return (
        <div className="flex flex-col ">
            <main className="flex">{/* Content goes here */}</main>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>© 2024 Nextjs by Ton. All rights reserved.</p>
                </div>
            </footer>
        </div>

    )
}
