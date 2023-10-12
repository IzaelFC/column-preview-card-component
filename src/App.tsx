import sedan from './assets/images/icon-sedans.svg'
import suvs from './assets/images/icon-suvs.svg'
import luxury from './assets/images/icon-luxury.svg'

export default function App() {
  return (
    <ul>
      <li className="bg-[--bright-orange] sm:rounded-l-lg sm:rounded-r-none rounded-t-lg">
        <img src={ sedan } alt="" />
        <h1>Sedans</h1>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
          or on your next road trip.
        </p>
        <button className="text-[--bright-orange]">Learn More</button>
      </li>
    
      <li className="bg-[--dark-cyan]">
        <img src={ suvs } alt="" />
        <h1>SUVs</h1>
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
          and off-road adventures.
        </p>
        <button className="text-[--dark-cyan]">Learn More</button>
      </li>
    
      <li className="bg-[--very-dark-cyan] sm:rounded-r-lg sm:rounded-l-none rounded-b-lg">
        <img src={ luxury } alt="" />
        <h1>Luxury</h1>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
          rental and arrive in style.
        </p>
        <button className="text-[--very-dark-cyan]">Learn More</button>
      </li>
    </ul>
  )
}