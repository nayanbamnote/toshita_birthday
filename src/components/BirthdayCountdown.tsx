'use client'

import { useState, useEffect } from 'react'

export default function BirthdayCountdown() {
  const [daysUntilBirthday, setDaysUntilBirthday] = useState(0)

  useEffect(() => {
    const today = new Date()
    const birthday = new Date(today.getFullYear(), 7, 15) // Assuming Toshita's birthday is on August 15
    if (today > birthday) {
      birthday.setFullYear(birthday.getFullYear() + 1)
    }
    const timeDiff = birthday.getTime() - today.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    setDaysUntilBirthday(daysDiff)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Birthday Countdown</h2>
        <div className="w-48 h-48 rounded-full bg-gray-800 flex items-center justify-center mx-auto">
          <div className="text-4xl font-bold text-white">{daysUntilBirthday}</div>
        </div>
        <p className="text-white mt-4">Days until Toshita's birthday</p>
      </div>
    </section>
  )
}

