import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components'

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
    color : gray;
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

function UpdatePage({selected, onUpdate}) {
    const history = useHistory();
    const [updated, setUpdated] = useState({
        id : selected.id,
        name : selected.name,
        position : selected.position,
        tel : selected.tel
    }); 

    const handleUpdate=(e)=>{
        e.preventDefault();
        onUpdate(updated);
        history.push("/");
    }

    const onChange = (e)=>{
        setUpdated({
            ...updated,
            [e.target.name]:e.target.value         
            }
        )        
    }

    

    return (        
        <Container>
            <form>
                <div>
                    <Label>Name</Label><br/>
                    <Input type="text" value={updated.name} 
                    name="name"
                        onChange = {onChange}
                    />
                </div>
                <div>
                    <Label>Position</Label><br/>
                    <Input type="text" value={updated.position} 
                        name="position"
                        onChange = {onChange}
                    />
                </div>
                <div>
                    <Label>Tel.</Label><br/>
                    <Input type="text" value={updated.tel} 
                        name="tel"
                        onChange = {onChange}
                    />
                </div>
                <Submit_Input type="submit" value ="Update" onClick={handleUpdate}/>
            </form>
        </Container>
    )
}

export default UpdatePage
