import React from 'react'

export default function Data(props) {

 

  
  return (
    <div className='container'>
    <h1>Deposit/Withdraw Money  </h1><br/>
    <div className="addcart" style={{display:'flex', flexDirection:'row'}}>
    <button className="btn btn-primary mx-3" onClick={props.addMoney}>+</button>
    <p>Update Balance</p>
    <button className='btn btn-primary mx-3' onClick={props.withdrawMoney}>-</button>
    </div>
    
      
    </div>
  )
}



