//IF AUTHENTICATION IS ADDED THIS COMPONENT MUST BE USABLE BY ONLY ADMINISTRATOR ACCOUNTS

const NewCategory = (catToPost) => {
    async function postCategory(catToPost) {
        try {
            const response = await fetch('http://localhost:3000/categories', {method: 'POST'});
            console.log("Category added successfully");
        } catch (error) {
            console.log(error);
        }
    }
    postCategory(catToPost);
    return (
        <p>Logic to create new category here</p>
    )
}

export default NewCategory;