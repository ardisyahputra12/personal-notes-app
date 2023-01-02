import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils/index';
import { deleteNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';

function NoteDetailsPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [note] = useState(getNote(id));

    const onDelIconClickEventHandler = () => {
        deleteNote(id);
        navigate('/');
    };

    if (note === undefined) {
        return <p className='text-center'>Tidak ada catatan</p>;
    } else {
        let date = showFormattedDate(note.createdAt);
        return (
            <div className='.detail-page'>
                <h1 className='detail-page__title'>{note.title}</h1>
                <p className='detail-page__createdAt'>{date}</p>
                <p className='.detail-page__body'>{note.body}</p>
                <FiTrash2 className='action detail-page__action' onClick={onDelIconClickEventHandler} />
            </div>
        );
    };
};

export default NoteDetailsPage;
