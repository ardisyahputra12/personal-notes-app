import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';

function Card({ id, title, body, createdAt }) {
    let date = showFormattedDate(createdAt);
    const desc = body.length < 100 ? body : body.substring(0, 100).concat('...');

    return (
        <div className='card text-center text-bg-light m-2' style={{ width: '18rem', maxHeight: '18rem' }}>
            <div className='card-header'>
                <h5 className='card-title p-0 m-0'>{title}</h5>
            </div>
            <div className='card-body d-flex flex-column justify-content-between'>
                <p className='card-text text-start'>{desc}</p>
                <Link to={`/notes/${id}`} className='btn btn-outline-secondary btn-sm w-50 align-self-center mt-4'>See details</Link>
            </div>
            <div className='card-footer text-muted'>
                {date}
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default Card;
