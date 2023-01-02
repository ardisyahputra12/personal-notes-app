import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';

function AddNotePage() {
    const navigate = useNavigate();
    let [titleState, setTitleState] = useState('');
    let [bodyState, setBodyState] = useState('');

    const onTitleChangeEventHandler = (ev) => {
        setTitleState(ev.target.value);
    };

    const onBodyChangeEventHandler = (ev) => {
        setBodyState(ev.target.value);
    };

    const onNoteClickEventHandler = (ev) => {
        addNote({
            title: titleState,
            body: bodyState,
        });
        navigate('/');
    };

    return (
        <div className='add-new-page__input'>
            <input
                type='text'
                className='add-new-page__input__title'
                placeholder='Title'
                onChange={onTitleChangeEventHandler}
            />
            <textarea
                className='add-new-page__input__body'
                placeholder='Sebenarnya saya adalah ...'
                onChange={onBodyChangeEventHandler}
            />
            <FiCheck
                className='action add-new-page__action'
                onClick={onNoteClickEventHandler}
            />
        </div>
    );
};

export default AddNotePage;
