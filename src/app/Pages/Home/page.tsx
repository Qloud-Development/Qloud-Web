'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa'; // Adding icons for reactions

const Home = () => {
  const [activeTab, setActiveTab] = useState('Feed');
  const [showModal, setShowModal] = useState(false);
  const [activeStep, setActiveStep] = useState(2);

  const posts = [
    {
      id: 1,
      username: '@hisroyalfreshness_',
      profilePic: '/Qloud-Web/assets/profile-icon-9.png',
      time: '4d',
      content: 'I just got my team for this business yesterday and this is it so far, let me know what you think',
      likes: '7.8K',
      comments: '233',
      shares: '1.4K',
      image: '/Qloud-Web/assets/team.jpg',
    },
    {
      id: 2,
      username: '@martineetodayhh_',
      profilePic: '/Qloud-Web/assets/profile-icon-9.png',
      time: '3w',
      content: 'I made a shoes brand that is based off old money',
      likes: '24K',
      comments: '983',
      shares: '7.9K',
      image: '/Qloud-Web/assets/shoes.jpg',
    },
    {
      id: 3,
      username: '@designwithme_',
      profilePic: '/Qloud-Web/assets/profile-icon-9.png',
      time: '2w',
      content: 'Just launched my new design portfolio! Check it out and let me know what you think! 🚀',
      likes: '12K',
      comments: '567',
      shares: '3.1K',
      image: '/Qloud-Web/assets/design.jpg',
    },
    {
      id: 4,
      username: '@codingenthusiast_',
      profilePic: '/Qloud-Web/assets/profile-icon-9.png',
      time: '5d',
      content: 'Developed a React Native app that tracks fitness goals. Feeling pumped! 💪',
      likes: '8.2K',
      comments: '421',
      shares: '2.7K',
      image: '/Qloud-Web/assets/conn1.png',
    },
    {
      id: 5,
      username: '@foodielove_',
      profilePic: '/Qloud-Web/assets/profile-icon-9.png',
      time: '1d',
      content: 'Discovered the best sushi spot in town. Look at this amazing platter! 🍣',
      likes: '15K',
      comments: '678',
      shares: '4.2K',
      image: '/Qloud-Web/assets/sushi.jpg',
    },
    {
      id: 6,
      username: '@wanderlustlife_',
      profilePic: '/Qloud-Web/assets/profile-icon-9.png',
      time: '1w',
      content: 'Exploring the hidden beaches of Bali 🌴. This view is absolutely breathtaking!',
      likes: '20K',
      comments: '890',
      shares: '5.6K',
      image: '/Qloud-Web/assets/bali.jpg',
    },
    {
      id: 7,
      username: '@petparent_',
      profilePic: '/Qloud-Web/assets/profile-icon-9.png',
      time: '3d',
      content: 'Adopted a new puppy today! Meet Max 🐶. Isn&apos;t he the cutest?',
      likes: '18K',
      comments: '1.2K',
      shares: '6.3K',
      image: '/Qloud-Web/assets/puppy.jpg',
    },
  ];

  const progressSteps = ['Foundation', 'Development', 'Launch', 'Scale'];

  useEffect(() => {
    const steps = document.querySelectorAll('.qloud-step');
    steps.forEach((step, index) => {
      if (index === activeStep) {
        step.classList.add('animate-step');
      } else {
        step.classList.remove('animate-step');
      }
    });
  }, [activeStep]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800">
      <style jsx global>
        {`
    /* Hide scrollbar for Chrome, Safari, Edge */
    .scroll-hidden::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for all browsers */
    .scroll-hidden {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      overflow-y: scroll; /* Ensure smooth scrolling remains */
    }
  `}
      </style>

      {/* Tabs */}
      <div className="flex justify-center py-4 bg-white shadow-md">
        <button
          onClick={() => setActiveTab('Feed')}
          className={`py-3 px-6 text-lg ${activeTab === 'Feed' ? 'border-b-2 border-black font-bold' : 'text-gray-600'}`}
        >
          Feed
        </button>
        <button
          onClick={() => setActiveTab('Qloud')}
          className={`py-3 px-6 text-lg ${activeTab === 'Qloud' ? 'border-b-2 border-black font-bold' : 'text-gray-600'}`}
        >
          Qloud
        </button>
      </div>

      {/* Feed Section */}
      {activeTab === 'Feed' && (
        <div className="p-6 max-w-6xl mx-auto grid gap-8">

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg p-6 mb-6 transition-all duration-300 ease-in-out hover:scale-105 scroll-hidden overflow-y-scroll">
              <div className="flex items-center mb-4">
                <Image
                  src={post.profilePic}
                  alt={post.username}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{post.username}</p>
                  <p className="text-xs text-gray-500">{post.time}</p>
                </div>
              </div>

              <p className="text-lg mb-4 font-bold">{post.content}</p>

              <div className="flex justify-center">
                <Image
                  src={post.image}
                  alt="Post content"
                  width={600}
                  height={350}
                  className="rounded-lg mb-4"
                />
              </div>

              <div className="flex justify-between text-gray-600">
                <button className="flex items-center text-gray-600 hover:text-red-500 focus:text-red-500">
                  <FaHeart className="inline-block mr-1" /> {post.likes}
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-500 focus:text-blue-500">
                  <FaComment className="inline-block mr-1" /> {post.comments}
                </button>
                <button className="flex items-center text-gray-600 hover:text-green-500 focus:text-green-500">
                  <FaShare className="inline-block mr-1" /> {post.shares}
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Qloud Section with Dynamic Animation */}
      {activeTab === 'Qloud' && (
  <div className="flex flex-col items-center justify-center flex-grow p-6 transition-all duration-300">
    <h2 className="text-3xl font-serif mb-10 text-gray-800 text-center">Your Progress</h2>

    {/* Responsive Container for Progress Steps */}
    <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-4">
      {progressSteps.map((step, index) => (
        <React.Fragment key={step}>
          {/* Connector Line */}
          {index !== 0 && (
            <div
              className={`${
                index <= activeStep ? 'bg-green-500' : 'bg-gray-300'
              } transition-all duration-300 lg:w-10 lg:h-1 w-1 h-10 lg:my-0 my-4`}
            ></div>
          )}

          {/* Step Circle */}
          <div
            className={`qloud-step flex items-center justify-center 
              w-32 h-32 lg:w-40 lg:h-40 
              rounded-full border-1 lg:border-2 border-black
              transition-all duration-500 ease-in-out cursor-pointer 
              ${
                index === activeStep
                  ? 'bg-green-500 text-white scale-125 shadow-lg'
                  : 'bg-gray-300 text-gray-700'
              }
              hover:scale-110 hover:shadow-xl`}
            onClick={() => setActiveStep(index)}
          >
            <span className="text-sm lg:text-xl font-bold">{step}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
)}



      {/* FAB */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-4xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
      >
        +
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-8">
            <div className="flex justify-between items-center mb-6">
              <button onClick={() => setShowModal(false)} className="text-red-500 font-semibold">
                Cancel
              </button>
              <h3 className="text-xl font-semibold text-gray-800">New Idea</h3>
              <div></div>
            </div>
            <div className="mb-6">
              <textarea
                className="w-full p-4 border rounded-lg shadow-sm"
                placeholder="What's on your mind?"
                rows={4}
              ></textarea>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-full font-semibold">
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
