import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { useHistory } from 'react-router';

const Container = styled.div`
    width : 100%;
    height : 100%;
    display : flex; 
    flex-direction : column;    
    align-items : center;
    
    padding-top : 5.5rem;
`;

const Label = styled.label`
    font-size : 1.2em;
`;
const Input = styled.input`
    width : 100%;
    height : 30px;
    font-size : 1.4em;
    margin-bottom : 1em;
`;

const Submit_Input = styled(Input)`
    font-size: 1.3em;
    height : 45px;
    width : 103.5%;
    background-color : #afafaf;
    border  : none;
    border-radius : 15px;
    margin-top : 0.7em;
    color   : white;
    cursor : pointer;
`;

function CreatePage({Cards, onCreate}) {
    const history = useHistory();

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [tel, setTel] = useState("");

    const beEmpty = ()=>{
        setName("");
        setPosition("");
        setTel("");
    }

    const handleCreate = (e) =>{
        e.preventDefault();
        console.log(Cards.length)
        const newOne = {
            key : Cards.length +1,
            id : Cards.length +1,
            name,
            position,
            tel
        }
        onCreate(newOne);
        beEmpty();
        history.push("/");
    }

    return (
        <Container>
            <form>
                <div>
                    <Label>Name</Label><br/>
                    <Input type="text" value = {name} onChange = {e =>{setName(e.target.value)}}/>
                </div>
                <div>
                    <Label>Position</Label><br/>
                    <Input type="text"  value = {position} onChange = {e =>{setPosition(e.target.value)}}/>
                </div>
                <div>
                    <Label>Tel.</Label><br/>
                    <Input type="text"  value = {tel} onChange = {e =>{setTel(e.target.value)}}/>
                </div>
                <Submit_Input type="submit" value ="Submit" onClick={handleCreate}/>
            </form>
        </Container>
    )
}

export default CreatePage
