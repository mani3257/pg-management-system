import handwash from "../assets/handWash.png";
import hotwater from "../assets/hotWater.png";
import lift from "../assets/lift.png";
import food from "../assets/food.png";
import bathroom from "../assets/bathroom.png";

const facilities = [
  { id: 1, name: "Hand Wash Area", img: handwash },
  { id: 2, name: "Hot Water Facility", img: hotwater },
  { id: 3, name: "Lift Facility", img: lift },
  { id: 4, name: "Food / Mess Area", img: food },
    { id: 5, name: "Clean Bathrooms", img: bathroom },
];

function Facilities() {
  return (
    <div id="facilities" className="p-10 bg-white">
      

      <h2 className="text-3xl font-bold text-center mb-8">
        Facilities
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {facilities.map((item) => (
          <div key={item.id} className="text-center shadow rounded-lg p-4">

            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover rounded"
            />

            <h3 className="mt-3 font-semibold">
              {item.name}
            </h3>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Facilities;