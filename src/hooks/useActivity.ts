import { useCallback, useMemo, useState } from "react";
import api from "../api/axios";

export type ActivityType = {
  id: number;
  activityName: "running";
  duration: number;
  caloriesBurned: number;
};

export type ActivityResponse = {
  message: string;
  data: ActivityType[];
};
export const useActivity = () => {
  const [activityData, setActivityData] = useState<ActivityResponse>();

  const fetchActivities = useCallback(async () => {
    const res = await api.get("/users/me/activities", {
      withCredentials: true,
    });

    setActivityData(res.data);
  }, []);

  const burnedCalorie = useMemo(() => {
    if (!activityData) return 0;
    return activityData?.data.reduce(
      (total, activity) => total + activity.caloriesBurned,
      0,
    );
  }, [activityData]);
  return {
    activityData,
    fetchActivities,
    burnedCalorie,
  };
};
