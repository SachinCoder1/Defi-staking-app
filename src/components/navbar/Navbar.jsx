import React from 'react'

export default function Navbar({account, money}) {
  return (
    <div>Navbar
        <div>
            Account Number is : {account}
            You money is {money}
        </div>
    </div>
  )
}
