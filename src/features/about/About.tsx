import { getCurrentLocale } from '@/lib/getCurrentLocale'
import getTrans from '@/lib/translation'
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
function AboutHero({ trans }: { trans: any }) {
  return (
    <section className='text-center space-y-3 sm:space-y-4'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800'>{trans.title}</h1>
      <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2'>
        {trans.subtitle}
      </p>
    </section>
  )
}

function OurStory({ trans }: { trans: any }) {
  return (
    <section className='space-y-3 sm:space-y-4'>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800'>{trans.ourStory}</h2>
      <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
        {trans.storyParagraph1}
      </p>
      <p className='text-base sm:text-lg text-gray-700 leading-relaxed'>
        {trans.storyParagraph2}
      </p>
    </section>
  )
}

function OurCommitment({ trans }: { trans: any }) {
  const commitments = [
    {
      title: trans.qualityIngredientsTitle,
      description: trans.qualityIngredientsDesc
    },
    {
      title: trans.exceptionalServiceTitle,
      description: trans.exceptionalServiceDesc
    }
  ]

  return (
    <section className='space-y-3 sm:space-y-4'>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800'>{trans.ourCommitment}</h2>
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

function WhatSetsUsApart({ trans }: { trans: any }) {
  const values = [
    {
      icon: '🍕',
      title: trans.artisanCraftedTitle,
      description: trans.artisanCraftedDesc
    },
    {
      icon: '🌿',
      title: trans.freshCleanTitle,
      description: trans.freshCleanDesc
    },
    {
      icon: '❤️',
      title: trans.madeWithLoveTitle,
      description: trans.madeWithLoveDesc
    }
  ]

  return (
    <section className='space-y-3 sm:space-y-4'>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800'>{trans.whatSetsUsApart}</h2>
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

function ClosingStatement({ trans }: { trans: any }) {
  return (
    <section className='text-center bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg'>
      <p className='text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed'>
        {trans.closingParagraph1}
      </p>
      <p className='text-lg sm:text-xl font-semibold text-gray-800'>
        {trans.closingParagraph2}
      </p>
    </section>
  )
}

// Main Component
export default async function About() {
  const locale = await getCurrentLocale()
  const translations = await getTrans(locale)
  const trans = translations.about

  return (
    <div className='element-center p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 min-h-[75vh] max-w-6xl mx-auto'>
      <AboutHero trans={trans} />
      <OurStory trans={trans} />
      <OurCommitment trans={trans} />
      <WhatSetsUsApart trans={trans} />
      <ClosingStatement trans={trans} />
    </div>
  )
}
