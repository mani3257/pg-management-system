import { useState } from "react";

function BookingForm({ roomType, closeForm }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  await fetch("/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phone,
      roomType,
      date,
    }),
  });

  alert("Booking request submitted!");
  closeForm();
    };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded shadow w-96">

        <h2 className="text-2xl font-bold mb-4">
          Book {roomType}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-2 rounded"
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="date"
            className="border p-2 rounded"
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn-primary"
          >
            Submit Booking
          </button>

          <button
            type="button"
            onClick={closeForm}
            className="btn-danger"
          >
            Cancel
          </button>

        </form>

      </div>

    </div>
  );
}

export default BookingForm;