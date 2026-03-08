import { useEffect, useState } from "react";

function Admin() {

  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);

  // Load rooms
  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then(res => res.json())
      .then(data => setRooms(data));
  }, []);

  // Load bookings
  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const updateVacancy = async (id, vacancy) => {

    await fetch(`http://localhost:5000/rooms/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ vacancy })
    });

    alert("Vacancy updated");

  };

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* ROOM MANAGEMENT */}

      <h2 className="text-2xl font-semibold mb-4">
        Room Availability
      </h2>

      <table className="w-full border mb-10">

        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Room</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Vacancy</th>
            <th className="border p-2">Update</th>
          </tr>
        </thead>

        <tbody>

          {rooms.map(room => (

            <tr key={room.id}>

              <td className="border p-2">{room.type}</td>

              <td className="border p-2">₹{room.price}</td>

              <td className="border p-2">

                <input
                  type="number"
                  defaultValue={room.vacancy}
                  onChange={(e) => room.vacancy = e.target.value}
                  className="border p-1 w-16"
                />

              </td>

              <td className="border p-2">

                <button
                  className="btn-primary"
                  onClick={() => updateVacancy(room.id, room.vacancy)}
                >
                  Update
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* BOOKING REQUESTS */}

      <h2 className="text-2xl font-semibold mb-4">
        Booking Requests
      </h2>

      <table className="w-full border">

        <thead className="bg-gray-200">

          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Room</th>
            <th className="border p-2">Move-in Date</th>
          </tr>

        </thead>

        <tbody>

          {bookings.map(b => (

            <tr key={b.id}>

              <td className="border p-2">{b.name}</td>

              <td className="border p-2">{b.phone}</td>

              <td className="border p-2">{b.room_type}</td>

              <td className="border p-2">{b.move_in_date}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default Admin;
