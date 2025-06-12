import { useState } from "react";
const Options = ({ onQuery }) => {
  // Mock data for demonstration
  const mockLateMembersData = [
    { name: "علی اکبری", lateReturns: 5 },
    { name: "فاطمه محمدی", lateReturns: 4 },
  ];
  const mockPopularBooksData = [
    { title: "شازده کوچولو", borrowedCount: 12 },
    { title: "بوف کور", borrowedCount: 9 },
    { title: "تاریخ بیهقی", borrowedCount: 6 },
  ];
  const mockBorrowTimeData = [
    { title: "مدیریت پروژه", avgDays: 14 },
    { title: "کلیدر", avgDays: 21 },
  ];
  const mockUnpaidFinesData = [
    { name: "حسن قاسمی", fineAmount: "۱۵,۰۰۰ تومان" },
    { name: "مریم رضایی", fineAmount: "۸,۰۰۰ تومان" },
  ];

  const [bookTitle, setBookTitle] = useState("");

  // Handlers to pass mock data up to the App state
  const handleLateMembers = () =>
    onQuery(["نام عضو", "تعداد دیرکرد"], mockLateMembersData);
  const handlePopularBooks = () =>
    onQuery(["عنوان کتاب", "تعداد دفعات امانت"], mockPopularBooksData);
  const handleAvgBorrowTime = () =>
    onQuery(["عنوان کتاب", "میانگین زمان امانت (روز)"], mockBorrowTimeData);
  const handleUnpaidFines = () =>
    onQuery(["نام عضو", "جریمه پرداخت نشده"], mockUnpaidFinesData);

  return (
    <div className="text-black p-4 sm:p-6 font-sans w-full mx-auto my-8">
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

          <button
            onClick={handleLateMembers}
            className="w-full mt-auto bg-red-900 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
          >
            نمایش لیست
          </button>
        </div>

        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-red-900 pb-2 border-b border-gray-300">
            نمایش کتاب‌هایی که بیش از پنج بار به امانت گرفته شده‌اند
          </h3>
          <button
            onClick={handlePopularBooks}
            className="w-full mt-auto bg-red-900 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
          >
            نمایش لیست
          </button>
        </div>

        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-red-900 pb-2 border-b border-gray-300">
            محاسبه و نمایش میانگین زمانی که هر کتاب به امانت گرفته شده است
          </h3>

          <button
            onClick={handleAvgBorrowTime}
            className="w-full mt-auto bg-red-900 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
          >
            محاسبه
          </button>
        </div>

        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-red-800 pb-2 border-b border-red-300">
            جریمه‌های پرداخت نشده
          </h3>

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
