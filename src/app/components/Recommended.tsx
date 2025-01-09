'use client';
import React from 'react';
import Image from 'next/image';

const Recommended = () => {
    const stories = [
        { id: 1, username: '@hisroyalfreshness_', profilePic: 'assets/profile-icon-9.png' },
        { id: 2, username: '@martineetodayhh_', profilePic: 'assets/profile-icon-9.png' },
        { id: 3, username: '@designwithme_', profilePic: 'assets/profile-icon-9.png' },
        { id: 4, username: '@codingenthusiast_', profilePic: 'assets/profile-icon-9.png' },
        { id: 5, username: '@foodielove_', profilePic: 'assets/profile-icon-9.png' },
        { id: 6, username: '@wanderlustlife_', profilePic: 'assets/profile-icon-9.png' },
        { id: 7, username: '@petparent_', profilePic: 'assets/profile-icon-9.png' },
    ];

    const recommendedUsers = [
        { id: 1, username: '@codewizard_', profilePic: 'assets/profile-icon-9.png' },
        { id: 2, username: '@travelwithme_', profilePic: 'assets/profile-icon-9.png' },
        { id: 3, username: '@fitnessfreak_', profilePic: 'assets/profile-icon-9.png' },
        { id: 4, username: '@designpro_', profilePic: 'assets/profile-icon-9.png' },
        { id: 5, username: '@foodexplorer_', profilePic: 'assets/profile-icon-9.png' },
    ];

    return (
        <div className="flex flex-col p-6 max-w-6xl mx-auto overflow-y-hidden">
            {/* Stories Section */}
            <div className="mb-8">
                <h2 className="text-2xl text-black font-bold mb-4">Stories</h2>
                <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
                    <div className="flex-shrink-0 text-center">
                        <button className="w-16 h-16 bg-gray-300 rounded-full mb-2 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                            <span className="text-2xl font-semibold">+</span>
                        </button>
                        <span className="text-xs font-semibold text-black ml-2">Add Story</span>
                    </div>
                    {stories.map((story) => (
                        <div key={story.id} className="flex-shrink-0 text-center">
                            <Image
                                src={story.profilePic}
                                alt={story.username}
                                width={64}
                                height={64}
                                className="rounded-full border-2 border-indigo-500"
                            />
                            <span className="text-xs text-gray-700 font-semibold mt-2 block">
                                {story.username.split('@')[1]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>


            {/* Recommended Users Box */}
            <div className="bg-black rounded-lg shadow-lg p-6">
                <h2 className="text-2xl text-white font-bold mb-4">Recommended Users</h2>
                <div className="space-y-4">
                    {recommendedUsers.map((user) => (
                        <div key={user.id} className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Image
                                    src={user.profilePic}
                                    alt={user.username}
                                    width={40}
                                    height={40}
                                    className="rounded-full mr-4 border-2 border-white"
                                />
                                <p className="font-semibold text-white">{user.username}</p>
                            </div>
                            <button className="px-4 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-200">
                                Follow
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recommended;
