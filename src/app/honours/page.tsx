import React from 'react';

const HonoursPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-maroon-900 dark:text-golden-400 mb-8 mt-2 text-center">Honours</h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed text-center">
        This page will showcase the honours and recognitions received by the Trust and its members.
      </p>
      {/* Add honours content here */}
    </div>
  );
};

export default HonoursPage;
