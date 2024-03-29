import React from 'react';
import './Paginado.css'
import {useDispatch} from 'react-redux'
import { getDatas} from '../../Redux/action'



export default function Paginado ({dataPerPage, allData, paginado, setCurrentPage,currentPage}) { 
const dispatch = useDispatch()

const pageNumbers = []
for (let i = 1; i<= Math.ceil(allData/dataPerPage); i++){
    pageNumbers.push(i)
}

function handlePrev(){
    setCurrentPage(currentPage - 1)
    dispatch(getDatas())

}
function handleNext(){
setCurrentPage(currentPage + 1)
dispatch(getDatas())
}
return (
    <nav className='pagi'>
        <ul className='but' >
        <button className='but'  disabled={currentPage === pageNumbers[0]? true : false} onClick={(e)=> handlePrev(e) }>Prev</button>
     
            {pageNumbers && pageNumbers.map(number=>( 
               
                <button className='but' key={number} onClick={() =>paginado(number)}>{number}</button>
                
            ))}
        <button className='but' disabled={currentPage === pageNumbers[pageNumbers.length -1]? true : false} onClick={(e)=> handleNext(e)}>Next</button>
        </ul>
    </nav>
)
}