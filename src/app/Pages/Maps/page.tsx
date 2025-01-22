'use client'
import React, { useState } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { MdLocationOn, MdPerson, MdBusiness } from "react-icons/md";

interface Business {
  name: string;
  location: string;
  details: string;
}

interface User {
  id: number;
  name: string;
  lat: number;
  lng: number;
  business: Business | null;
  ghostMode: boolean;
}

const MapFeature = () => {
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [ghostMode, setGhostMode] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 40.748817,
    longitude: -73.985428,
    zoom: 15,
  });

  // Mapbox token (replace with your token)
  const MAPBOX_TOKEN = "pk.eyJ1IjoicHJhdGhhbTE2MDYiLCJhIjoiY202N2F2cDVuMDljcjJscHoyc3M2eHh5diJ9.DdMF7XA7cp-5LCxmSkNNWg";

  // Sample data for users and activity hotspots
  const users: User[] = [
    {
      id: 1,
      name: "Me",
      lat: 40.748817,
      lng: -73.985428,
      business: null,
      ghostMode: false,
    },
    {
      id: 2,
      name: "Calorie.AI",
      lat: 40.748207,
      lng: -73.987151,
      business: {
        name: "Calorie Track App",
        location: "Silicon Valley, CA, USA",
        details: "Track calories efficiently",
      },
      ghostMode: false,
    },
  ];

  const hotspots = [
    { id: 1, lat: 40.749817, lng: -73.985428, activity: "high" },
    { id: 2, lat: 40.748817, lng: -73.984428, activity: "medium" },
  ];

  const toggleGhostMode = (userId: number) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, ghostMode: !user.ghostMode } : user
    );
    console.log(updatedUsers); // For debugging purposes
  };

  return (
    <div className="relative flex-grow h-[calc(100vh-4rem)] lg:h-[calc(100vh-8rem)]">
      {/* Map Component */}
      <Map
        {...viewport}
        onMove={(evt) => setViewport(evt.viewState)}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "0.5rem",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        }}
      >
        <NavigationControl position="top-left" />
        <GeolocateControl position="top-left" trackUserLocation />

        {/* Markers for Users */}
        {users.map((user) =>
          !user.ghostMode ? (
            <Marker
              key={user.id}
              longitude={user.lng}
              latitude={user.lat}
              anchor="center"
            >
              <div
                className={`${
                  user.business ? "bg-red-500" : "bg-blue-600"
                } p-2 rounded-full cursor-pointer hover:scale-110 transition-transform`}
                onClick={() => setActiveUser(user)} // Show popup when clicked
              >
                {user.business ? (
                  <MdBusiness className="text-white text-3xl" />
                ) : (
                  <MdPerson className="text-white text-3xl" />
                )}
              </div>
            </Marker>
          ) : null
        )}

        {/* Hotspot Layer */}
        {hotspots.map((hotspot) => (
          <Marker
            key={hotspot.id}
            longitude={hotspot.lng}
            latitude={hotspot.lat}
            anchor="center"
          >
            <div
              className={`${
                hotspot.activity === "high"
                  ? "bg-red-500"
                  : hotspot.activity === "medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              } p-2 rounded-full cursor-pointer`}
            >
              <MdLocationOn className="text-white text-3xl animate-bounce" />
            </div>
          </Marker>
        ))}

        {/* Popup for Active User */}
        {activeUser && (
          <Popup
            longitude={activeUser.lng}
            latitude={activeUser.lat}
            anchor="top"
            onClose={() => setActiveUser(null)}
            className="rounded-lg shadow-lg"
          >
            <div>
              <h2 className="text-lg font-bold text-black">
                {activeUser.business?.name || activeUser.name}
              </h2>
              {activeUser.business ? (
                <>
                  <p className="text-sm text-black">{activeUser.business.location}</p>
                  <p className="text-sm text-black">{activeUser.business.details}</p>
                  <button className="w-full mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                    Apply
                  </button>
                </>
              ) : (
                <p className="text-sm text-black">No business details available</p>
              )}
            </div>
          </Popup>
        )}
      </Map>

      {/* Controls */}
      <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg w-64">
        <div className="flex items-center justify-between mb-4">
          <span className="font-medium text-black">Ghost Mode</span>
          <button onClick={() => setGhostMode(!ghostMode)} className="text-lg">
            {ghostMode ? <FaToggleOn className="text-green-500" /> : <FaToggleOff />}
          </button>
        </div>

        <div className="space-y-2 text-black">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <span>{user.name}</span>
              <button
                onClick={() => toggleGhostMode(user.id)}
                className="text-lg text-black hover:text-gray-600"
              >
                {user.ghostMode ? <FaToggleOff /> : <FaToggleOn className="text-green-500" />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapFeature;
