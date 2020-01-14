import React from 'react';

export const Notes = ({notes}) => {
    return (
        <div>
            <ul className='list-group'>
                {notes.map(note => (
                    <li
                        className='list-group-item'
                        key={note.id}
                    >
                        {note.title}</li>
                ))}

            </ul>
        </div>
    );
};
