import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import 'bootstrap/dist/css/bootstrap.min.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapers.com/images/hd/rick-and-morty-tv-shows-title-cover-o279wd0wliqhprc6.webp"
          alt="First slide"
          style={{
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapers.com/images/hd/rick-and-morty-playing-with-portals-zzqyo8gmvrrm3mh8.webp"
          alt="First slide"
          style={{
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapers.com/images/hd/rick-and-morty-looking-at-the-night-sky-tr8wxryct280wstz.webp"
          alt="First slide"
          style={{
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
          }}
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel