import Card from "./Card"
import Cat from '../assets/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg';
import Lion from '../assets/matthew-kerslake-BpH--upRlCs-unsplash.jpg';

const Carousel = () => {
  const cardArray = [{
    imgSrc: Cat,
    imgAlt: 'cat',
    description: 'Organic Sun thing',
    price: '$free.99' 
  }, 
  {
    imgSrc: Lion,
    imgAlt: 'lion',
    description: 'Organic Moon thing',
    price: '$1,000.99'
  },
]


  return (
    <div className="carousel">
      {cardArray.map((card) => {
        return(
          <Card imgSrc={card.imgSrc} imgAlt={card.imgAlt} description={card.description} price={card.price}></Card>
        )
      })}
      {/* <Card imgSrc={Cat} imgAlt={'cat'} description={'Organic Sun Glow Body Lotion - 16oz w/ Travel Size'} price={'$32.99'}/>
      <Card imgSrc={Lion} imgAlt={'lion'} description={'Herbal & Detox Teas - 8oz Variety Packets (3 packs)'} price={'$10.99'}/> */}
    </div>
  )
}

export default Carousel