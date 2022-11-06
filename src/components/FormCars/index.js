import * as React from 'react';
import NavBar from './NavBar';
import ListCars from './ListCars';
import Footer from './Footer';
  
class FormCars extends React.Component{
    constructor(pros) {
    super(pros);
    this.state = {driveroption: '',jml:'',tgl: '', wkt: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.data = this.data.bind(this)
    }

    handleChange(event) {
        const value = event.target.value
        const name = event.target.name
        this.setState({[name] : value})
    }
  
    handleSubmit(event) {
    event.preventDefault()

    console.log(this.state.driveroption);
    console.log(this.state.jml);
    console.log(this.state.tgl);
    console.log(this.state.wkt);
    }

    data(event) {
    event.preventDefault()
    const jml = this.state.jml
    console.log("Jumlah : " + jml);
    const filter = [this.state.jml, this.state.driveroption, this.state.tgl, this.state.wkt]

    return filter
    }

    render(){
        return(
            <>
                <NavBar/>
                <div className="row">
                    <div className="col">
                        <h1 className="fw-bolder">Sewa Rental Mobil Terbaik di Kawasan Surabaya</h1>
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    </div>
                    <div className="col-lg">
                        <img src="images/mobil.png" alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center form">
                        <div className="col-3">
                            <label for="tipe">Tipe Driver</label>
                            <div className="input-group mb-3">
                                <select className="form-select" id="driver-option" name='driveroption' value={this.state.value} onChange={this.handleChange}>
                                    <option selected disabled hidden value="Pilih">Pilih Tipe Driver</option>
                                    <option value="true">Dengan Sopir</option>
                                    <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-2">
                            <label for="tgl">Tanggal</label>
                            <div className="input-group mb-3">
                                <input id="date" className="form-control" type="date" name='tgl' value={this.state.tgl} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col-2">
                            <label for="wkt">Waktu Jemput/Ambil</label>
                            <div className="input-group mb-3">
                                <input id="time" className="form-control" type="time" name='wkt' value={this.state.wkt} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col-3">
                            <label for="jml">Jumlah Penumpang (optional)</label>
                            <div className="input-group mb-3">
                                <input id="jml" className="form-control" type="number" name='jml' value={this.state.jml} onChange={this.handleChange} placeholder="Jumlah Penumpang"/>
                            </div>
                        </div>
                        <div className="col-2"><br/>
                            <button type="submit" className="btn btn-success mb-3 filter" id="filter" name='submit'>Cari Mobil</button>
                        </div>
                    </div>
                </div>
                <ListCars submit={this.handleSubmit} data={this.data} jml={this.state.jml} driveroption={this.state.driveroption} tgl={this.state.tgl} wkt={this.state.wkt}/>
                <Footer/>
            </>
      )
  }
}

export default FormCars