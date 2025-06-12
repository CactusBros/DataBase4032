import { useState } from "react";

const Options = ({ onQuery }) => {
  // Mock data for demonstration
  const mockBestSellingData = [
    { name: "لپتاپ مدل X", sold: 152, period: "خرداد ۱۴۰۳" },
    { name: "گوشی موبایل Y", sold: 121, period: "خرداد ۱۴۰۳" },
    { name: "ساعت هوشمند Z", sold: 98, period: "خرداد ۱۴۰۳" },
  ];

  const mockCategorySalesData = [
    {
      category: "کالای دیجیتال",
      totalSales: "۱,۲۰۰,۰۰۰ تومان",
      month: "اردیبهشت",
    },
    { category: "لوازم خانگی", totalSales: "۸۵۰,۰۰۰ تومان", month: "اردیبهشت" },
    { category: "پوشاک", totalSales: "۴۲۰,۰۰۰ تومان", month: "اردیبهشت" },
  ];

  const mockInventoryData = [
    { product: "کیبورد مکانیکی", stock: 8, status: "کمبود" },
    { product: "مانیتور ۲۴ اینچ", stock: 3, status: "بحرانی" },
    { product: "ماوس بی‌سیم", stock: 25, status: "موجود" },
  ];

  const mockTopCustomersData = [
    { name: "رضا کریمی", purchases: 8 },
    { name: "سارا محمدی", purchases: 6 },
    { name: "ایمان قاسمی", purchases: 5 },
  ];

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleBestSellingProducts = () => {
    onQuery(["نام محصول", "تعداد فروش", "بازه زمانی"], mockBestSellingData);
  };

  const handleMonthlyCategorySales = () => {
    onQuery(["دسته بندی", "فروش کل", "ماه"], mockCategorySalesData);
  };

  const handleInventoryCheck = () => {
    onQuery(["نام کالا", "موجودی", "وضعیت"], mockInventoryData);
  };

  const handleTopCustomers = () => {
    onQuery(["نام مشتری", "تعداد خرید (ماه گذشته)"], mockTopCustomersData);
  };

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
            پرفروش‌ترین محصولات
          </h3>
          <div className="flex-grow space-y-3 mt-2">
            <div className="flex flex-col sm:flex-row-reverse gap-2">
              <input
                type="text"
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="تاریخ شروع"
                className="flex-grow w-full bg-gray-200 text-black placeholder-gray-600 rounded-md px-3 py-2 border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm text-right"
              />
              <input
                type="text"
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="تاریخ پایان"
                className="flex-grow w-full bg-gray-200 text-black placeholder-gray-600 rounded-md px-3 py-2 border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm text-right"
              />
            </div>
            <button
              onClick={handleBestSellingProducts}
              className="w-full bg-orange-900 hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
            >
              نمایش گزارش
            </button>
          </div>
        </div>

        < div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-orange-900 pb-2 border-b border-gray-300">
            حاسبه کل فروش برای هر دسته بندی در ماه گذشته
          </h3>
          
            <button
              onClick={handleMonthlyCategorySales}
              className="w-full bg-orange-900 hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
            >
              نمایش گزارش
            </button>
          
        </div>

        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-orange-800 pb-2 border-b border-orange-300">
            نمایش کالاهایی که موجودی آنها کم است
          </h3>
         
            <button
              onClick={handleInventoryCheck}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-orange-500/40 text-sm"
            >
              بررسی موجودی
            </button>
          
        </div>

        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-orange-900 pb-2 border-b border-gray-300">
            نمایش مشتریان با بیش از ۵ خرید در ماه گذشته
          </h3>
          
            <button
              onClick={handleTopCustomers}
              className="w-full bg-orange-900 hover:bg-orange-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
            >
              نمایش لیست
            </button>
      
        </div>
      </div>
    </div>
  );
};

export default Options;
