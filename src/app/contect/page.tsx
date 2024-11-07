import React from "react";

function Contect() {
  return (
    <div className="bg-blue-300 min-h-screen m-4 text-center">
      <div className="border-solid">
        <div
          className="p-8 sm:p-12 lg:p-36 bg-gradient-to-r from-blue-400 to-blue-800 text-white"
          style={{ marginTop: "70px" }}
        >
          <div className="text-lg sm:text-xl lg:text-2xl p-4 sm:p-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Contact Us</h2>

            <p className="p-4 sm:p-6">WhatsApp Number: <b>+923101026509</b></p>
            <p className="p-4 sm:p-6">Email Address: <b>arinrimshakanwal@gmail.com</b></p>
            <p className="p-4 sm:p-6">Address: <b>Karachi, Pakistan</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contect;
