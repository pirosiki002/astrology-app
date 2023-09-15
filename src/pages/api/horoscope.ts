import { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data.json";
import { HoroscopeData } from "src/types/horoscope";

const horoscopeData: HoroscopeData = data;

const horoscopeHandler = (req: NextApiRequest, res: NextApiResponse) => {
  // サイン（例: Aries, Taurus）や日付（例: 03-27-2023）をクエリから取得
  const { sign, date } = req.query;

  if (!sign || !date) {
    return res.status(400).json({ error: "Please provide a sign and a date." });
  }

  const horoscopeInfo = horoscopeData[sign as string]?.[date as string];

  if (!horoscopeInfo) {
    return res.status(404).json({
      error: "Horoscope data not found for the provided sign and date.",
    });
  }

  return res.status(200).json(horoscopeInfo);
};

export default horoscopeHandler;
