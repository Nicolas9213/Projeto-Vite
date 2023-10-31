import './Footer.css';

function Footer () {
    return (<section className='footer'>
        <div className='part1'>
            <div className='texta'>
                <h4>Funiro</h4>
                <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div className='textb'>
                <h4>Links</h4>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className='textc'>
                <h4>Help</h4>
                <p>Payment Options</p>
                <p>Returns</p>
                <p>Privacy Policies</p>
            </div>
            <div className='textd'>
                <h4>Newsletter</h4>
                <p>Enter Your Email Address</p>
            </div>
        </div>
    </section>
    )
}

export default Footer;