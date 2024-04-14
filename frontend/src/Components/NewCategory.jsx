import { useState } from "react";

const NewCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: categoryName }),
      });

      if (!response.ok) {
        throw new Error("Failed to add category");
      }
      console.log("Category added successfully");
      // Clear the input field after successful submission
      setCategoryName("");
      window.location = "/categories";
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="new-category">
      <label htmlFor="categoryName">Name of new category:</label>
      <input
        type="text"
        id="categoryName"
        value={categoryName}
        onChange={(event) => setCategoryName(event.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewCategory;
