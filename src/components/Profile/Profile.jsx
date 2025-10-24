import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const Profile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);

  const [editOn, setEditOn] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");

  const handleUpdate = () => {
    if (!user) return;

    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        setMessage("Profile updated successfully!");
        setEditOn(false);
      })
      .catch((error) => {
        console.error(error);
        setMessage(" updating profile problem");
      });
  };

  return (
    <div className="min-h-[80vh] max-w-[1100px] mx-auto flex justify-center items-center">
      <title>GameHub-Profile</title>
      <div className="min-h-[87vh] flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center bg-[#FAF4EF] rounded-xl p-6 shadow-md max-w-3xl mx-auto">
          <div className="flex-shrink-0">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt={user?.displayName || "User Photo"}
              className="w-48 h-48 rounded-full object-cover border-2 border-blue-500"
            />
          </div>

          <div className="mt-6 md:mt-0 md:ml-8 text-gray-800 flex flex-col">
            {!editOn ? (
              <>
                <h1 className="font-bold text-2xl">My Profile :</h1>
                <h2 className="text-xl font-semibold text-gray-900">
                  Name: {user?.displayName || "No Name Provided"}
                </h2>
                <h3 className="text-lg text-gray-700">
                  Email: {user?.email || "No Email"}
                </h3>
                <button
                  className="btn mt-5 text-white bg-[#32a3ff]"
                  onClick={() => setEditOn(true)}
                >
                  Update Profile
                </button>
              </>
            ) : (
              <>
                <label className="label">Name:</label>
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="label">Photo URL:</label>
                <input
                  type="text"
                  className="input"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
                <div className="flex gap-2 mt-4">
                  <button className="btn btn-primary" onClick={handleUpdate}>
                    Save
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setEditOn(false)}
                  >
                    Cancel
                  </button>
                </div>
                {message && <p className="mt-2 text-green-600">{message}</p>}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
