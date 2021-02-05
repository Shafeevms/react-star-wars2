import React, { useCallback, useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';

const Search = ({ onSearch, entity }) => {
    const timerId = useRef(0);
    const [inputValue, setInputValue] = useState('');
    const changeHandler = useCallback((e) => {
        setInputValue(e.target.value);
     }, []);

     useEffect(() => {
        setInputValue('');
     }, [entity]);

     useEffect(() => {
         if (inputValue) {
             timerId.current = setTimeout(onSearch, 500, inputValue);
         }
        return () => {
            clearTimeout(timerId.current);
        }
     },[timerId, onSearch, inputValue]);
     
    return (
        <Form inline>
        <Form.Control
            onChange={changeHandler}
            value={inputValue}
            className="mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Enter name"
        />
        </Form>
    )
}

export default Search;