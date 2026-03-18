import { useCallback, useMemo, useState } from "react";
import api from "../api/axios";

export type ActivityType = {
  id: number;
  name: string;
  caloriesBurnedPerHour: number;
};

export type UserActivityType = {
  id: number;
  activityName: string;
  duration: number;
  caloriesBurned: number;
  date: string;
};

export type ActivityResponse = {
  message: string;
  data: UserActivityType[];
};
export const useActivity = () => {
  const [userActivityData, setUserActivityData] = useState<ActivityResponse>();
  const [activityData, setActivityData] = useState<ActivityType[]>([]);

  const today = new Date().toISOString().split("T")[0];

  const fetchUserActivities = useCallback(async () => {
    const res = await api.get("/users/me/activities", {
      withCredentials: true,
    });

    setUserActivityData(res.data);
  }, []);

  const fetchActivities = useCallback(async () => {
    const res = await api.get("/activity/all", { withCredentials: true });
    setActivityData(res.data.data);
  }, []);

  const addUserActivity = async (activityId: number, duration: number) => {
    console.log(`activity id: ${activityId} duration: ${duration}`);
    const res = await api.post(
      "/users/me/activities/add",
      { activityId, duration },
      { withCredentials: true },
    );
    setUserActivityData((prev) => ({
      message: prev?.message ?? "",
      data: [...(prev?.data ?? []), res.data.data],
    }));
  };

  const todayUserActivityData = useMemo(() => {
    if (!userActivityData) return [];

    return userActivityData?.data.filter((data) => data.date.startsWith(today));
  }, [userActivityData, today]);

  const burnedCalorie = useMemo(() => {
    if (!todayUserActivityData) return 0;

    return todayUserActivityData.reduce(
      (total, activity) => total + activity.caloriesBurned,
      0,
    );
  }, [todayUserActivityData]);

  return {
    userActivityData,
    fetchUserActivities,
    fetchActivities,
    activityData,
    burnedCalorie,
    addUserActivity,
    todayUserActivityData,
  };
};
