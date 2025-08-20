import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 21.250107495065297, // Replace with actual latitude
  lng: 79.24219820330524, // Replace with actual longitude
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBDfMI8AfwnaVSMv4pWvXZCPoZPhmBzO6A">
      <GoogleMap 
  mapContainerStyle={containerStyle} 
  center={center} 
  zoom={15} 
  mapTypeId="satellite"
>
  <Marker position={center} />
</GoogleMap>

    </LoadScript>
  );
};

export default Map;