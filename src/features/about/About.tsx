import React from 'react'

// Reusable Components
interface InfoCardProps {
  title: string
  description: string
}

function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className='bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm'>
      <h3 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-3'>{title}</h3>
      <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>{description}</p>
    </div>
  )
}

interface ValueCardProps {
  icon: string
  title: string
  description: string
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className='text-center p-3 sm:p-4'>
      <div className='text-3xl sm:text-4xl mb-2'>{icon}</div>
      <h4 className='font-semibold text-base sm:text-lg mb-2'>{title}</h4>
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
  )
}

// Section Components
function AboutHero() {
  return (
    <section className='text-center space-y-3 sm:space-y-4'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800'>About Us</h1>
      <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2'>
        Welcome to our pizzeria, where passion meets perfection in every slice.
      </p>
    </section>
  )
}

function OurStory() {
  return (
    <section className='space-y-3 sm:space-y-4'>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800'>Our Story</h2>
      <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
        We are more than just a pizza restaurant – we&apos;re a family dedicated to bringing authentic flavors and unforgettable experiences to our community. 
        Our journey began with a simple mission: to create pizzas that not only taste incredible but are made with ingredients you can trust.
      </p>
      <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
        Every pizza that leaves our kitchen is crafted with care, using traditional techniques combined with modern culinary innovation. 
        We believe that great food starts with great ingredients, and that&apos;s why we source only the finest, freshest components for our dishes.
      </p>
    </section>
  )
}

function OurCommitment() {
  const commitments = [
    {
      title: 'Quality Ingredients',
      description: 'We are committed to providing high-quality, clean food that you can feel good about eating. From our hand-tossed dough made fresh daily to our premium toppings, every ingredient is carefully selected to ensure the best taste and nutritional value.'
    },
    {
      title: 'Exceptional Service',
      description: 'Our dedication extends beyond the kitchen. We pride ourselves on delivering excellent service that makes every visit memorable. Our team is passionate about hospitality and works tirelessly to ensure your experience exceeds expectations.'
    }
  ]

  return (
    <section className='space-y-3 sm:space-y-4'>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800'>Our Commitment</h2>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
        {commitments.map((commitment) => (
          <InfoCard
            key={commitment.title}
            title={commitment.title}
            description={commitment.description}
          />
        ))}
      </div>
    </section>
  )
}

function WhatSetsUsApart() {
  const values = [
    {
      icon: '🍕',
      title: 'Artisan Crafted',
      description: 'Every pizza is handcrafted by skilled artisans who take pride in their work'
    },
    {
      icon: '🌿',
      title: 'Fresh & Clean',
      description: 'We use only fresh, clean ingredients with no artificial preservatives or additives'
    },
    {
      icon: '❤️',
      title: 'Made with Love',
      description: 'Each dish is prepared with passion and attention to detail'
    }
  ]

  return (
    <section className='space-y-3 sm:space-y-4'>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800'>What Sets Us Apart</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'>
        {values.map((value) => (
          <ValueCard
            key={value.title}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </section>
  )
}

function ClosingStatement() {
  return (
    <section className='text-center bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg'>
      <p className='text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed'>
        Whether you&apos;re dining in, taking out, or having your meal delivered, we guarantee the same level of quality and care in every order. 
        Thank you for choosing us and allowing us to be part of your dining experience.
      </p>
      <p className='text-lg sm:text-xl font-semibold text-gray-800'>
        We look forward to serving you!
      </p>
    </section>
  )
}

// Main Component
export default function About() {
  return (
    <div className='element-center p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 min-h-[75vh] max-w-6xl mx-auto'>
      <AboutHero />
      <OurStory />
      <OurCommitment />
      <WhatSetsUsApart />
      <ClosingStatement />
    </div>
  )
}
