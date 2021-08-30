import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;    
    justify-content : center;
    padding-top : 1em;
    /* border : 1px solid black; */
`;
const Data = styled.div`
    font-size:1.2em; 
    padding-bottom : 0.3em;
    margin-bottom : 1em;
    border-bottom : 2px solid whitesmoke;
`;
// const Image = styled.img`
//     margin-top : -0.5em;
//     align-self : center;
    
//     border : 3px solid whitesmoke;
//     box-sizing : border-box;
//     border-radius : 5px;
// `;

function Details({selected}) {
    // const imageURL = `/images/${selected.image}`;
    return (
        <Container>
            <Data>Name : {selected.name}</Data>
            <Data>Position : {selected.position}</Data>
            <Data>Telephone : {selected.tel}</Data>            
            {/* <Image src={imageURL} alt="image" width = "280" height = "300"/> */}
        </Container>
    )
}

export default Details;