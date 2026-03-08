import { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";

import room1 from "../assets/room1.png";
import room2 from "../assets/room2.png";
import room3 from "../assets/room3.png";
import room4 from "../assets/room4.png";
import room5 from "../assets/room5.png";

const images = {
  "room1.png": room1,
  "room2.png": room2,
  "room3.png": room3,
  "room4.png": room4,
  "room5.png": room5,
};

function Rooms() {

  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {

    fetch("/rooms")
      .then(res => res.json())
      .then(data => setRooms(data));

  }, []);

  return (
    <div id="rooms" className="p-10 bg-gray-100">

      <h2 className="text-3xl font-bold text-center mb-8">
        Available Rooms
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {rooms.map(room => (

          <div key={room.id} className="bg-white rounded shadow">

            <img
              src={images[room.image]}
              alt={room.type}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">

              <h3 className="text-xl font-semibold">
                {room.type}
              </h3>

              <p className="text-gray-600">
                Price: ₹{room.price}
              </p>

              <p className="text-green-600">
                Vacancies: {room.vacancy}
              </p>

              <button
                onClick={() => setSelectedRoom(room.type)}
                className="btn-primary mt-3"
              >
                Book Now
              </button>

            </div>

          </div>

        ))}

      </div>

      {selectedRoom && (
        <BookingForm
          roomType={selectedRoom}
          closeForm={() => setSelectedRoom(null)}
        />
      )}

    </div>
  );
}

export default Rooms;