import React, { useState } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Object.values(formData).includes("")) {
      axios({
        method: "POST",
        url: "http://localhost:5000/submit-form",
        data: formData,
      })
        .then(() => {
          setSubmissionStatus(true);
        })
        .catch((error) => {
          alert("Error: " + error.message);
        });
    } else {
      alert("Form fields cannot be empty");
    }
  };

  const handleRetry = () => {
    setSubmissionStatus(false);
    setFormData({
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
    });
  };

  return (
    <>
      <div className="container mx-auto">
        {!submissionStatus ? (
          <>
            <h1 className="text-3xl font-medium m-4">SUBMISSION FORM</h1>
            <form
              onSubmit={handleSubmit}
              class="shadow-2xl flex flex-col items-center"
            >
              <div className="mb-4 w-full">
                <label htmlFor="name" className="block font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="email" className="block font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="password" className="block font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="phoneNumber"
                  className="block font-semibold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-3/4 bg-violet-500 hover:bg-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white px-4 py-2 rounded-lg self-center"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-green-500 text-4xl font-medium mb-20">
              Yayy! Form submitted successfully!
            </h1>
            <button
              onClick={handleRetry}
              className="w-1/2 bg-violet-500 hover:bg-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white px-4 py-2 rounded-lg self-center"
            >
              Submit Again
            </button>
          </div>
        )}
      </div>
      {submissionStatus && <Confetti className="w-full" />}
    </>
  );
}

export default App;
