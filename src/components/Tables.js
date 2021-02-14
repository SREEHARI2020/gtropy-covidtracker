import React from 'react'

const Tables = ({statewise}) => {

    console.log("tt",statewise)
    return (
        <div>
            <table>
  <tr>
    <th>STATE</th>
    <th>CONFIRMED</th>
    <th>Active</th>
    <th>Recovered</th>
    <th>DECEASED</th>
  </tr>
 { statewise ? 
 statewise.map((item)=>( <tr>
    <td>{item.state}</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>)) :<div></div>}
 

</table>
        </div>
    )
}

export default Tables
