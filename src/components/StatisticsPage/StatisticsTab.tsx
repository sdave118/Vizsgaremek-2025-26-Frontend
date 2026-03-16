import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useEffect, useMemo, useState } from "react";
import { theme } from "../../utils/MaterialUITheme";
import MealAccordionList from "./MealAccordionList";
import ActivityAccordionList from "./ActivityAccordionList";
import { useActivity } from "../../hooks/useActivity";
import { useDailyIntake } from "../../hooks/useMeals";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const StatisticsTab = () => {
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

  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <main className="space-y-10">
        <section className="mx-auto mt-10 max-w-7xl">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-5 rounded-xl border border-gray-200 bg-white p-4">
              <div>
                <h2 className="">Avg. Calorie Consumed</h2>
                <h1 className="text-primary-green-500 text-xl font-semibold">
                  {avgCaloriesConsumed}
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-5 rounded-xl border border-gray-200 bg-white p-4">
              <div>
                <h2 className="">Avg. Calorie Burned</h2>
                <h1 className="text-xl font-semibold text-orange-500">
                  {avgCaloriesBurned}
                </h1>
              </div>
            </div>
          </section>
        </section>
        <section>
          <ThemeProvider theme={theme}>
            <Box sx={{ maxWidth: "80rem", mx: "auto", width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange}>
                  <Tab label="Meals" />
                  <Tab label="Activity" />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <MealAccordionList
                  dailyIntake={dailyIntake}
                  loading={loading}
                />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <ActivityAccordionList userActivityData={userActivityData} />
              </CustomTabPanel>
            </Box>
          </ThemeProvider>
        </section>
      </main>
    </>
  );
};
export default StatisticsTab;
