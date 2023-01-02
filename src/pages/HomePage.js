import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { getAllNotes } from '../utils/local-data';
import Card from '../components/Card';

function HomePage() {
    let notes = getAllNotes();

    return (
        <div className='container d-flex flex-wrap justify-content-center'>
            {
                notes.length === 0
                    ? <p>Tidak ada catatan</p>
                    : notes.map(note => (
                        <Card {...note} key={note.id} />
                    ))
            }
            <Link to='/notes/new'>
                <FiPlus className='action homepage__action' />
            </Link>
        </div>
    );
};

export default HomePage;
