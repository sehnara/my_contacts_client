import React from 'react'
import Search from "../components/Search"
import List from "../components/List"
import Details from "../components/Details"
import styled from 'styled-components'

import { useState, useEffect } from 'react'
import Buttons from '../components/Buttons'

import {Route, Switch} from "react-router-dom";
import CreatePage from './CreatePage'
import UpdatePage from './UpdatePage'
import axios from 'axios'

const Container = styled.div`
    display : flex;
    width: 50%;
    height: 60vh;
    border : 3px solid grey;
    border-radius: 15px;
    padding: 15px;    
`;

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    border-right:2px solid whitesmoke;
    padding-right :15px;
    height : 100%;
`;

const Right = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding-left:15px;    
`;

const cards = [
    {
        id :1,
        name : "강세훈",
        position : "mobile Developer",
        tel : "010-5686-2403",
        image : "1.jpeg"
    },
    {
        id :2,
        name : "임준형",
        position : "Car racer",
        tel : "010-1122-3344",
        image : "2.jpeg"
    },
    {
        id :3,
        name : "최은정",
        position : "100m sprinter",
        tel : "010-5566-7788",
        image : "3.jpeg"
    },
    {
        id :4,
        name : "주은지",
        position : "marathoner",
        tel : "010-9900-1122",
        image : "4.jpeg"
    },
    {
        id :5,
        name : "주홍희",
        position : "marathoner",
        tel : "010-9900-1122",
        image : "5.jpeg"
    }
]
function WelcomePage() {

    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState({});
    const [Cards, setCards] = useState(cards);

    const onCreate = (newOne) =>{
       const copied = [...Cards];
       copied.push(newOne);
       setCards(copied);
    }

    const onDelete = (targetId)=>{
        const copied = [...Cards];
        const newOne = copied.filter(item=>{
            return item.id != targetId
        })
        console.log(newOne);
        setCards(newOne);
    }

    const onUpdate = (newOne)=>{        
        const copied = [...cards];
        const newCards = copied.map(item =>{
            if(item.id == newOne.id){
                item = newOne;
            }
            return item
        })
        console.log(newCards);
        setCards(newCards);    
    }

    useEffect(() => {
        axios.get("/contacts").then(res=>console.log(res.data))
    }, [])
    
    return (
        <Container>
            <Left>
                <Search setSearch = {setSearch} search = {search}/>
                <List 
                    cards = {Cards} 
                    search = {search}
                    selected ={selected}
                    setSelected = {setSelected}
                    onDelete = {onDelete}
                />
            </Left>            
            <Right>
                <Switch>
                    <Route exact path="/">
                        <Details selected = {selected}/>
                    </Route>
                    <Route exact path = "/create">
                        <CreatePage
                            Cards = {Cards}
                            onCreate ={onCreate}
                        />
                    </Route>
                    <Route exact path = "/update/:id">
                        <UpdatePage selected ={selected} onUpdate = {onUpdate}/>
                    </Route>
                </Switch>
                <Buttons selected = {selected}/>
            </Right>
        </Container>
    )
}

export default WelcomePage
