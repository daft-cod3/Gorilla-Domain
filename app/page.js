import Card from "./components/Card";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-black">
      <section id="top-hero" className="bg-gray-400 relative py-20 mb-2 px-10 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className=" mt-10 p-10">
              <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"/>
          <div className="relative">
            <h1 className="text-6xl text-blue-500 font-bold m-6">
              This is the Gorilla Domain
            </h1>
          </div>
          </div>
          <div>
            
          </div>
        
        </div>
      </section>

      <section id="hero" className="relative">
      {/*bg-[url('/hero.jpg')]*/}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 mx-10  p-16">

      
        <div className="text-gray-900 dark:text-white max-w-full">
            <h1 className="font-bold text-blue-500 p-6 sm:text-4xl text-2xl">
              Learn how to drive from a website
            </h1>
            <div className="border border-blue-500 rounded-2xl p-6">
              <h1 className="font-bold text-2xl">
                Useful Facts
              </h1>
              <ul className="font-serif text-sm">
                <li>. Provides comprehensive learning on vehicles</li>
                <li>. Quizes are provided and regularly updated</li>
                <li>. The driving simulation seems fun to use</li>
              </ul>
            </div>
          </div>
             
        </div>

      </section>

      <section id="cards" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 p-10">
      <Card
        title="Vehicle Parts Study"
        description="Learn about vehicle components with interactive diagrams."
        route="/vehicle-parts-study"
      />
      <Card
        title="Vehicle Parts Quiz"
        description="Test your knowledge on vehicle parts."
        route="/vehicle-parts-quiz"
      />
      <Card
        title="General Questions Study"
        description="Study driving theory and traffic rules."
        route="/general-questions-study"
      />
      <Card
        title="General Questions Quiz"
        description="Quiz yourself on driving theory."
        route="/general-questions-quiz"
      />
      <Card
        title="Driving Simulation"
        description="Coming soon: interactive driving simulation."
        route="/driving-simulation"
      />
      <Card
        title="Model Town Board Study"
        description="Explore key zones and signs on a model town board."
        route="/model-town-board-study"
      />
      </section>
    </main>
  );
}
