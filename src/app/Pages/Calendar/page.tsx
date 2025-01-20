'use client'

import React, { useState } from "react";

interface CalendarDay {
  day: number;
  marker: string | null;
  text: string;
}

const daysInMonth = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  marker: null,
  text: "",
})) as CalendarDay[];

const Calendar = () => {
  const [calendarData, setCalendarData] = useState<CalendarDay[]>(daysInMonth);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [markerType, setMarkerType] = useState(""); // "circle", "X", "$"
  const [customText, setCustomText] = useState("");

  const handleDayClick = (day: React.SetStateAction<number | null>) => {
    setSelectedDay(day);
  };

  const handleAddMarker = () => {
    if (selectedDay === null) {
      alert("Please select a day to mark.");
      return;
    }

    setCalendarData((prevData) =>
      prevData.map((item) =>
        item.day === selectedDay
          ? { ...item, marker: markerType, text: customText }
          : item
      )
    );

    // Reset inputs
    setSelectedDay(null);
    setMarkerType("");
    setCustomText("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6">
      {/* Header */}
      <h1 className="text-3xl text-black font-bold mb-6">Qloud Calendar</h1>

      {/* Input Section */}
      <div className="mb-6 flex flex-col space-y-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter marker type (circle, X, $)"
          className="border text-black border-gray-300 p-2 rounded-md"
          value={markerType}
          onChange={(e) => setMarkerType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter custom text"
          className="border text-black border-gray-300 p-2 rounded-md"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
        />
        <button
          onClick={handleAddMarker}
          className="bg-black text-white py-2 rounded-md hover:bg-gray-800"
        >
          Add Marker
        </button>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-4 w-full max-w-lg text-center font-bold mb-4">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="text-gray-700">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 w-full max-w-lg">
        {calendarData.map((item) => (
          <div
            key={item.day}
            onClick={() => handleDayClick(item.day)}
            className={`p-4 border text-black rounded-md flex flex-col items-center justify-center cursor-pointer ${
              selectedDay === item.day ? "bg-gray-200" : "bg-white"
            }`}
          >
            <span className="text-lg">{item.day}</span>
            {item.marker === "$" && (
              <span className="text-green-500 font-bold mt-2">$</span>
            )}
            {item.marker === "circle" && (
              <div className="w-5 h-5 mt-2 border-2 border-red-500 rounded-full"></div>
            )}
            {item.marker === "X" && (
              <span className="text-red-500 font-bold mt-2">X</span>
            )}
            {item.text && <span className="text-sm text-blue-500 mt-1">{item.text}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
