"use client";

import React, { useState } from "react";
import {
  useForm,
  useFieldArray,
  SubmitHandler,
  Controller,
} from "react-hook-form";

type TicketTier = {
  name: string;
  price: number;
  quantity: number;
};

type Voucher = {
  code: string;
  discountPercent: number;
};

type EventInputs = {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  ticketTiers: TicketTier[];
  vouchers: Voucher[];
};

const CreateEventForm: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EventInputs>({
    defaultValues: {
      ticketTiers: [{ name: "", price: 0, quantity: 0 }],
      vouchers: [{ code: "", discountPercent: 0 }],
    },
  });

  const {
    fields: ticketFields,
    append: appendTicket,
    remove: removeTicket,
  } = useFieldArray({
    control,
    name: "ticketTiers",
  });

  const {
    fields: voucherFields,
    append: appendVoucher,
    remove: removeVoucher,
  } = useFieldArray({
    control,
    name: "vouchers",
  });

  const onSubmit: SubmitHandler<EventInputs> = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Event Title
        </label>
        <input
          id="title"
          type="text"
          {...register("title", { required: "Event title is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          {...register("description", {
            required: "Event description is required",
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows={4}
        ></textarea>
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Date
        </label>
        <input
          id="date"
          type="date"
          {...register("date", { required: "Event date is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.date && (
          <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="time"
          className="block text-sm font-medium text-gray-700"
        >
          Time
        </label>
        <input
          id="time"
          type="time"
          {...register("time", { required: "Event time is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.time && (
          <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location
        </label>
        <input
          id="location"
          type="text"
          {...register("location", { required: "Event location is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Ticket Tiers
        </label>
        {ticketFields.map((field, index) => (
          <div key={field.id} className="mt-2 space-y-2">
            <input
              {...register(`ticketTiers.${index}.name` as const, {
                required: "Ticket name is required",
              })}
              placeholder="Ticket Name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <input
              type="number"
              {...register(`ticketTiers.${index}.price` as const, {
                required: "Price is required",
                min: 0,
              })}
              placeholder="Price"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <input
              type="number"
              {...register(`ticketTiers.${index}.quantity` as const, {
                required: "Quantity is required",
                min: 1,
              })}
              placeholder="Quantity"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <button
              type="button"
              onClick={() => removeTicket(index)}
              className="text-red-600 hover:text-red-800"
            >
              Remove Ticket Tier
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendTicket({ name: "", price: 0, quantity: 0 })}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Ticket Tier
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Vouchers
        </label>
        {voucherFields.map((field, index) => (
          <div key={field.id} className="mt-2 space-y-2">
            <input
              {...register(`vouchers.${index}.code` as const, {
                required: "Voucher code is required",
              })}
              placeholder="Voucher Code"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <input
              type="number"
              {...register(`vouchers.${index}.discountPercent` as const, {
                required: "Discount percent is required",
                min: 0,
                max: 100,
              })}
              placeholder="Discount Percent"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <button
              type="button"
              onClick={() => removeVoucher(index)}
              className="text-red-600 hover:text-red-800"
            >
              Remove Voucher
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendVoucher({ code: "", discountPercent: 0 })}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Voucher
        </button>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Event
      </button>
    </form>
  );
};

export default CreateEventForm;
