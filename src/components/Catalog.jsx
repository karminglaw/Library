import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import "../index.css";

const books = [
    { id: 1, title: 'Ikigai: The Japanese Secret to a Long and Happy Life', description: 'Francesc Miralles and Hector Garcia', cover: 'https://m.media-amazon.com/images/I/41jRRrqZipL._SY445_SX342_.jpg', review: "I recently read 'Ikigai: The Japanese Secret to a Long and Happy Life' by Francesc Miralles and found it truly eye-opening. The book explores the Japanese concept of ikigai, meaning a purpose or reason to get up in the morning, through personal anecdotes and insights from Okinawa's long-living residents. The blend of practical tips on finding your own ikigai with inspiring stories of community, simplicity, and mindfulness was both calming and motivating. It’s a concise guide to living a more meaningful and fulfilled life, and I highly recommend it for anyone interested in personal development and happiness."},


    { id: 2, title: 'Sputnik Sweetheart', description: 'Haruki Murakami', cover: 'https://m.media-amazon.com/images/I/81fuJaXy5xL._SY466_.jpg', review: "I recently discovered Sputnik Sweetheart by Haruki Murakami, a gift from a close friend who knows my love for introspective literature. This mesmerizing novel has profoundly impacted my understanding of love, identity, and the human experience. Murakami's surreal narrative, following the aspiring writer Sumire and her complex relationships, resonated deeply with my own experiences of longing and self-discovery. " },



    { id: 3, title: 'The 48 Laws of Power', description: 'Robert Greene', cover: 'https://m.media-amazon.com/images/I/31hSni7bS6L._SY445_SX342_.jpg', review: "I delved into The 48 Laws of Power by Robert Greene at the start of 2023, and it left me with mixed feelings. The book's raw honesty about human ambition and social dynamics was eye-opening, if somewhat unsettling. As I read, I found myself alternating between fascination and discomfort, recognizing both the utility and the potential dangers of the strategies outlined. While I don't agree with all of Greene's principles, the historical examples he uses are undeniably compelling. This book has made me more aware of power dynamics in my daily interactions, both personally and professionally. It's not a feel-good read, but it's certainly thought-provoking. I'm glad I read it, if only to be more cognizant of these tactics when I encounter them in the real world." },


    { id: 4, title: 'The Richest Man in Babylon', description: 'George S. Clason', cover: 'https://m.media-amazon.com/images/I/71VlJWL2rhL._SY466_.jpg', review: "This life-changing book was a thoughtful gift from my uncle Chris, who lives in the States. Its timeless wisdom on financial management has profoundly impacted my approach to money. The straightforward lessons on capital investments and long-term financial planning resonated deeply with me. Inspired by its teachings, I took the bold step of investing a significant portion of my income at just 21 years old - a decision I'm incredibly grateful for today. The book's practical advice and compelling parables have set me on a path toward financial literacy and independence far earlier than most of my peers. It's a gift that continues to shape my financial decisions and future prospects, making me forever thankful to both my uncle and Clason for this invaluable guidance." },

  ];

const Catalog = () => {
    const [selectedBook, setSelectedBook] = useState(null);
  
    const openModal = (book) => {
      setSelectedBook(book);
    };
  
    const closeModal = () => {
      setSelectedBook(null);
    };
  
    return (
      <div className="p-8">
        <h1 className="text-3xl text-center font-inter mb-8">Catalog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div key={book.id} className="bg-white shadow-md rounded-lg p-6 cursor-pointer" onClick={() => openModal(book)}>
              <img src={book.cover} alt={book.title} className="w-full h-auto max-h object-cover rounded-lg mb-4" style={{ aspectRatio: '3/4' }} />
              <h2 className="text-2xl font-inter mb-2">{book.title}</h2>
              <p className="text-gray-700">{book.description}</p>
            </div>
          ))}
        </div>
  
        {selectedBook && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <button className="text-right mb-4 text-3xl" onClick={closeModal}><IoCloseSharp /></button>
                <div className="flex justify-center">
                    <img src={selectedBook.cover} alt={selectedBook.title} className="w-full h-auto max-h-96 object-contain rounded-lg mb-6" />
                </div>
                <h2 className="text-4xl font-bold mb-4">{selectedBook.title}</h2>
                <p className="text-gray-900">{selectedBook.review}</p>
                </div>
            </div>
            )}

      </div>
    );
  };

export default Catalog;
