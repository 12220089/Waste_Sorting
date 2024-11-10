import React, { useState } from 'react';
import './ImageUploader.css';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [predictedClass, setPredictedClass] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setPredictedClass(null); // Reset predicted class on new upload
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
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setPredictedClass(data.predicted_class); // Update with predicted class
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("An error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-uploader-page">
      <div className="image-uploader">
        <h1>Waste Sorting by Image Upload</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && (
            <div style={{ marginTop: '20px' }}>
              <h2>Preview:</h2>
              <img src={imagePreview} alt="Preview" className="preview" />
              {predictedClass && (
                <div style={{ marginTop: '15px' }}>
                  <h3>Predicted Class: {predictedClass}</h3>
                </div>
              )}
            </div>
          )}
          <button
            type="submit"
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            disabled={loading}
          >
            {loading ? 'Identifying...' : 'Submit Image'}
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Waste Sorting Assistant. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default ImageUploader;
