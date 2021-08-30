import React from 'react'
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
    border-top : 3px solid whitesmoke;
    display : flex;
    flex-direction : column;
    padding-top : 15px;
    height : 100%;
    overflow-y : scroll;    
`;


function List({cards, search, selected, setSelected, onDelete}) {
    
    const filtered = cards.filter(item =>{
        const name = item.name;
        return name.includes(search)
    })    
    
    return (
        <Container>
            {
                filtered.map(item => {
                    return <Card
                        key = {item.id}
                        item ={item}
                        selected = {selected}
                        setSelected = {setSelected}
                        onDelete= {onDelete}
                    />;
                })
            }
        </Container>
    )
}

export default List;
