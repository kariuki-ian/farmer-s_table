import { useState, useEffect } from "react";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://farm-project-pu8sorey0-jacks-projects-e96ea708.vercel.app/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://farm-project-pu8sorey0-jacks-projects-e96ea708.vercel.app/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
          category: category,
          image: imageURL,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add product");
      }

      window.location = "/";
      console.log("Product Successfully Added");
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategory = (e) => {
    const categoryName = e.target.value.trim();
    const selectedCategory = categories.find(
      (category) => category.name === categoryName
    );
    if (selectedCategory) {
      setCategory(selectedCategory._id);
    } else {
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          name="description"
          id="description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          name="price"
          id="price"
          required
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="category">Product Category (Case Sensitive)</label>
        <input
          type="text"
          name="category"
          id="category"
          required
          onChange={(e) => handleCategory(e)}
        />

        <label htmlFor="image">Image Url</label>
        <input
          type="text"
          name="image"
          id="image"
          required
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NewProduct;
