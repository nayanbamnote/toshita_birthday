import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-white mb-4">Meet Toshita</h2>
          <p className="text-lg text-gray-300">
            The brightest star in our family! Toshita is a dreamer, an adventurer, and a lover of all things magical.
            Her passion for the night sky and her vibrant personality light up our lives every day.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg"
            alt="Toshita"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

