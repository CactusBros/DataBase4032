import { useState } from "react";

const OptionStudents = () => {
  const [studentIdForGpa, setStudentIdForGpa] = useState("");
  const [semester, setSemester] = useState("");
  const [studentIdForDelete, setStudentIdForDelete] = useState("");

  const handleFindStudentGpa = () => {
    if (!studentIdForGpa.trim()) {
      console.log("Input Required: Please enter a Student ID.");
      return;
    }
    console.log(`Finding GPA for student ID: ${studentIdForGpa}`);
  };

  const handleFindStudentsWithManyCredits = () => {
    if (!semester.trim()) {
      console.log("Input Required: Please enter a semester.");
      return;
    }
    console.log(`Finding students with > 15 credits in semester: ${semester}`);
  };

  const handleFindPopularCourses = () => {
    console.log("Finding courses with more than 50 students...");
  };

  const handleDeleteStudent = () => {
    if (!studentIdForDelete.trim()) {
      console.log("Input Required: Please enter a Student ID to delete.");
      return;
    }
    console.log(`Deleting student with ID: ${studentIdForDelete}`);
  };

  return (
    <div className="text-black p-4 sm:p-6 font-iran  w-full mx-auto my-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900">
            لیست عملیات ها
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h2 className="text-lg font-bold mb-3 text-blue-900 pb-2 border-b border-gray-300">
            جستجوی معدل دانشجو
          </h2>
          <div className="flex-grow space-y-3 mt-2">
            <div className="flex flex-col sm:flex-row-reverse gap-2">
              <input
                type="text"
                value={studentIdForGpa}
                onChange={(e) => setStudentIdForGpa(e.target.value)}
                placeholder="شماره دانشجویی"
                className="flex-grow w-full bg-gray-200 text-black placeholder-gray-600 rounded-md px-3 py-2 border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm text-right"
              />
              <button
                onClick={handleFindStudentGpa}
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
              >
                جستجو
              </button>
            </div>
          </div>
        </div>

        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h2 className="text-lg font-bold mb-3 text-blue-900 pb-2 border-b border-gray-300">
            دانشجویان با بیش از ۱۵ واحد
          </h2>
          <div className="flex-grow space-y-3 mt-2">
            <div className="flex flex-col sm:flex-row-reverse gap-2">
              <input
                type="text"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                placeholder="نام ترم (مثال: پاییز ۱۴۰۲)"
                className="flex-grow w-full bg-gray-200 text-black placeholder-gray-600 rounded-md px-3 py-2 border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-sm text-right"
              />
              <button
                onClick={handleFindStudentsWithManyCredits}
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
              >
                جستجو
              </button>
            </div>
          </div>
        </div>

   
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h2 className="text-lg font-bold mb-3 text-blue-900 pb-2 border-b border-gray-300">
            درس‌هایی که بیش از ۵۰ نفر برداشتن 
          </h2>

          <button
            onClick={handleFindPopularCourses}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-blue-500/40 text-sm"
          >
            تولید گزارش
          </button>
        </div>

    
        <div className="text-right p-4 rounded-xl flex flex-col w-full">
          <h2 className="text-lg font-bold mb-3 text-red-800 pb-2 border-b border-red-300">
            حذف دانشجو
          </h2>

          <div className="flex flex-col sm:flex-row-reverse gap-2">
            <input
              type="text"
              value={studentIdForDelete}
              onChange={(e) => setStudentIdForDelete(e.target.value)}
              placeholder="شماره دانشجویی جهت حذف"
              className="flex-grow w-full bg-red-100 text-black placeholder-red-500 rounded-md px-3 py-2 border border-red-400 focus:ring-2 focus:ring-red-500 focus:outline-none transition text-sm text-right"
            />
            <button
              onClick={handleDeleteStudent}
              className="w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-red-500/40 text-sm"
            >
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionStudents;
