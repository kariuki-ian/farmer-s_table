const categories = [
  { name: "Fruits" },
  { name: "Vegetables" },
  { name: "Dairy Products" },
];

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: "adminpassword",
    role: "admin",
  },
  {
    name: "User",
    email: "user@example.com",
    password: "userpassword",
    role: "customer",
  },
];

const products = [
  {
    name: "Apple",
    price: 1.99,
    category: "Fruits",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2Fx-JiFNXGKz3HBmBMF-NCzyMOd6hzlZbzZ65lRWgg&s",
    description: "Savor the succulent taste of our Fresh Japanese Pink Apples, handpicked from our orchards, offering a crisp texture and a perfectly balanced sweet-tart flavor."
  },
  {
    name: "Banana",
    price: 0.99,
    category: "Fruits",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYmEdP_uiCGqT0f1S4VYitgNUs38iqic1yieRUpg5mg&s",
    description: "Enjoy the lush, creamy texture of our Fresh Bananas, a staple for a nutritious snack or smoothie ingredient, rich in potassium and natural sugars."
  },
  {
    name: "Carrot",
    price: 0.49,
    category: "Vegetables",
    image: "https://bcfresh.ca/wp-content/uploads/2021/11/Carrots.jpg",
    description: "Crunch into our Fresh Carrots, bursting with earthy sweetness and packed with vitamins to enhance your vision and overall health."
  },
  {
    name: "Milk",
    price: 2.49,
    category: "Dairy Products",
    image: "https://rowefarmsonline.ca/cdn/shop/files/summit-station-2-percent-milk.png?v=1708623517",
    description: "Our Fresh Milk, straight from the dairy farm, promises a rich and creamy taste, perfect for your morning cereal or coffee."
  },
  {
    name: "Strawberry",
    price: 3.49,
    category: "Fruits",
    image: "https://meridianfarmmarket.ca/cdn/shop/products/strawberries_1_d4ed77bb-ebd6-4e25-8a6a-b2a76e598c67.jpg?v=1655863689",
    description: "Indulge in the sweet juiciness of our Organic Strawberries, hand-selected for their vibrant red color and aroma, embodying the taste of summer."
  },
  {
    name: "Lettuce",
    price: 1.49,
    category: "Vegetables",
    image: "https://i5.walmartimages.ca/images/Enlarge/840/122/6000205840122.jpg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    description: "Our Freshly Picked Green Lettuce is the cornerstone of any salad, offering crisp, hydrating leaves full of essential nutrients and fiber."
  },
  {
    name: "Cheese",
    price: 4.99,
    category: "Dairy Products",
    image: "https://www.supermarchepa.com/cdn/shop/products/canadian-brie-cheese_700x700@2x.jpg?v=1464111642",
    description: "Experience the depth of flavor in our Aged Cheddar Cheese, with its rich, nutty essence and smooth texture, a testament to traditional cheese-making."
  },
  {
    name: "Tomato",
    price: 2.99,
    category: "Vegetables",
    image: "https://farmfreshontario.com/wp-content/uploads/2019/12/p3.jpg",
    description: "Our Ripe Tomatoes, perfect for salads or sauces, offer a balance of sweetness and acidity, capturing the essence of homegrown produce."
  },
  {
    name: "Blueberries",
    price: 3.99,
    category: "Fruits",
    image: "https://lifestylemarkets.com/cdn/shop/files/BlueberriesPint.png?crop=center&height=1080&v=1701802492&width=1080",
    description: "Taste the wild with our Blueberries, full of antioxidants, these little berries are a superfood powerhouse, sweet with a slight tang."
  },
  {
    name: "Organic Yogurt",
    price: 0.99,
    category: "Dairy Products",
    image: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ca5ee5d5-4359-4058-828d-2d69d9618e1e-retina-large.jpg",
    description: "Our Creamy Natural Yogurt is enriched with live cultures, offering a tangy flavor and probiotics for a healthy gut and immune system."
  },
  {
    name: "Organic Eggs",
    price: 3.99,
    category: "Dairy Products",
    image: "https://images.eatthismuch.com/img/151932_yetunde_a_81beee9c-f49e-45b1-90ac-b8a78651f0c2.png",
    description: "Laid by free-range hens, our Organic Eggs boast vibrant yolks and firm whites, perfect for a nutritious start to your day."
  },
  {
    name: "Almond Milk",
    price: 2.99,
    category: "Dairy Products",
    image: "https://nutritionrefined.com/wp-content/uploads/2016/11/almond-milk-featured.jpg",
    description: "Our Almond Milk is a creamy, dairy-free alternative, rich in vitamins and minerals, ideal for lactose-intolerant individuals."
  },
  {
    name: "Quinoa",
    price: 4.99,
    category: "Vegetables",
    image: "https://www.thesourcebulkfoods.ca/wp-content/uploads/2018/12/quinoa-819653848_4200x2945-1.jpeg",
    description: "Packed with protein and all nine essential amino acids, our Quinoa is a versatile and nutritious grain for any meal."
  },
  {
    name: "Avocado",
    price: 2.49,
    category: "Fruits",
    image: "https://www.lavera.com/media/49/f0/82/1589974741/avocado-iso-stock.jpg",
    description: "Our Avocados are buttery and smooth, loaded with healthy fats and fiber, making them a great addition to any dish."
  },
  {
    name: "Spinach",
    price: 1.99,
    category: "Vegetables",
    image: "https://png.pngtree.com/png-clipart/20201208/original/pngtree-organic-fresh-green-spinach-png-image_5519932.jpg",
    description: "Rich in iron and vitamins, our Fresh Spinach leaves are tender and flavorful, perfect for salads, smoothies, and cooking."
  },
  {
    name: "Sweet Potatoes",
    price: 1.29,
    category: "Vegetables",
    image: "https://www.freshdirect.com/media/images/product/veg_1/veg_ymgrnt_org_j.jpg?lastModify=2017-01-13T17:46:05",
    description: "Our Sweet Potatoes are rich, creamy, and packed with vitamins A and C, perfect for roasting, baking, or boiling."
  },
  {
    name: "Raspberries",
    price: 4.49,
    category: "Fruits",
    image: "https://meridianfarmmarket.ca/cdn/shop/products/driscolls-raspberries-6oz.jpg?v=1655861319",
    description: "Our Raspberries are plump and juicy, hand-picked at peak ripeness for the perfect balance of sweetness and tart."
  }
  
  
  
  
];

module.exports = { categories, users, products };
