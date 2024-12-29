export const data = [
    { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple", merchant_id: "200", quantity: 56 },
    { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged", merchant_id: "200", quantity: 91 },
    { id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury", merchant_id: "200", quantity: 12 },
    { id: "4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple", merchant_id: "200", quantity: 57 },
    { id: "5", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury", merchant_id: "300", quantity: 20 },
    { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged", merchant_id: "300", quantity: 16 },
    { id: "7", name: "Green Wonder", price: 90, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged", merchant_id: "300", quantity: 36 },
    { id: "8", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple", merchant_id: "300", quantity: 57 },
    { id: "9", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury", merchant_id: "300", quantity: 20 },
]


export const transaction = [
    { id: 1, date: '2024-01-25', amount: 300, user_id: 20, merchant_id: 200, lorry_id: 1},
    { id: 2, date: '2023-03-17', amount: 3000, user_id: 20, merchant_id: 200, lorry_id: 2},
    { id: 3, date: '2024-04-12', amount: 5300, user_id: 20, merchant_id: 200, lorry_id: 3},
    { id: 4, date: '2024-06-11', amount: 6300, user_id: 20, merchant_id: 200, lorry_id: 4},
    { id: 5, date: '2024-07-30', amount: 5500, user_id: 30, merchant_id: 300, lorry_id: 5},
    { id: 6, date: '2024-02-07', amount: 200, user_id: 30, merchant_id: 300, lorry_id: 6},
    { id: 7, date: '2024-05-19', amount: 1300, user_id: 30, merchant_id: 300, lorry_id: 7},
    { id: 8, date: '2024-09-22', amount: 7600, user_id: 30, merchant_id: 300, lorry_id: 8},
    { id: 9, date: '2024-11-5', amount: 8300, user_id: 30, merchant_id: 300, lorry_id: 9},
    { id: 10, date: '2024-10-5', amount: 3000, user_id: 30, merchant_id: 300, lorry_id: 9},
    { id: 11, date: '2024-08-5', amount: 2100, user_id: 30, merchant_id: 300, lorry_id: 9},
    { id: 12, date: '2024-12-5', amount: 190, user_id: 30, merchant_id: 300, lorry_id: 9}
]

export const user = [
    {id: 1, user_id: 20, merchant_id: null, first_name: 'John', last_name: 'Doe', email: 'jd@example.com', passwordHash:'password', passwordSalt: 'password'},

    {id: 2, user_id: 30, merchant_id: null, first_name: 'John', last_name: 'Doe', email: 'jd@example.com', passwordHash:'password', passwordSalt: 'password'},

    {id: 3, user_id: null, merchant_id: 200, first_name: 'John', last_name: 'Doe', email: 'jd@example.com', passwordHash:'password', passwordSalt: 'password'},

    {id: 4, user_id: null, merchant_id: 300, first_name: 'John', last_name: 'Doe', email: 'jd@example.com', passwordHash:'password', passwordSalt: 'password'}
]

export const reviews = [
    { id: 1, user_id: 20, merchant_id: 300, rating: 4, text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!', date:'2024-11-02' },
    { id: 2, user_id: 20, merchant_id: 300, rating: 1, text: 'beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!', date:'2024-02-17' },
    { id: 3, user_id: 30, merchant_id: 300, rating: 1, text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!', date:'2024-08-11' },
    { id: 4, user_id: 30, merchant_id: 300, rating: 3, text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!', date:'2024-10-22' },
    { id: 5, user_id: 30, merchant_id: 300, rating: 3, text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!', date:'2024-10-22' },
    { id: 6, user_id: 30, merchant_id: 300, rating: 3, text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!', date:'2024-10-22' },
    { id:7, user_id: 30, merchant_id: 300, rating: 3, text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!', date:'2024-10-22' }
]