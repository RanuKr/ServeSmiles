import { useState } from "react";

const Volunteers = ({ userRole }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [volunteers, setVolunteers] = useState([
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
      phone: "9876543210",
      social: "@amitsharma",
      work: "Teaching underprivileged kids",
      hours: 25,
      rating: 4.5,
      status: "Pending",
      image: "/src/assets/amit.jpg",
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya.verma@example.com",
      phone: "9876543211",
      social: "@priyaverma",
      work: "Organizing donation drives",
      hours: 30,
      rating: 5,
      status: "Approved",
      image: "/src/assets/priya.jpg",
    },
  ]);

  // Filter volunteers based on search term
  const filteredVolunteers = volunteers.filter((vol) =>
    vol.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle status update for admins
  const handleStatusUpdate = (id, newStatus) => {
    setVolunteers((prevVolunteers) =>
      prevVolunteers.map((vol) =>
        vol.id === id ? { ...vol, status: newStatus } : vol
      )
    );
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Volunteers
      </h2>

      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search Volunteers..."
          className="border p-2 rounded-lg w-full max-w-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Volunteers Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left text-gray-700">Image</th>
              <th className="p-3 text-left text-gray-700">Name</th>
              <th className="p-3 text-left text-gray-700">Email</th>
              <th className="p-3 text-left text-gray-700">Phone</th>
              <th className="p-3 text-left text-gray-700">Social</th>
              <th className="p-3 text-left text-gray-700">Work</th>
              <th className="p-3 text-left text-gray-700">Hours</th>
              <th className="p-3 text-left text-gray-700">Rating</th>
              <th className="p-3 text-left text-gray-700">Status</th>
              {userRole === "admin" && (
                <th className="p-3 text-left text-gray-700">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredVolunteers.map((vol) => (
              <tr
                key={vol.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">
                  <img
                    src={vol.image || "/src/assets/default.jpg"} // Fallback for missing images
                    alt={vol.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="p-3 text-gray-800">{vol.name}</td>
                <td className="p-3 text-gray-800">{vol.email}</td>
                <td className="p-3 text-gray-800">{vol.phone}</td>
                <td className="p-3">
                  <a
                    href={`https://instagram.com/${vol.social}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {vol.social}
                  </a>
                </td>
                <td className="p-3 text-gray-800">{vol.work}</td>
                <td className="p-3 text-gray-800">{vol.hours}</td>
                <td className="p-3 text-gray-800">{vol.rating} ⭐</td>
                <td
                  className={`p-3 font-semibold ${
                    vol.status === "Approved"
                      ? "text-green-600"
                      : vol.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {vol.status}
                </td>
                {userRole === "admin" && (
                  <td className="p-3">
                    <select
                      value={vol.status}
                      onChange={(e) =>
                        handleStatusUpdate(vol.id, e.target.value)
                      }
                      className="p-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Volunteer Apply Form */}
      {userRole !== "admin" && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            Apply as a Volunteer
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="social"
              placeholder="Instagram Username"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="work"
              placeholder="Type of Work"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
              Apply
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Volunteers;