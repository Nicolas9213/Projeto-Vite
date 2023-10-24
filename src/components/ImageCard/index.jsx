import './ImageCard.css';

function ImageCard (props) {
        return (
            <div>
                <img src={props.img} />
                <p className="imgCard" >{props.text}</p>
            </div>            
        )
}

export default ImageCard;