import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const Name = styled.h3`    
    border-right : 3px solid whitesmoke;
    flex : 1;
    text-align : center;
`;

const DetailData = styled.div`
    flex : 3;
    display : flex;
    flex-direction : column;    
    padding-left : 0.5em;    
    justify-content:center;
`;
const Content = styled.div`
margin: 0.2em; `;

const Button = styled.button`
    width : 20px;
    height : 100%;
    font-size : 1.2em;
    background-color : #fd6e6e;
    border: none;
    cursor : pointer;
    z-index : 100;
`;

function Card({item, selected,setSelected, onDelete}) {
    const history = useHistory();
    const Container = styled.div`    
    width : 97%;
    height : 70px;
    margin : 0.1em;
    border : 1px solid black;
    display : flex;
    justify-content : center;
    align-items : center;    
    border-radius : 5px;
    cursor : pointer;
    background-color : ${selected.id === item.id ? "grey" : "white"};
    color : ${selected.id === item.id ? "white" : "black"};
`;
    const handleClick = (e)=>{
        e.preventDefault();
        if(history.location.pathname !== "/"){
            history.push("/");
        }
        setSelected(item);
    }

    const handleDelete =(e)=>{
        e.preventDefault();
        const targetId = e.target.id;
        onDelete(targetId);
    }

    return (
        <Container onClick = {handleClick} >
            <Name>{item.name}</Name>
            <DetailData>
                <Content>- {item.position}</Content>
                <Content>- {item.tel}</Content>
            </DetailData>
            <Button onClick = {handleDelete} id = {item.id}>-</ Button>
        </Container>
    )
}

export default Card