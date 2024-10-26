interface ServicedCity {
  city: string
  img: string
  coordinates: {
    lat: number
    long: number
  }
}

const servicedCities: ServicedCity[] = [
  {
    city: 'Swampscott',
    img: '/images/thmb-swampscott.jpg',
    coordinates: {
      lat: 42.4673,
      long: -70.9022
    }
  },
  {
    city: 'Lynn',
    img: '/images/thmb-lynn.jpg',
    coordinates: {
      lat: 42.4629,
      long: -70.9491
    }
  },
  {
    city: 'Marblehead',
    img: '/images/thmb-marblehead.jpg',
    coordinates: {
      lat: 42.5006,
      long: -70.8578
    }
  },
  {
    city: 'Peabody',
    img: '/images/thmb-peabody.jpg',
    coordinates: {
      lat: 42.5272,
      long: -70.9282
    }
  },
  {
    city: 'Saugus',
    img: '/images/thmb-saugus.jpg',
    coordinates: {
      lat: 42.4627,
      long: -71.0128
    }
  },
  {
    city: 'Lynnfield',
    img: '/images/thmb-lynnfield.jpg',
    coordinates: {
      lat: 42.5057,
      long: -71.0591
    }
  },
  {
    city: 'Danvers',
    img: '/images/thmb-danvers.jpg',
    coordinates: {
      lat: 42.5767,
      long: -70.9283
    }
  },
  {
    city: 'Boxford',
    img: '/images/thmb-boxford.jpg',
    coordinates: {
      lat: 42.6019,
      long: -70.9625
    }
  },
  {
    city: 'Nahant',
    img: '/images/thmb-nahant.jpg',
    coordinates: {
      lat: 42.41,
      long: -70.9352
    }
  },
  {
    city: 'Middleton',
    img: '/images/thmb-middleton.jpg',
    coordinates: {
      lat: 42.5982,
      long: -70.9493
    }
  },
  {
    city: 'Topsfield',
    img: '/images/thmb-topsfield.jpg',
    coordinates: {
      lat: 42.6418,
      long: -70.9505
    }
  },
  {
    city: 'Winthrop',
    img: '/images/thmb-winthrop.jpeg',
    coordinates: {
      lat: 42.3748,
      long: -70.9863
    }
  }
]

export default servicedCities
