import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [predictedClass, setPredictedClass] = useState(null);  // New state for predicted class

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setPredictedClass(null); // Reset predicted class when a new image is uploaded
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedImage) {
      alert("Please upload an image first.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", selectedImage);
  
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        setPredictedClass(data.predicted_class); // Update state with predicted class
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div className="image-uploader">
      <h1>Waste Sorting by Image Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imagePreview && (
          <div>
            <h2>Preview:</h2>
            <img src={imagePreview} alt="Preview" style={{ width: '300px', height: 'auto' }} />
            {predictedClass !== null && (
              <h3>Predicted Class: {predictedClass}</h3> // Display predicted class here
            )}
          </div>
        )}
        <button type="submit">Submit Image</button>
      </form>
    </div>
  );
};

export default ImageUploader;
