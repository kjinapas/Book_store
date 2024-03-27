'use client'
import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
export default function BookStore() {
  const [isBooks, setIsBook] = useState([''])

  async function get_book() {
    try {
      const books = await axios.get('https://next-sample-api-roan.vercel.app/api/sample/book/20')

      return books.data.results
    } catch (err) {
      console.log(err)
    }

  }
  




  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get_book()
        setIsBook(data);
      } catch (error) {

        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);



  return (
    <>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Dev Books Store</h1>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
          {isBooks.map((book, index) =>
          (
            <div key={index} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src={book.image}
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {book.title}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      {/* {reducePrice(book.price)} */}
                      {book.price}
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">{book.price}</p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>


          ))}


        </div>
      </div>
    </>
  )
}

