import { useState } from "react";

const API_BASE_URL = "http://127.0.0.1:5000";

const Options = ({ onQuery }) => {
  const [studentIdForGpa, setStudentIdForGpa] = useState("");
  const [semester, setSemester] = useState("");
  const [studentIdForDelete, setStudentIdForDelete] = useState("");

  const fetchData = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data.length === 0) {
        onQuery(['پیام'], [{ message: 'نتیجه‌ای یافت نشد.' }]);
        return;
      }
      if (data.length === 1) {
      const headers = Object.keys(data[0]);
      onQuery(headers, data);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      onQuery(['خطا'], [{ message: 'ارتباط با سرور برقرار نشد.' }]);
    }
  };

  const handleFindStudentGpa = () => {
    if (!studentIdForGpa.trim()) return;
    fetchData(`${API_BASE_URL}/students/gpa?student_id=${studentIdForGpa}`);
  };

  const handleFindStudentsWithManyCredits = () => {
    if (!semester.trim()) return;
    fetchData(`${API_BASE_URL}/students/heavy-load/${semester}`);
  };

  const handleFindPopularCourses = () => {
    fetchData(`${API_BASE_URL}/courses/popular`);
  };

  const handleDeleteStudent = () => {
    if (!studentIdForDelete.trim()) return;
    fetchData(`${API_BASE_URL}/student/delete/${studentIdForDelete}`, { method: 'DELETE' });
  };

  return (
    <div className="text-black p-4 sm:p-6 font-iran w-full mx-auto my-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900">
          گزینه‌های جستجو و مدیریت
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-blue-900 pb-2 border-b border-gray-300">
            جستجوی معدل دانشجو
          </h3>
          <div className="flex-grow space-y-3 mt-2">
            <div className="flex flex-col sm:flex-row-reverse gap-2">
              <input type="text" value={studentIdForGpa} onChange={(e) => setStudentIdForGpa(e.target.value)} placeholder="شماره دانشجویی" className="flex-grow w-full bg-gray-200 text-black placeholder-gray-600 rounded-md px-3 py-2 border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm text-right"/>
              <button onClick={handleFindStudentGpa} className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm">جستجو</button>
            </div>
          </div>
        </div>
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-blue-900 pb-2 border-b border-gray-300">
            دانشجویان با بیش از ۱۵ واحد
          </h3>
          <div className="flex-grow space-y-3 mt-2">
            <div className="flex flex-col sm:flex-row-reverse gap-2">
              <input type="text" value={semester} onChange={(e) => setSemester(e.target.value)} placeholder="نام ترم (مثال: پاییز ۱۴۰۲)" className="flex-grow w-full bg-gray-200 text-black placeholder-gray-600 rounded-md px-3 py-2 border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm text-right"/>
              <button onClick={handleFindStudentsWithManyCredits} className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm">جستجو</button>
            </div>
          </div>
        </div>
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-blue-900 pb-2 border-b border-gray-300">
            درس‌های محبوب
          </h3>
          <div className="flex-grow flex flex-col space-y-3 mt-2">
            <p className="text-gray-600 text-sm">پیدا کردن دروسی که بیش از ۵۰ دانشجو اخذ کرده‌اند.</p>
            <button onClick={handleFindPopularCourses} className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm">تولید گزارش</button>
          </div>
        </div>
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h3 className="text-lg font-bold mb-3 text-red-800 pb-2 border-b border-red-300">
            حذف دانشجو
          </h3>
          <div className="flex-grow space-y-3 mt-2">
            <p className="text-red-700 text-sm">هشدار: این عمل دائمی و غیرقابل بازگشت است.</p>
            <div className="flex flex-col sm:flex-row-reverse gap-2">
                <input type="text" value={studentIdForDelete} onChange={(e) => setStudentIdForDelete(e.target.value)} placeholder="شماره دانشجویی جهت حذف" className="flex-grow w-full bg-red-100 text-black placeholder-red-500 rounded-md px-3 py-2 border border-red-400 focus:ring-2 focus:ring-red-500 focus:outline-none transition text-sm text-right"/>
                <button onClick={handleDeleteStudent} className="w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-red-500/40 text-sm">حذف</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
