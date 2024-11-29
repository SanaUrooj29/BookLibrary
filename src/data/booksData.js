export const booksData = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Fiction",
      coverImage: '/assets/gatsby.jpg',
      description: "A story of decadence and excess, following the mysterious millionaire Jay Gatsby.",
      rating: 4.5,
      reviews: [
        { id: 1, user: "Reader1", comment: "A true classic!", rating: 5 },
        { id: 2, user: "BookLover", comment: "Beautiful prose.", rating: 4 }
      ]
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Fiction",
      coverImage: "/assets/tokill.jpg",
      description: "The story of racial injustice and the loss of innocence in the American South.",
      rating: 4.8,
      reviews: [
        { id: 1, user: "BookWorm", comment: "Powerful and moving.", rating: 5 },
        { id: 2, user: "LitFan", comment: "A must-read!", rating: 4.5 }
      ]
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genre: "Science Fiction",
      coverImage: "/assets/george.jpg",
      description: "A dystopian social science fiction novel and cautionary tale.",
      rating: 4.7,
      reviews: [
        { id: 1, user: "SciFiLover", comment: "Frighteningly relevant.", rating: 5 },
        { id: 2, user: "Reader2", comment: "Thought-provoking.", rating: 4.5 }
      ]
    }
  ];