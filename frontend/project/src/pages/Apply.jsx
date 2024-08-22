import React, { useState } from 'react';

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    cv: null // State for the CV file
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);
    if (formData.cv) {
      formDataToSend.append('cv', formData.cv);
    }

    // Example of posting form data to an API endpoint
    // fetch('/api/submit-application', {
    //   method: 'POST',
    //   body: formDataToSend,
    // }).then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <div className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Apply for the Job</h1>
        
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-lg font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 text-lg font-bold mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-lg font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="5"
                required
              ></textarea>
            </div>
            
            <div className="mb-4">
              <label htmlFor="cv" className="block text-gray-700 text-lg font-bold mb-2">Upload CV</label>
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleFileChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                accept=".pdf, .doc, .docx"
                required
              />
            </div>
            
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
