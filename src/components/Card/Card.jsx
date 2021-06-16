import React from 'react';
import { Card} from 'react-bootstrap';
import logo from '../../img/movie.jpg';

function CardItem({type, title, imdbID, poster, year}) {

    return (
        <>
        <Card className="mt-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={poster === "N/A" ? logo : poster} />
            <Card.Body>
                <Card.Title>Title: {title}</Card.Title>
                <Card.Text>
                    <div className="year">Year: {year}</div>
                    <div className="imdbID">imdbID: {imdbID}</div>
                    <div className="type">Type: {type}</div>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default CardItem
