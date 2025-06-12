import { useState } from "react";

const Options = ({ onQuery }) => {
  const mockPopularRestaurantData = [
    { region: "شمال شهر", restaurant: "رستوران ایتالیایی روما" },
    { region: "مرکز شهر", restaurant: "کبابی اصیل" },
    { region: "غرب", restaurant: "فست فود سیب" },
  ];
  const mockAvgDeliveryTimeData = [
    { restaurant: "فست فود سیب", avgTime: "۲۵ دقیقه" },
    { restaurant: "کافه نادری", avgTime: "۱۸ دقیقه" },
    { restaurant: "رستوران ایتالیایی روما", avgTime: "۳۵ دقیقه" },
  ];
  const mockTopRatersData = [
    { customer: "کیانوش حقیقی", restaurant: "کافه نادری", rating: "۵" },
    { customer: "پریسا عظیمی", restaurant: "کافه نادری", rating: "۵" },
  ];

  const [region, setRegion] = useState("");
  const [restaurantName, setRestaurantName] = useState("");

  const handlePopularRestaurant = () =>
    onQuery(["منطقه", "محبوب‌ترین رستوران"], mockPopularRestaurantData);
  const handleAvgDeliveryTime = () =>
    onQuery(["نام رستوران", "میانگین زمان تحویل"], mockAvgDeliveryTimeData);
  const handleTopRaters = () =>
    onQuery(["نام مشتری", "رستوران", "امتیاز"], mockTopRatersData);

  return (
    <div className="text-black p-4 sm:p-6 font-sans w-full mx-auto my-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-900">
          گزارشات سامانه سفارش غذا
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-yellow-900 pb-2 border-b border-gray-300">
            محبوب‌ ترین رستوران منطقه
          </h3>

          <input
            type="text"
            onChange={(e) => setRegion(e.target.value)}
            placeholder="نام منطقه (اختیاری)"
            className="w-full bg-gray-200 text-black placeholder-gray-600 rounded-md px-3 py-2 border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm text-right"
          />
          <button
            onClick={handlePopularRestaurant}
            className="w-full mt-auto bg-yellow-900 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
          >
            نمایش گزارش
          </button>
        </div>
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-yellow-900 pb-2 border-b border-gray-300">
            میانگین زمان تحویل
          </h3>

          <button
            onClick={handleAvgDeliveryTime}
            className="w-full mt-auto bg-yellow-900 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
          >
            محاسبه
          </button>
        </div>
        <div className="text-right p-4 rounded-xl flex flex-col w-full h-auto gap-2">
          <h3 className="text-lg font-bold mb-3 text-yellow-900 pb-2 border-b border-gray-300">
            لیست مشتریانی که به یک رستوران خاص امتیاز کامل داده‌اند
          </h3>

          <input
            type="text"
            onChange={(e) => setRestaurantName(e.target.value)}
            placeholder="نام رستوران"
            className="w-full bg-gray-200 text-black placeholder-gray-600 rounded-md px-3 py-2 border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm text-right"
          />
          <button
            onClick={handleTopRaters}
            className="w-full mt-auto bg-yellow-900 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
          >
            نمایش لیست
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
