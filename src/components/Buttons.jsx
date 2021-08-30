import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router';

const Container = styled.div`
    display  : flex;
    width : 100%;
    justify-content : flex-end ;
    /* border : 1px solid black; */
`;

const Button = styled.button`
    border : none;
    width : 50px;
    height : 50px;
    border-radius : 50%;
    font-size : 1.5em;
    margin-right : 0.3em;
    cursor : pointer;
`;

const Plus_Button = styled(Button)`
    background-color : #65b2fa;
`;
const Mod_Button = styled(Button)`
    background-color : #96fae4;
`;

function Buttons({selected}) {
    const history = useHistory();

    const handleCreate = (e)=>{
        e.preventDefault();
        history.push("/create");
    }
    const handleUpdate =(e)=>{
        e.preventDefault();
        history.push(`/update/${selected.id}`)
    }

    return (
        <Container>
            <Mod_Button onClick ={handleUpdate}>i</Mod_Button>
            <Plus_Button onClick ={handleCreate}>+</Plus_Button>            
        </Container>
    )
}

export default Buttons