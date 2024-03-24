// Write your code here
import Slider from 'react-slick'

import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
  const settings = {dots: true, slidesToShow: 4, slidesToScroll: 2}
  return (
    <div className="slider-cont">
      <h1>Action Movies</h1>
      <Slider {...settings}>
        {actionMovies.map(each => (
          <MovieItem eachItem={each} key={each.id} />
        ))}
      </Slider>
      <h1>Comedy Movies</h1>
      <Slider {...settings}>
        {comedyMovies.map(each => (
          <MovieItem eachItem={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider
