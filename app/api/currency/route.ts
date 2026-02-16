import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}/latest/EUR`,
    );

    const data = await res.json();

    return NextResponse.json({
      rate: data.conversion_rates.INR,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch rate" },
      { status: 500 },
    );
  }
}
