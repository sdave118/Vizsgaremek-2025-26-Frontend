import { useCallback, useMemo, useState } from "react";
import api from "../api/axios";
import { useActivity } from "./useActivity";

export type DailyIntake = {
  calories: number;
  carbohydrate: number;
  protein: number;
  fat: number;
  date: string;
};

export const useCaliorie = () => {
  const [consumedCalorie, setConsumedCalorie] = useState<number>(0);
  const { burnedCalorie } = useActivity();

  const fetchDailyIntake = useCallback(async () => {
    const res = await api.get("/users/me/daily-intake", {
      withCredentials: true,
    });
    const todayDate = new Date().toISOString().split("T")[0];
    console.log(res);
    const todayIntake: DailyIntake[] = res.data.filter(
      (items: DailyIntake) => items.date == todayDate,
    );
    setConsumedCalorie(todayIntake[0].calories);
    console.log(todayIntake);
  }, []);

  const netCalorie = useMemo(() => {
    return consumedCalorie - burnedCalorie;
  }, [consumedCalorie, burnedCalorie]);

  return {
    consumedCalorie,
    reFetchDailyIntake: fetchDailyIntake,
    netCalorie,
  };
};
