const API_BASE_URL = "http://127.0.0.1:5000";

const Options = ({ onQuery }) => {
  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.length > 0) {
      const headers = Object.keys(data[0]);
      onQuery(headers, data);
    } else {
      onQuery(["پیام"], [{ message: "نتیجه‌ای برای نمایش یافت نشد." }]);
    }
  };

  const handleLateMembers = () => fetchData(`${API_BASE_URL}/members/late`);
  const handlePopularBooks = () => fetchData(`${API_BASE_URL}/books/popular`);
  const handleAvgBorrowTime = () => fetchData(`${API_BASE_URL}/books/avg-loan-time`);
  const handleUnpaidFines = () => fetchData(`${API_BASE_URL}/fines/unpaid`);

  return (
    <div className="text-black p-4 sm:p-6 font-iran w-full mx-auto my-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-900">
          گزینه‌های سیستم کتابخانه
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-red-900 pb-2 border-b border-gray-300">
            اعضا با بیش از ۳ دیرکرد
          </h3>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            نمایش لیستی از اعضا که در بازگرداندن کتاب بیش از سه بار تاخیر داشته‌اند.
          </p>
          <button
            onClick={handleLateMembers}
            className="w-full mt-auto bg-red-900 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-red-500/40 text-sm"
          >
            نمایش لیست
          </button>
        </div>

        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-red-900 pb-2 border-b border-gray-300">
            کتاب‌های محبوب
          </h3>
           <p className="text-gray-600 text-sm flex-grow mb-3">
            نمایش کتاب‌هایی که بیش از پنج بار به امانت گرفته شده‌اند.
          </p>
          <button
            onClick={handlePopularBooks}
            className="w-full mt-auto bg-red-900 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-red-500/40 text-sm"
          >
            نمایش لیست
          </button>
        </div>

        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-red-900 pb-2 border-b border-gray-300">
            میانگین زمان امانت
          </h3>
           <p className="text-gray-600 text-sm flex-grow mb-3">
            محاسبه و نمایش میانگین زمانی که هر کتاب به امانت گرفته شده است.
          </p>
          <button
            onClick={handleAvgBorrowTime}
            className="w-full mt-auto bg-red-900 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-red-500/40 text-sm"
          >
            محاسبه
          </button>
        </div>

        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-red-800 pb-2 border-b border-red-300">
            جریمه‌های پرداخت نشده
          </h3>
           <p className="text-gray-600 text-sm flex-grow mb-3">
             نمایش لیست اعضا و جریمه‌های پرداخت نشده‌ی آن‌ها.
          </p>
          <button
            onClick={handleUnpaidFines}
            className="w-full mt-auto bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-red-500/40 text-sm"
          >
            نمایش گزارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
