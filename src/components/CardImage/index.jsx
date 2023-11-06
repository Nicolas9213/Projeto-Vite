import './CardImage.css';

function CardImage (props) {
    return (
        <div className='Card'>
            <img src={props.img} />
            <div className='textCard'>
            <h3 className="title" >{props.title}</h3>
            <h4 className='description'>{props.description}</h4>
            </div>
            <div className='prices'>
                <h4 className='price'>{props.price}</h4>
                <h4 className='price2'>{props.price2}</h4>
            </div>
        </div>            
    )
}

export default CardImage;