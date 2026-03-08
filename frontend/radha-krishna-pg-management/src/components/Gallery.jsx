import room1 from "../assets/room1.png";
import room2 from "../assets/room2.png";
import room3 from "../assets/room3.png";
import room4 from "../assets/room4.png";
import room5 from "../assets/room5.png";

const images = [room1, room2, room3, room4, room5];

function Gallery() {
  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="PG Gallery"
            className="w-full h-60 object-cover rounded-lg shadow"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;