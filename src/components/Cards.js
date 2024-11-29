
import React from 'react';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white p-6 w-60 h-auto rounded-lg shadow-lg text-center">
      <img
        className="w-full h-40 object-cover rounded-t-lg mb-4"
        src={imageSrc}
        alt={title}
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Cards = () => {
  return (
    <section id="cards" className="py-20 bg-gray-900">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          imageSrc="https://alabamareflector.com/wp-content/uploads/2024/10/Barack-Obama-for-Oct-25-2024-story.jpg"
          title="Barack Obama"
          description="The 44th President of USA"
        />
        <Card
          imageSrc="https://www.aljazeera.com/wp-content/uploads/2024/07/AP24196672534667-1721550097.jpg?resize=770%2C513&quality=80"
          title="Joe Biden"
          description="The 46th President of USA"
        />
        <Card
          imageSrc="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/rockcms/2024-09/240922-donald-trump-vl-508p-2508c1.jpg"
          
          title="Donald Trump"
          description="The 47th President of USA"
        />
      </div>
    </section>
  );
};

export default Cards;
