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

function ListCars({submit, data, jml, driveroption, tgl, wkt}) {
    const {getListCarsResult,getListCarsLoading,getListCarsError} = useSelector((state)=>state.CarsReducer)
    const dispatch = useDispatch();
    const jumlah = jml;
    const tipe = driveroption === 'true' ? true : false
    let slice = (`${tgl}T${wkt}`);
    let formdate = Date.parse(slice);

    console.log(Date.parse(tgl));
    console.log(typeof(formdate));

    useEffect(()=>{
        //action getcars
        console.log("1. use effect component berhasil");
        dispatch(getListCars());
    }, [dispatch])

    return (
        <div className="container card-cars">
            {getListCarsResult ? (
                getListCarsResult.filter((cars)=>cars.capacity >= jumlah && cars.available === tipe && Date.parse(dateTime(cars.availableAt)) > formdate).map((cars) =>{
                    return(
                        // <p key={cars.id}>{cars.manufacture} - {cars.model}</p>
                        <div className="card mb-3">
                            <img src="${cars.image}" className="card-img" height="300" alt="${cars.manufacture}"/>
                            <div className="card-body">
                                <div className="card-text">${cars.model}</div>
                                <h5 className="card-title">${cars.rentPerDay} /Hari</h5>
                                <p className="card-text">${cars.description}</p>
                                <p className="card-text"><img src="images/user.png" alt="" width="20px" height="20px"/> ${cars.capacity}</p>
                                <p className="card-text"><img src="images/setting.png" alt="" width="20px" height="20px"/> ${cars.transmission}</p>
                                <p className="card-text"><img src="images/calendar.png" alt="" width="20px" height="20px"/> ${cars.year}</p>
                                <a className="btn btn-success justify-content-center">Pilih Mobil</a>
                            </div>
                        </div>
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