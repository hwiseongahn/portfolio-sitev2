import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

  const { cityId } = params
  console.log(cityId);

  const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=waka_4b0d1b8e-e6bf-44f4-928a-64216f811e62`;
  
  console.log(url)
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return NextResponse.json({ data });
}