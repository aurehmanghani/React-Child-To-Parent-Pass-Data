import {useState} from 'react'

export const Component4 = (props) => {

    const handleEdit = ()=>{
        props.childData({id:1,name:"testing"});
    }
    
    return (
        <div>
            <button onClick={props.handleClickClose}>component4 close</button>
            <button onClick={handleEdit} >Edit</button>
            Component4
        </div>
    )
}

export const Component3 = (props) => {
    return (
        <div>
           Component3
           <Component4 handleClickClose={props.handleClickClose} childData={props.childData}/>
        </div>
    )
}

export const Component2 = (props) => {

    return (
        <div>
            Component2 
            <Component3 handleClickClose={props.handleClickClose} childData={props.childData}/>
        </div>
    )
}


export const Component1 = () => {
    const [show,setShow] =useState(false);


    const handleClick = ()=>{
        setShow(true);
    }
    const handleClickClose = ()=>{
        setShow(false);
    }
    const getChildComponentData = (data) => {
        console.log(data);
    }
    return (
        <div>
            Component1 : {"show :" + show}
            <Component2 handleClickClose={handleClickClose}  childData={getChildComponentData}/>
            <button onClick={handleClick}>Component1 show</button>
        </div>
    )
}
