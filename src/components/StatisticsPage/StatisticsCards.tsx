import { useStatistics } from "../../context/StatisticsContext";

const StatisticsCards = () => {
  const { avgCaloriesConsumed, avgCaloriesBurned } = useStatistics();

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex items-center space-x-5 rounded-xl border border-gray-200 bg-white p-4">
        <div>
          <h2>Avg. Calorie Consumed</h2>
          <h1 className="text-primary-green-500 text-xl font-semibold">
            {avgCaloriesConsumed}
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-5 rounded-xl border border-gray-200 bg-white p-4">
        <div>
          <h2>Avg. Calorie Burned</h2>
          <h1 className="text-xl font-semibold text-orange-500">
            {avgCaloriesBurned}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default StatisticsCards;
