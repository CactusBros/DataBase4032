import { useState } from "react";

const API_BASE_URL = "http://127.0.0.1:5000";

const Options = ({ onQuery }) => {
  const [restaurantName, setRestaurantName] = useState("");

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data && data.length > 0) {
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

  const handlePopularRestaurant = () => fetchData(`${API_BASE_URL}/restaurants/popular-by-region`);
  const handleAvgDeliveryTime = () => fetchData(`${API_BASE_URL}/restaurants/avg-delivery-time`);

  const handleTopRaters = () => {
    if (!restaurantName.trim()) {
      onQuery(["پیام"], [{ message: "لطفاً نام رستوران را وارد کنید." }]);
      return;
    }
    fetchData(`${API_BASE_URL}/restaurants/top-raters/${restaurantName}`);
  };

  return (
    <div className="text-black p-4 sm:p-6 font-iran w-full mx-auto my-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-900">
          گزارشات سامانه سفارش غذا
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-yellow-900 pb-2 border-b border-gray-300">
            محبوب‌ترین رستوران در هر منطقه
          </h3>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            نمایش پرطرفدارترین رستوران به تفکیک هر منطقه شهری.
          </p>
          <button
            onClick={handlePopularRestaurant}
            className="w-full mt-auto bg-yellow-800 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-yellow-500/40 text-sm"
          >
            نمایش گزارش
          </button>
        </div>
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-yellow-900 pb-2 border-b border-gray-300">
            میانگین زمان تحویل
          </h3>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            محاسبه میانگین زمان تحویل سفارش برای هر رستوران.
          </p>
          <button
            onClick={handleAvgDeliveryTime}
            className="w-full mt-auto bg-yellow-800 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-yellow-500/40 text-sm"
          >
            محاسبه
          </button>
        </div>
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-yellow-900 pb-2 border-b border-gray-300">
            مشتریان با امتیاز ۵
          </h3>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            لیست مشتریانی که به یک رستوران خاص امتیاز کامل داده‌اند.
          </p>
          <input
            type="text"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            placeholder="نام رستوران را وارد کنید"
            className="w-full bg-gray-200 text-black placeholder-gray-600 rounded-md px-3 py-2 border border-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition text-sm text-right mb-3"
          />
          <button
            onClick={handleTopRaters}
            className="w-full mt-auto bg-yellow-800 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-yellow-500/40 text-sm"
          >
            نمایش لیست
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
