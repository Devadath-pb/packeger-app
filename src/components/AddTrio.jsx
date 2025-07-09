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
      body: (`Date=${e.target.Date.value}&Place=${e.target.Place.value}&Coordinator=${e.target.Coordinator.value}&Rent=${e.target.rent.value}&Bus_Fare=${e.target.bus.value}&Hotel_Payement=${e.target.hotel.value}&Ticket_Payment=${e.target.ticket.value}&Other_Expenses=${e.target.other.value}&Total_Expense=${e.target.Total_Expense.value}&Balance=${e.target.Balance.value}`)
    }).then(res => res.text()).then(data => {
      alert(data)
    }).catch(error => console.log(error))
  }


  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-4">
                <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                  <label htmlFor="" className="form-label">Date</label>
                  <input type="date" name='Date' className="form-control" />

                </div>
                <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                  <label htmlFor="" className="from-label">Place</label>
                  <input type="text" name='Place' className="form-control" />

                </div>
                <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                  <label htmlFor="" className="form-label">Coordinator</label>
                  <input type="text" name='Coordinator' className="form-control" />

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
                  <input type="number" className="form-control" name='Total_Expense' readOnly value={expense} />

                </div>
                <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                  <label htmlFor="" className="form-label">Balance</label>
                  <input type="number" className="form-control" name='Balance' readOnly value={balance} />
                </div>
                <div className="col col-12 col-sm-12-col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                  <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-outline-success" type="submit">Save</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </form >
    </div>

  )
}

export default AddTrio