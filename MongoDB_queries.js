// Inserting the given data in mongodb

// Product.json 
  
[
    {
        "id": "1",
        "product_name": "Intelligent Fresh Chips",
        "product_price": 655.00,
        "product_material": "Concrete",
        "product_color": "mint green"
    },
    {
        "id": "2",
        "product_name": "Practical Fresh Sausages",
        "product_price": 911.0,
        "product_material": "Cotton",
        "product_color": "indigo"
    },
    {
        "id": "3",
        "product_name": "Refined Steel Car",
        "product_price": 690.00,
        "product_material": "Rubber",
        "product_color": "gold"
    },
    {
        "id": "4",
        "product_name": "Gorgeous Plastic Pants",
        "product_price": 492.00,
        "product_material": "Soft",
        "product_color": "plum"
    },
    {
        "id": "5",
        "product_name": "Sleek Cotton Chair",
        "product_price": 33.00,
        "product_material": "Fresh",
        "product_color": "black"
    },
    {
        "id": "6",
        "product_name": "Awesome Wooden Towels",
        "product_price": 474.00,
        "product_material": "Plastic",
        "product_color": "orange"
    },
    {
        "id": "7",
        "product_name": "Practical Soft Shoes",
        "product_price": 500.00,
        "product_material": "Rubber",
        "product_color": "pink"
    },
    {
        "id": "8",
        "product_name": "Incredible Steel Hat",
        "product_price": 78.00,
        "product_material": "Rubber",
        "product_color": "violet"
    },
    {
        "id": "9",
        "product_name": "Awesome Wooden Ball",
        "product_price": 28.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "10",
        "product_name": "Generic Wooden Pizza",
        "product_price": 84.00,
        "product_material": "Frozen",
        "product_color": "indigo"
    },
    {
        "id": "11",
        "product_name": "Unbranded Wooden Cheese",
        "product_price":26.00,
        "product_material": "Soft",
        "product_color": "black"
    },
    {
        "id": "12",
        "product_name": "Unbranded Plastic Salad",
        "product_price": 89.00,
        "product_material": "Wooden",
        "product_color": "pink"
    },
    {
        "id": "13",
        "product_name": "Gorgeous Cotton Keyboard",
        "product_price": 37.00,
        "product_material": "Concrete",
        "product_color": "sky blue"
    },
    {
        "id": "14",
        "product_name": "Incredible Steel Shirt",
        "product_price": 54.00,
        "product_material": "Metal",
        "product_color": "white"
    },
    {
        "id": "15",
        "product_name": "Ergonomic Cotton Hat",
        "product_price": 43.00,
        "product_material": "Rubber",
        "product_color": "mint green"
    },
    {
        "id": "16",
        "product_name": "Small Soft Chair",
        "product_price": 47.00,
        "product_material": "Cotton",
        "product_color": "teal"
    },
    {
        "id": "17",
        "product_name": "Incredible Metal Car",
        "product_price":36.00,
        "product_material": "Fresh",
        "product_color": "indigo"
    },
    {
        "id": "18",
        "product_name": "Licensed Plastic Bacon",
        "product_price":88.00,
        "product_material": "Steel",
        "product_color": "yellow"
    },
    {
        "id": "19",
        "product_name": "Intelligent Cotton Chips",
        "product_price": 46.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "20",
        "product_name": "Handcrafted Wooden Bacon",
        "product_price": 36.00,
        "product_material": "Concrete",
        "product_color": "lime"
    },
    {
        "id": "21",
        "product_name": "Unbranded Granite Chicken",
        "product_price": 90.00,
        "product_material": "Metal",
        "product_color": "gold"
    },
    {
        "id": "22",
        "product_name": "Ergonomic Soft Hat",
        "product_price": 99.00,
        "product_material": "Rubber",
        "product_color": "black"
    },
    {
        "id": "23",
        "product_name": "Intelligent Steel Pizza",
        "product_price": 95.00,
        "product_material": "Cotton",
        "product_color": "azure"
    },
    {
        "id": "24",
        "product_name": "Tasty Rubber Cheese",
        "product_price":47.00,
        "product_material": "Frozen",
        "product_color": "orchid"
    },
    {
        "id": "25",
        "product_name": "Licensed Steel Car",
        "product_price":20.00,
        "product_material": "Cotton",
        "product_color": "indigo"
    }
]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
// Performing the corresponding MongoDB queries

1. Find all the information about each products

Output:

Guvi> db.product.find({})
[
  {
    _id: ObjectId('668bf4f3a8714a0396c03eee'),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03eef'),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef0'),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef1'),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef2'),
    id: '5',
    product_name: 'Sleek Cotton Chair',
    product_price: 33,
    product_material: 'Fresh',
    product_color: 'black'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef3'),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef4'),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef5'),
    id: '8',
    product_name: 'Incredible Steel Hat',
    product_price: 78,
    product_material: 'Rubber',
    product_color: 'violet'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef6'),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef7'),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef8'),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef9'),
    id: '12',
    product_name: 'Unbranded Plastic Salad',
    product_price: 89,
    product_material: 'Wooden',
    product_color: 'pink'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03efa'),
    id: '13',
    product_name: 'Gorgeous Cotton Keyboard',
    product_price: 37,
    product_material: 'Concrete',
    product_color: 'sky blue'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03efb'),
    id: '14',
    product_name: 'Incredible Steel Shirt',
    product_price: 54,
    product_material: 'Metal',
    product_color: 'white'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03efc'),
    id: '15',
    product_name: 'Ergonomic Cotton Hat',
    product_price: 43,
    product_material: 'Rubber',
    product_color: 'mint green'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03efd'),
    id: '16',
    product_name: 'Small Soft Chair',
    product_price: 47,
    product_material: 'Cotton',
    product_color: 'teal'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03efe'),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03eff'),
    id: '18',
    product_name: 'Licensed Plastic Bacon',
    product_price: 88,
    product_material: 'Steel',
    product_color: 'yellow'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03f00'),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03f01'),
    id: '20',
    product_name: 'Handcrafted Wooden Bacon',
    product_price: 36,
    product_material: 'Concrete',
    product_color: 'lime'
  }
]
Type "it" for more
Guvi>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------  

2. Find the product price which are between 400 to 800

Output:

Guvi> db.product.find({ product_price: { $gte: 400, $lte: 800 } });
[
  {
    _id: ObjectId('668bf4f3a8714a0396c03eee'),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef0'),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef1'),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef3'),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef4'),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  }
]
Guvi>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
3. Find the product price which are not between 400 to 600

Output:

Guvi> db.product.find({$or: [{product_price:{$lt:400}},{product_price:{$gt:600}}]})
[
  {
    _id: ObjectId('668bf4f3a8714a0396c03eee'),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03eef'),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef0'),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef2'),
    id: '5',
    product_name: 'Sleek Cotton Chair',
    product_price: 33,
    product_material: 'Fresh',
    product_color: 'black'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef5'),
    id: '8',
    product_name: 'Incredible Steel Hat',
    product_price: 78,
    product_material: 'Rubber',
    product_color: 'violet'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef6'),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef7'),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef8'),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef9'),
    id: '12',
    product_name: 'Unbranded Plastic Salad',
    product_price: 89,
    product_material: 'Wooden',
    product_color: 'pink'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03efa'),
    id: '13',
    product_name: 'Gorgeous Cotton Keyboard',
    product_price: 37,
    product_material: 'Concrete',
    product_color: 'sky blue'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03efb'),
    id: '14',
    product_name: 'Incredible Steel Shirt',
    product_price: 54,
    product_material: 'Metal',
    product_color: 'white'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03efc'),
    id: '15',
    product_name: 'Ergonomic Cotton Hat',
    product_price: 43,
    product_material: 'Rubber',
    product_color: 'mint green'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03efd'),
    id: '16',
    product_name: 'Small Soft Chair',
    product_price: 47,
    product_material: 'Cotton',
    product_color: 'teal'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03efe'),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03eff'),
    id: '18',
    product_name: 'Licensed Plastic Bacon',
    product_price: 88,
    product_material: 'Steel',
    product_color: 'yellow'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03f00'),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03f01'),
    id: '20',
    product_name: 'Handcrafted Wooden Bacon',
    product_price: 36,
    product_material: 'Concrete',
    product_color: 'lime'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03f02'),
    id: '21',
    product_name: 'Unbranded Granite Chicken',
    product_price: 90,
    product_material: 'Metal',
    product_color: 'gold'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03f03'),
    id: '22',
    product_name: 'Ergonomic Soft Hat',
    product_price: 99,
    product_material: 'Rubber',
    product_color: 'black'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03f04'),
    id: '23',
    product_name: 'Intelligent Steel Pizza',
    product_price: 95,
    product_material: 'Cotton',
    product_color: 'azure'
  }
]
Type "it" for more
Guvi>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
4. List the four product which are greater than 500 in price   

Output:

Guvi> db.product.find({product_price:{$gt:500}}).limit(4)
[
  {
    _id: ObjectId('668bf4f3a8714a0396c03eee'),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03eef'),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef0'),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  }
]
Guvi>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------  

5. Find the product name and product material of each products

Output:

Guvi> db.product.find({},{ product_name: 1, product_material: 1, _id: 0 }).pretty()
[
  {
    product_name: 'Intelligent Fresh Chips',
    product_material: 'Concrete'
  },
  {
    product_name: 'Practical Fresh Sausages',
    product_material: 'Cotton'
  },
  { product_name: 'Refined Steel Car', product_material: 'Rubber' },
  { product_name: 'Gorgeous Plastic Pants', product_material: 'Soft' },
  { product_name: 'Sleek Cotton Chair', product_material: 'Fresh' },
  {
    product_name: 'Awesome Wooden Towels',
    product_material: 'Plastic'
  },
  { product_name: 'Practical Soft Shoes', product_material: 'Rubber' },
  { product_name: 'Incredible Steel Hat', product_material: 'Rubber' },
  { product_name: 'Awesome Wooden Ball', product_material: 'Soft' },
  { product_name: 'Generic Wooden Pizza', product_material: 'Frozen' },
  { product_name: 'Unbranded Wooden Cheese', product_material: 'Soft' },
  {
    product_name: 'Unbranded Plastic Salad',
    product_material: 'Wooden'
  },
  {
    product_name: 'Gorgeous Cotton Keyboard',
    product_material: 'Concrete'
  },
  { product_name: 'Incredible Steel Shirt', product_material: 'Metal' },
  { product_name: 'Ergonomic Cotton Hat', product_material: 'Rubber' },
  { product_name: 'Small Soft Chair', product_material: 'Cotton' },
  { product_name: 'Incredible Metal Car', product_material: 'Fresh' },
  { product_name: 'Licensed Plastic Bacon', product_material: 'Steel' },
  {
    product_name: 'Intelligent Cotton Chips',
    product_material: 'Soft'
  },
  {
    product_name: 'Handcrafted Wooden Bacon',
    product_material: 'Concrete'
  }
]
Type "it" for more
Guvi>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------  

6. Find the product with a row id of 10

Output:

Guvi> db.product.find({id:'10'})
[
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef7'),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  }
]
Guvi>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------  

7. Find only the product name and product material

Output:

Guvi> db.product.find({},{ product_name: 1, product_material: 1, _id: 0 }).pretty()
[
  {
    product_name: 'Intelligent Fresh Chips',
    product_material: 'Concrete'
  },
  {
    product_name: 'Practical Fresh Sausages',
    product_material: 'Cotton'
  },
  { product_name: 'Refined Steel Car', product_material: 'Rubber' },
  { product_name: 'Gorgeous Plastic Pants', product_material: 'Soft' },
  { product_name: 'Sleek Cotton Chair', product_material: 'Fresh' },
  {
    product_name: 'Awesome Wooden Towels',
    product_material: 'Plastic'
  },
  { product_name: 'Practical Soft Shoes', product_material: 'Rubber' },
  { product_name: 'Incredible Steel Hat', product_material: 'Rubber' },
  { product_name: 'Awesome Wooden Ball', product_material: 'Soft' },
  { product_name: 'Generic Wooden Pizza', product_material: 'Frozen' },
  { product_name: 'Unbranded Wooden Cheese', product_material: 'Soft' },
  {
    product_name: 'Unbranded Plastic Salad',
    product_material: 'Wooden'
  },
  {
    product_name: 'Gorgeous Cotton Keyboard',
    product_material: 'Concrete'
  },
  { product_name: 'Incredible Steel Shirt', product_material: 'Metal' },
  { product_name: 'Ergonomic Cotton Hat', product_material: 'Rubber' },
  { product_name: 'Small Soft Chair', product_material: 'Cotton' },
  { product_name: 'Incredible Metal Car', product_material: 'Fresh' },
  { product_name: 'Licensed Plastic Bacon', product_material: 'Steel' },
  {
    product_name: 'Intelligent Cotton Chips',
    product_material: 'Soft'
  },
  {
    product_name: 'Handcrafted Wooden Bacon',
    product_material: 'Concrete'
  }
]
Type "it" for more
Guvi>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------  

8. Find all products which contain the value of soft in product material 

Output:

Guvi> db.product.find({product_material:'Soft'}).pretty()
[
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef1'),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef6'),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef8'),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03f00'),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  }
]
Guvi>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------  

9. Find products which contain product color indigo and product price 492.00

Output:

Guvi> db.product.find({$or:[{product_color: "indigo"}, {product_price: 492}] })
[
  {
    _id: ObjectId('668bf4f3a8714a0396c03eef'),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef1'),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef7'),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03efe'),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('668bf4f3a8714a0396c03f06'),
    id: '25',
    product_name: 'Licensed Steel Car',
    product_price: 20,
    product_material: 'Cotton',
    product_color: 'indigo'
  }
]
Guvi>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------  

10. Delete the products which product price value are 28

Output:

Guvi> db.product.deleteMany({product_price:28})
{ acknowledged: true, deletedCount: 1 }

// Before Deleting:

Guvi> db.product.find({product_price:28})
[
  {
    _id: ObjectId('668bf4f3a8714a0396c03ef6'),
    id: '9',
    product_name: 'Awesome Wooden Ball',
    product_price: 28,
    product_material: 'Soft',
    product_color: 'azure'
  }
]

// After Deleting: 

Guvi> db.product.find({product_price:28})

Guvi>

  
  
  
  

  
