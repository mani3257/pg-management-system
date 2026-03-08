function Contact() {
  return (
    <div id="contact" className="p-10 bg-white">
    

      <h2 className="text-3xl font-bold text-center mb-8">
        Contact & Location
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Contact Details */}
        <div className="space-y-4 text-lg">

          <p>
            <span className="font-semibold">Hostel Name:</span> Radha Krishna Men PG
          </p>

          <p>
            <span className="font-semibold">Owner:</span> Mani
          </p>

          <p>
            <span className="font-semibold">Contact Number:</span> 6304141085
          </p>

          <p>
            <span className="font-semibold">Address:</span> Near IDA X Bollaram Road, Hyderabad
          </p>

        </div>

        {/* Google Map */}
        <div>

          <iframe
            title="PG Location"
            src="https://www.google.com/maps?q=IDA%20Bollaram%20Hyderabad&output=embed"
            className="w-full h-72 rounded-lg shadow"
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </div>
  );
}

export default Contact;