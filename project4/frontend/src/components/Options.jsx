import { useState } from "react";
const Options = ({ onQuery }) => {
  const mockFilledFlightsData = [
    {
      flight: "IR-255",
      dest: "شیراز",
      date: "۱۴۰۳/۰۴/۰۱",
      status: "تکمیل ظرفیت",
    },
    {
      flight: "TK-879",
      dest: "استانبول",
      date: "۱۴۰۳/۰۴/۰۳",
      status: "تکمیل ظرفیت",
    },
  ];
  const mockFrequentFlyersData = [
    { name: "نگار جعفری", flights: 5 },
    { name: "امیرحسین زمانی", flights: 4 },
  ];
  const mockOccupancyRateData = [
    { dest: "مشهد", rate: "95%" },
    { dest: "استانبول", rate: "88%" },
    { dest: "کیش", rate: "100%" },
  ];

  const [destination, setDestination] = useState("");

  const handleFilledFlights = () =>
    onQuery(["شماره پرواز", "مقصد", "تاریخ", "وضعیت"], mockFilledFlightsData);
  const handleFrequentFlyers = () =>
    onQuery(["نام مسافر", "تعداد پرواز (ماه گذشته)"], mockFrequentFlyersData);
  const handleOccupancyRate = () =>
    onQuery(["مقصد", "درصد پرشدگی"], mockOccupancyRateData);

  return (
    <div className="text-black p-4 sm:p-6 font-sans w-full mx-auto my-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900">
          گزارشات سیستم پرواز
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-blue-900 pb-2 border-b border-gray-300">
            پیدا کردن و نمایش لیست پروازهایی که تمام صندلی‌های آن‌ها رزرو شده
            است
          </h3>

          <button
            onClick={handleFilledFlights}
            className="w-full mt-auto bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
          >
            نمایش لیست
          </button>
        </div>
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-blue-900 pb-2 border-b border-gray-300">
            یافتن مسافرانی که در ماه گذشته بیش از سه پرواز داشته‌اند
          </h3>

          <button
            onClick={handleFrequentFlyers}
            className="w-full mt-auto bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
          >
            نمایش لیست
          </button>
        </div>
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-blue-900 pb-2 border-b border-gray-300">
            محاسبه درصد صندلی‌های پر شده به تفکیک هر مقصد
          </h3>

          <input
            type="text"
            onChange={(e) => setDestination(e.target.value)}
            placeholder="نام مقصد (اختیاری)"
            className="flex-grow w-full bg-gray-200 text-black placeholder-gray-600 rounded-md px-3 py-2 border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm text-right"
          />
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
