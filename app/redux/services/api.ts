"use client";

import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
const fetchFn = async (
  url: RequestInfo,
  options?: RequestInit
): Promise<Response> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response; // Return the response directly
  } catch (error) {
    console.error("Error in fetchFn:", error);
    throw error; // Propagate error
  }
};
const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  fetchFn,
  // credentials: "same-origin",
});

export const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Header"],
  endpoints: () => ({}),
}) as any;
