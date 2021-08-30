import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 15%;
`;

const Input = styled.input`
    width : 97%;
    height: 70%;
    border-radius: 10px;
    font-size: 1.5em;        
`;

function Search({search, setSearch}) {

    const handleSearch = (e)=>{
        const value = e.target.value; 
        setSearch(value);        
    }

    return (
        <Container>
            <Input 
                type="text" 
                autoFocus 
                placeholder="이름을 검색하시오"                 
                value = {search}
                onChange = {handleSearch}
            />    
        </Container>
    )
}

export default Search
