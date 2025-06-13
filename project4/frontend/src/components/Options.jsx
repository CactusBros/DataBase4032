import { useState } from "react";

const API_BASE_URL = "http://127.0.0.1:5000";

const Options = ({ onQuery }) => {
  const [destination, setDestination] = useState("");

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data && data.length > 0) {
        // Automatically determine headers from the first data object
        const headers = Object.keys(data[0]);
        onQuery(headers, data);
      } else {
        onQuery(["پیام"], [{ message: "نتیجه‌ای برای نمایش یافت نشد." }]);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      onQuery(["خطا"], [{ message: "ارتباط با سرور برقرار نشد." }]);
    }
  };

  const handleFilledFlights = () => fetchData(`${API_BASE_URL}/flights/filled`);
  const handleFrequentFlyers = () => fetchData(`${API_BASE_URL}/passengers/frequent-flyers`);
  const handleOccupancyRate = () => fetchData(`${API_BASE_URL}/flights/occupancy-rate`);

  return (
    <div className="text-black p-4 sm:p-6 font-iran w-full mx-auto my-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900">
          گزارشات سیستم پرواز
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-blue-900 pb-2 border-b border-gray-300">
            پروازهای تکمیل ظرفیت
          </h3>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            نمایش لیست پروازهایی که تمام صندلی‌های آن‌ها رزرو شده است.
          </p>
          <button
            onClick={handleFilledFlights}
            className="w-full mt-auto bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
          >
            نمایش لیست
          </button>
        </div>
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-blue-900 pb-2 border-b border-gray-300">
            مسافران پرتردد
          </h3>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            یافتن مسافرانی که در ماه گذشته بیش از سه پرواز داشته‌اند.
          </p>
          <button
            onClick={handleFrequentFlyers}
            className="w-full mt-auto bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
          >
            نمایش لیست
          </button>
        </div>
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-blue-900 pb-2 border-b border-gray-300">
            درصد اشغال پروازها
          </h3>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            محاسبه درصد صندلی‌های پر شده به تفکیک هر مقصد.
          </p>
          <button
            onClick={handleOccupancyRate}
            className="w-full mt-auto bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
          >
            محاسبه گزارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
