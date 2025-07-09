import React, { useState } from 'react'
import { NavBar } from './NavBar'

const AddTrio = () => {

  const [rent, setrent] = useState('')
  const [bus, setbus] = useState('')
  const [hotel, sethotel] = useState('')
  const [ticket, setticket] = useState('')
  const [other, setother] = useState('')
  const [expense, setexpence] = useState('')
  const [balance, setbalance] = useState('')

  const inputHandler = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'rent':
        setrent(value);
        break;
      case 'bus':
        setbus(value);
        break;
      case 'hotel':
        sethotel(value);
        break;
      case 'ticket':
        setticket(value);
        break;
      case 'other':
        setother(value);
        break;
      default:
        break;
    }
  };


  const adder = () => {
    const sum = Number(bus) + Number(hotel) + Number(ticket) + Number(other);
    setexpence(sum);
    const bal = Number(rent) - Number(sum);
    setbalance(bal);
  }

   const handleSubmit = (e) => {
        e.preventDefault()
        const url = "https://script.google.com/macros/s/AKfycbzVSJPq_DEDce_oumAFQBu9NEwCGnq0iawFW4dlQ11LMmfPkRWeSikY5c1r6nFZERhG/exec"
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: (`Name=${e.target.name.value}&Collage=${e.target.collage.value}&Roll_number=${e.target.roll_number.value}`)
        }).then(res => res.text()).then(data => {
            alert(data)
        }).catch(error => console.log(error))
    }


  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-4">
              <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Date</label>
                <input type="date" className="form-control" />

              </div>
              <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="from-label">Place</label>
                <input type="text" className="form-control" />

              </div>
              <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Coordinator</label>
                <input type="text" className="form-control" />

              </div>
              <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Rent</label>
                <input type="number" className="form-control" name='rent' value={rent} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Bus Fare</label>
                <input type="number" className="form-control" name='bus' value={bus} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Hotel Payement</label>
                <input type="number" className="form-control" name='hotel' value={hotel} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Ticket Payment</label>
                <input type="number" className="form-control" name='ticket' value={ticket} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Other Expenses</label>
                <input type="number" className="form-control" name='other' value={other} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-12-col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div class="d-grid gap-2 col-6 mx-auto">
                  <button onClick={adder} class="btn btn-outline-primary" type="button">Show Result</button>
                </div>

              </div>
              <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Total Expense</label>
                <input type="number" className="form-control" readOnly value={expense} />

              </div>
              <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Balance</label>
                <input type="number" className="form-control" readOnly value={balance} />
              </div>
              <div className="col col-12 col-sm-12-col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-outline-success" type="button">Save</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AddTrio