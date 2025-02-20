import React from "react";

const Profile = () => {
  
  return (
    <main className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <section className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-gray-300"
          />
          <h2 className="mt-3 text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">Full Stack Developer</p>
          <button className="mt-2 px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Edit Profile
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-around mt-6 border-t pt-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold">120</h3>
            <p className="text-gray-500 text-sm">Posts</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">10K</h3>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">300</h3>
            <p className="text-gray-500 text-sm">Following</p>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="w-full h-24 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Profile;