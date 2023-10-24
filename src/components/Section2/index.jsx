import './Section2.css';
import ImageCard from '../ImageCard';

function Section2 () {
    return (
        <section className='section2'>
            <div className='text'>
                <h2>Browse The Range</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>
            <div className='images'>
              <ImageCard img="./public/images/sectionimg1.png" text="Dining"/>
              <ImageCard img="./public/images/sectionimg2.png" text="Living"/>
              <ImageCard img="./public/images/sectionimg3.png" text="Bedroom"/>
            </div>
        </section>
    )
}

export default Section2;