import frontView from "../assets/frontView.png";

function Hero() {
  return (
    <div className="text-center">

      <img
        src={frontView}
        alt="Radha Krishna Men PG"
        className="w-full h-[420px] object-cover"
      />

      <div className="p-6">

        <h1 className="text-4xl font-bold">
          Radha Krishna Men PG
        </h1>

        <p className="text-gray-600">
          Comfortable & Affordable Hostel for Students
        </p>

      </div>

    </div>
  );
}

export default Hero;