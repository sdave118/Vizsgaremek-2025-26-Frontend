import StatisticsCards from "../components/StatisticsPage/StatisticsCards";
import StatisticsTab from "../components/StatisticsPage/StatisticsTab";
import { StatisticsProvider } from "../context/StatisticsContext";

const StatisticsPage = () => {
  return (
    <StatisticsProvider>
      <main className="from-primary-green-50 min-h-screen min-w-full bg-linear-to-b via-white to-blue-50">
        <StatisticsCards />
        <StatisticsTab />
      </main>
    </StatisticsProvider>
  );
};
export default StatisticsPage;
