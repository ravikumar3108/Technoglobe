import React from 'react'
import { User , Product } from './Data'


function Users() {
  return (
    <div>
      {User.map((item)=>{
        return(
            <>{
            item.name
            } <br />
        {
            item.id
            } <br />
            </>
        )
      })}
    </div>
  )
}

export default Users
