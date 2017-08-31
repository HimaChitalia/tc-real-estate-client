import React from 'react'

const Location = ({ location: { key, name, address, distance, travel_time}}) =>
  <tr key={name}>
    <td className="uk-text-truncate">{name}</td>
    <td className="uk-text-truncate">{address}</td>
    <td className="uk-text-truncate">{distance}</td>
    <td className="uk-text-truncate">{travel_time}</td>
  </tr>

export default Location
