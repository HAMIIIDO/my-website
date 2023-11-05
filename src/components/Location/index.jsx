import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './index.scss'
const Location = () => {
  return (
    <div className='wraper'><div className="info_map">

    Hamid Najari,
    <br />
    Morocco,
    <br />
    Agadir 80000
    <br />
    <span>hamidenajari9@gmil.com</span>
 </div>
<div className="map_wrap">
  
    <MapContainer center={[30.378041, -9.479118]} zoom={13} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[30.378041, -9.479118]}>
            <Popup>Hamido lives here, come over for a cup of coffee :)</Popup>
        </Marker>
    </MapContainer>
</div>
    </div>
  )
}

export default Location