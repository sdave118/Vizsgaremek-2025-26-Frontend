import { createContext, useContext, useEffect, useMemo } from "react";
import { useActivity, type ActivityResponse } from "../hooks/useActivity";
import { useDailyIntake, type ResolvedDailyEntry } from "../hooks/useMeals";

interface StatisticsContextValue {
  userActivityData: ActivityResponse | undefined;
  dailyIntake: ResolvedDailyEntry[];
  loading: boolean;
  avgCaloriesConsumed: string | number;
  avgCaloriesBurned: string | number;
}

const StatisticsContext = createContext<StatisticsContextValue | null>(null);

export const StatisticsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { userActivityData, fetchUserActivities } = useActivity();
  const { dailyIntake, loading } = useDailyIntake();

  const avgCaloriesConsumed = useMemo(() => {
    if (!dailyIntake.length) return 0;
    const total = dailyIntake.reduce((sum, entry) => sum + entry.calories, 0);
    return (total / dailyIntake.length).toFixed(1);
  }, [dailyIntake]);

  const avgCaloriesBurned = useMemo(() => {
    if (!userActivityData?.data.length) return 0;
    const grouped = userActivityData.data.reduce<Record<string, number>>(
      (acc, a) => {
        acc[a.date] = (acc[a.date] ?? 0) + a.caloriesBurned;
        return acc;
      },
      {},
    );
    const days = Object.keys(grouped);
    const total = Object.values(grouped).reduce((sum, v) => sum + v, 0);
    return (total / days.length).toFixed(1);
  }, [userActivityData]);

  useEffect(() => {
    fetchUserActivities();
  }, [fetchUserActivities]);

  return (
    <StatisticsContext.Provider
      value={{
        userActivityData,
        dailyIntake,
        loading,
        avgCaloriesConsumed,
        avgCaloriesBurned,
      }}
    >
      {children}
    </StatisticsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStatistics = () => {
  const ctx = useContext(StatisticsContext);
  if (!ctx)
    throw new Error("useStatistics must be used within StatisticsProvider");
  return ctx;
};
