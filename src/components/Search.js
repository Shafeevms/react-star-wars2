import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = ({ getData }) => {
    const [inputValue, setInputValue] = useState('');

    const sumbitHandler = (e) => {
        e.preventDefault();
        getData(inputValue);
     }
    return (
        <Form inline>
        <Form.Control
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            className="mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Enter name"
        />
        <Button onClick={sumbitHandler} className="mb-2">
            Find
        </Button>
        </Form>
    )
}

export default Search;