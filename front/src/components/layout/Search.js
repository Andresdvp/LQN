import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { FaSearchPlus } from "react-icons/fa";

export const Search = () => {
    const [keyword,setKeyword]=useState("");
    const navigate= useNavigate();

    const searchHandler = (e) =>{
        e.preventDefault();
        //si hay algun cambio busquelo
        if(keyword.trim()){
            navigate(`/search/${keyword}`)
        }else{
            navigate("/")
        }
    }



    return (
        <form onSubmit={searchHandler} >

            <div className='input-group'>
                <input
                    type='text'
                    id='search_field'
                    class="form-control"
                    placeholder='Que producto buscas?...' 
                    onChange={(e)=>setKeyword(e.target.value)}
                    />

                <div class='input-group-append'>
                    <button class='btn' id='search_btn' >
                        <FaSearchPlus class="icon" aria-hidden='true' />
                    </button>
                </div>
            </div>
        </form>
    );
}

