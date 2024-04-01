async function getCategories() {
    try {
        const response = await fetch('http://localhost:3000/categories');
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return []; 
    }
}

const Categories = () => {
    return (
        
        <div>Testing</div>
    )
}

export default Categories;
