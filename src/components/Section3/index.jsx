import CardImage from '../CardImage';
import ImageCard from '../ImageCard';
import './Section3.css';

function Section3 () {
    return (
        <section className='section3'>
            <div className='row'>
            <h2>Our Products</h2>
                    <CardImage img="./public/images/Syltherine.png" title="Syltherine" description="Stylish cafe chair" price="Rp 2.500.000"/>
                    <CardImage img="./public/images/Lolito.png" title="Leviosa" description="Stylish cafe chair" price="Rp 2.500.000"/>
                    <CardImage img="./public/images/Lolito.png" title="Lolito" description="Luxury big sofa" price="Rp 7.000.000"/>
                    <CardImage img="./public/images/Respira.png" title="Respira" description="Outdoor bar table and stool" price="Rp 500.000"/>
            </div>
            <div className='row'>
                    <CardImage img="./public/images/Grifo.png" title="Grifo" description="Night lamp" price="Rp 1.500.000"/>
                    <CardImage img="./public/images/Muggo.png" title="Muggo" description="Small mug" price="Rp 150.000"/>
                    <CardImage img="./public/images/Pingsky.png" title="Pingsky" description="Cute bed set" price="7.000.000"/>
                    <CardImage img="./public/images/Potty.png" title="Potty" description="Minimalist flower pot" price="Rp 500.000"/>
            </div>
        </section>
    )
}

export default Section3;