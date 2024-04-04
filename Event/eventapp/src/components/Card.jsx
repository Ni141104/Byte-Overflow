import './Card.css';
function Card({ id,
    organization,
    title,
    city,
    location,
    image, link }) {
    return (
        <div className="card">
            <img src={image} alt="error" className="image" />
            <div>
                <a href={link}>{location}</a>
                <p className="city">{city}</p>
                <p className="title">{title}</p>
            </div>
        </div>
    )
}

export default Card;

