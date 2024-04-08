import React, { useState, useEffect } from 'react';

const NewProduct = () => {
    const[name, setName] = useState('')
    const[description, setDescription] = useState('')
    const[price, setPrice] = useState('')
    const[category, setCategory] = useState('')
    const[categories, setCategories] = useState([]);
    const[image, setImage] = useState({image : ""})

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:3000/categories');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    name: name,
                    description: description,
                    price: price,
                    category: category,
                    image: image
                })
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to add product');
            }
            
            window.location = '/';
            console.log("Product Successfully Added")
        } catch(error){
            console.error(error);
        }
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file)
        setImage(base64);
    }

    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const handleCategory = (e) => {
        const categoryName = e.target.value.trim();
        const selectedCategory = categories.find(category => category.name === categoryName);
        if (selectedCategory) {
            setCategory(selectedCategory._id);
        } else {
            setCategory('');
        }
    };


    return (
<form onSubmit={handleSubmit} className="form-container">
  <div className="form-group">
    <label htmlFor="name">Product Name</label>
    <input type="text" name="name" id="name" required onChange={(e) => setName(e.target.value)} />

    <label htmlFor="description">Product Description</label>
    <input type="text" name="description" id="description" required onChange={(e) => setDescription(e.target.value)} />

    <label htmlFor="price">Product Price</label>
    <input type="number" name="price" id="price" required onChange={(e) => setPrice(e.target.value)} />

    <label htmlFor="category">Product Category (Case Sensitive)</label>
    <input type="text" name="category" id="category" required onChange={(e) => handleCategory(e)} />

    <label htmlFor="image">Upload new product image</label>
    <input type="file" name="image" id="image" accept=".jpeg, .png, .jpg" required onChange={handleFileUpload} />
  </div>

  <button type="submit">Submit</button>
</form>
    )
}

export default NewProduct;