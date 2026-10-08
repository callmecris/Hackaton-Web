

export default function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="w-full bg-white max-w-3xl px-30 py-54 col-auto border border-solid border-black rounded-2xl items-center justify-center flex flex-col gap-2">
      <div className="flex justify-between mb-1">
        <span className="text-base font-xl text-black">
          Progress Bar
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-10">
        <div
          className="bg-red-400 h-10 rounded-full items-center justify-center flex transition-all duration-500 ease-in-out"
          style={{ width: `${percentage}%` }}
        >
          <span className="text-lg font-medium text-white">
            {percentage}%
          </span>
        </div>
      </div>
      <div className="flex mt-1 gap-2 items-center">
        <h2 className="text-sm font-medium text-black">
          Input Percentage:
        </h2>
        <input 
          type="number" 
          min="0" 
          max="100" 
          value={percentage}
          /*onChange={(e) => {
            const value = parseInt(e.target.value);
            if (!isNaN(value) && value >= 0 && value <= 100) {
              setPercentage(value);
            }
          }}*/
          className="w-16 px-2 py-1 border rounded-2xl text-blacks" />
      </div>
    </div>
  );
}
