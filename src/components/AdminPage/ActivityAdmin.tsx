import { useEffect } from "react";
import { useActivity } from "../../hooks/useActivity";

const ActivityAdmin = () => {
  const {
    activityData,
    fetchAdminActivities,
    deleteActivity,
    restoreActivity,
  } = useActivity();
  useEffect(() => {
    fetchAdminActivities();
  }, [fetchAdminActivities]);
  return (
    <div className="mx-auto grid max-w-5xl gap-4 px-2">
      {activityData.map((activity) => (
        <li
          className={`flex items-start gap-4 rounded-lg p-4 ${
            activity.isDeleted
              ? "bg-red-100 text-red-800"
              : "bg-emerald-100 text-emerald-900"
          }`}
          key={activity.id}
        >
          <div className="gap2 flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p
                className={`text-medium ${activity.isDeleted ? "line-through" : ""}`}
              >
                {activity.name}
              </p>
              <p
                className={`text-sm ${activity.isDeleted ? "text-red-800" : "text-emerald-900"}`}
              >
                🔥{" "}
                <span
                  className={`inline-block font-semibold ${activity.isDeleted ? "text-red-600" : "text-emerald-600"}`}
                >
                  {activity.caloriesBurnedPerHour}
                </span>{" "}
                cal/hour
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                disabled={activity.isDeleted}
                onClick={() => deleteActivity(activity.id)}
                className="w-20 rounded border px-3 py-1 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-red-200 disabled:opacity-50"
              >
                Delete
              </button>

              <button
                disabled={activity.isDeleted}
                className="w-20 rounded border px-3 py-1 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-red-200 disabled:opacity-50"
              >
                Edit
              </button>
              <button
                onClick={() => restoreActivity(activity.id)}
                disabled={!activity.isDeleted}
                className="w-20 rounded border px-3 py-1 text-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:bg-emerald-200 disabled:opacity-50"
              >
                Restore
              </button>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ActivityAdmin;
