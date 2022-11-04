import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListCars } from '../../actions/carsAction';

function ListCars() {
    const {getListCarsResult,getListCarsLoading,getListCarsError} = useSelector((state)=>state.CarsReducer)
    const dispatch = useDispatch();
    useEffect(()=>{
        //action getcars
        console.log("1. use effect component berhasil");
        dispatch(getListCars());
    }, [dispatch])

    return (
        <div>
            <h4>List Cars</h4>
            {getListCarsResult ? (
                getListCarsResult.map((cars)=>{
                    return(
                        <p key={cars.id}>{cars.manufacture} - {cars.model}</p>
                    )
                })
            ) : getListCarsLoading ? (
                <p>LOADING . . .</p>
            ) : (
                <p>{getListCarsError ? getListCarsError : "Data Kosong"}</p>
            )}
        </div>
    )
}

export default ListCars