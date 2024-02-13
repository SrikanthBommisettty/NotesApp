// DisplayNotes.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@mui/material';

const DisplayNotes = () => {
    const notes = useSelector(state => state.notes);

    return (
        <div className='d-flex flex-column w-50'>
            {notes && notes.map((note, index) => (
                <Card key={index} style={{ margin: '10px' }}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {note.title}
                        </Typography>
                        <Typography color="textSecondary">
                            {note.time.toLocaleString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {note.desc}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default DisplayNotes;
