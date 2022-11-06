import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListCars } from '../../actions/carsAction';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dateTime(hasil){
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    const hasil = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))
    return hasil
}

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