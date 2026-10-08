export default function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="w-full max-w-3xl px-16 py-4 col-auto">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          Progress
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1">
        <input type="text"
          className="w-16 px-2 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          value={percentage}
        />
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          100%
        </span>
      </div>
    </div>
  );
}
