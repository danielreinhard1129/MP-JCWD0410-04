"use client";

import React, { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Paperclip,
  DollarSign,
  Users,
} from "lucide-react";

const EventCreationForm = () => {
  const [eventName, setEventName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Work");
  const [isBusy, setIsBusy] = useState(true);
  const [isPublic, setIsPublic] = useState(true);
  const [price, setPrice] = useState("");
  const [quota, setQuota] = useState("");

  const categories = [
    { name: "Work", color: "#3B82F6" },
    { name: "Personal", color: "#06B6D4" },
    { name: "Family", color: "#FBBF24" },
    { name: "Holiday", color: "#F97316" },
    { name: "Other", color: "#8B5CF6" },
  ];

  return (
    <div className="container mx-auto flex min-h-screen max-w-full items-center justify-center bg-grey1">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Create New Event</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Name Your Event
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Event name goes here"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Event Date
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Select date"
              />
              <Calendar
                className="absolute right-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Ends After
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Select date"
              />
              <Calendar
                className="absolute right-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Start Time
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Select time"
              />
              <Clock
                className="absolute right-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              End Time
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Select time"
              />
              <Clock
                className="absolute right-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div className="col-span-2">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter location"
              />
              <MapPin
                className="absolute right-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Price
            </label>
            <div className="relative">
              <input
                type="number"
                className="w-full rounded-md border border-gray-300 p-2 pl-8 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <DollarSign
                className="absolute left-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Quota
            </label>
            <div className="relative">
              <input
                type="number"
                className="w-full rounded-md border border-gray-300 p-2 pl-8 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter quota"
                value={quota}
                onChange={(e) => setQuota(e.target.value)}
              />
              <Users
                className="absolute left-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div className="col-span-2">
            <button className="flex items-center text-indigo-600 hover:text-indigo-700">
              <Paperclip size={20} className="mr-2" />
              Attach File
            </button>
          </div>

          <div className="col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Choose Event Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`rounded-md px-3 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    selectedCategory === category.name
                      ? "text-white ring-2 ring-indigo-500 ring-offset-2"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={{
                    backgroundColor:
                      selectedCategory === category.name ? category.color : "",
                  }}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Cancel
          </button>
          <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCreationForm;
