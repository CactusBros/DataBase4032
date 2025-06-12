import { useState } from "react";

const API_BASE_URL = "http://127.0.0.1:5000";

const Options = ({ onQuery }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
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

  const handleBestSellingProducts = () => {
    if (!startDate || !endDate) {
      onQuery(["پیام"], [{ message: "لطفا بازه زمانی را به درستی مشخص کنید." }]);
      return;
    }
    fetchData(`${API_BASE_URL}/products/best-selling?start_date=${startDate}&end_date=${endDate}`);
  };

  const handleMonthlyCategorySales = () => fetchData(`${API_BASE_URL}/sales/monthly-by-category`);
  const handleInventoryCheck = () => fetchData(`${API_BASE_URL}/inventory/low-stock`);
  const handleTopCustomers = () => fetchData(`${API_BASE_URL}/customers/top`);

  return (
    <div className="text-black p-4 sm:p-6 font-iran w-full mx-auto my-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-900">
          گزینه‌های سامانه فروشگاه
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-orange-900 pb-2 border-b border-gray-300">
            پرفروش‌ترین محصول در بازه زمانی
          </h3>
          <div className="flex-grow space-y-4 mt-2">
            <div className="flex flex-col sm:flex-row-reverse gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">از تاریخ</label>
                <input
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-gray-200 text-black rounded-md p-2 border border-gray-400 focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">تا تاریخ</label>
                <input
                  type="date"
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-gray-200 text-black rounded-md p-2 border border-gray-400 focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            <button
              onClick={handleBestSellingProducts}
              className="w-full bg-orange-900 hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded-md transition-all"
            >
              نمایش گزارش
            </button>
          </div>
        </div>

        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-orange-900 pb-2 border-b border-gray-300">
            فروش ماهانه دسته‌بندی‌ها
          </h3>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            محاسبه کل فروش برای هر دسته بندی در ماه گذشته.
          </p>
          <button
            onClick={handleMonthlyCategorySales}
            className="w-full mt-auto bg-orange-900 hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded-md transition-all"
          >
            نمایش گزارش
          </button>
        </div>

        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-orange-800 pb-2 border-b border-orange-300">
            هشدار کمبود موجودی کالا
          </h3>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            نمایش کالاهایی که موجودی آنها کمتر از ۱۰ عدد است.
          </p>
          <button
            onClick={handleInventoryCheck}
            className="w-full mt-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition-all"
          >
            بررسی موجودی
          </button>
        </div>

        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-orange-900 pb-2 border-b border-gray-300">
            مشتریان برتر ماه
          </h3>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            نمایش مشتریانی که در ماه گذشته بیش از ۵ خرید داشته‌اند.
          </p>
          <button
            onClick={handleTopCustomers}
            className="w-full mt-auto bg-orange-900 hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded-md transition-all"
          >
            نمایش لیست
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
