import { useEffect, useState } from 'react';
import React from 'react'
import { NavBar } from './NavBar'
{/*https://script.google.com/macros/s/AKfycbyxfluDgkh0jC7dTptpNTeWv-HwNzQzvnaQvBiSO0PH9kTtEtgjCWXZBtuUteC_jL2f/exec*/ }
const ViewTrip = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const GET_URL = 'https://script.google.com/macros/s/AKfycbzVSJPq_DEDce_oumAFQBu9NEwCGnq0iawFW4dlQ11LMmfPkRWeSikY5c1r6nFZERhG/exec'; // Replace with your GET link

  useEffect(() => {
    fetch(GET_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2 className="mt-3 mb-3">Tour List</h2>

            {loading ? (
              <p>Loading...</p>
            ) : data.length === 0 ? (
              <p>No Tour data found.</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Place</th>
                    <th scope="col">Coordinator</th>
                    <th scope="col">Rent</th>
                    <th scope="col">Bus Fare</th>
                    <th scope="col">Hotel Payement</th>
                    <th scope="col">Ticket Payment</th>
                    <th scope="col">Other Expenses</th>
                    <th scope="col">Total Expense</th>
                    <th scope="col">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((value, index) => (
                    <tr key={index}>
                      <td>{value.Date}</td>
                      <td>{value.Place}</td>
                      <td>{value.Coordinator}</td>
                      <td>{value.Rent}</td>
                      <td>{value.Bus_Fare}</td>
                      <td>{value.Hotel_Payement}</td>
                      <td>{value.Ticket_Payment}</td>
                      <td>{value.Other_Expenses}</td>
                      <td>{value.Total_Expense}</td>
                      <td>{value.Balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewTrip