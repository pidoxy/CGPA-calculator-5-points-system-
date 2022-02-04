import "./App.css";
import { useState } from "react";

function App() {
  const [courses, setCourses] = useState({
    courseName: "",
    courseCode: "",
    courseUnit: 0,
    score: 0,
    grade: 0,
  });
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>CGPA Calculator.</p>
        <div className="flex md:flex-row text-sm flex-col md:space-x-2 space-y-2 my-3 text-black">
          
          <input
            className="rounded-md border-2 border-gray-300 px-2 py-1"
            value={courses.courseName}
            onChange={(e) =>
              setCourses({ ...courses, courseName: e.target.value })
            }
            type="text"
            placeholder=" enter your course title"
          />
          <input
            className="rounded-md border-2 border-gray-300 px-2 py-1"
            value={courses.courseCode}
            onChange={(e) =>
              setCourses({ ...courses, courseCode: e.target.value })
            }
            type="text"
            placeholder=" enter your course code"
          />
          <input
            className="rounded-md border-2 border-gray-300 px-2 py-1"
            value={courses.courseUnit}
            onChange={(e) =>
              setCourses({ ...courses, courseUnit: e.target.value })
            }
            type="number"
            placeholder=" enter your course unit"
          />
          <input
            className="rounded-md border-2 border-gray-300 px-2 py-1"
            value={courses.score}
            onChange={(e) => setCourses({ ...courses, score: e.target.value })}
            type="number"
            placeholder=" enter your score"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            //  console.log(...data, courses);
            setData([...data, courses]);
          }}
        >
          Add Course
        </button>
        <div className="space-y-4">
          <div className="relative rounded-xl ">
            <div className="shadow-sm overflow-x-scroll my-8">
              <table className="border-collapse table-fixed md:table-auto overflow-x-scroll w-full text-xs md:text-sm">
                <thead>
                  <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-1 md:p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      course Title
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-1 md:p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-right md:text-light">
                      Code
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-1 md:p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      Units
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-1 md:p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      Score
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-1 md:p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      Grade
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-1 md:p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      Credit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                  {data?.map((item, id) => {
                    // console.log(item.name);
                    return (
                      <tr key={id}>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                          {item.courseName}
                        </td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                          {item.courseCode}
                        </td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                          {item.courseUnit}
                        </td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                          {item.score}
                        </td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                          {item.score >= 70
                            ? "5"
                            : item.score >= 60
                            ? "4"
                            : item.score >= 50
                            ? "3"
                            : item.score >= 44
                            ? "2"
                            : item.score >= 40
                            ? "1"
                            : "0"}
                        </td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                          {item.courseUnit *
                            (item.score >= 70
                              ? 5
                              : item.score >= 60
                              ? 4
                              : item.score >= 50
                              ? 3
                              : item.score >= 44
                              ? 2
                              : item.score >= 40
                              ? 1
                              : 0)}
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      Sum
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"></td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      {/* {(data.reduce((a, item) => a + item.courseUnit, 0) || 0).toFixed(2)} */}
                      {(data.reduce((a, item) => a + item.courseUnit, 0) )}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"></td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      {/* {totalCredit} */}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      {data.reduce(
                        (a, item) =>
                          a +
                          item.courseUnit *
                            (item.score >= 70
                              ? 5
                              : item.score >= 60
                              ? 4
                              : item.score >= 50
                              ? 3
                              : item.score >= 44
                              ? 2
                              : item.score >= 40
                              ? 1
                              : 0),
                        0
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <p className="pt-4">
                  CGPA :{" "}
                  {courses.score ? (data.reduce(
                    (a, item) =>
                      a +
                      item.courseUnit *
                        (item.score >= 70
                          ? 5
                          : item.score >= 60
                          ? 4
                          : item.score >= 50
                          ? 3
                          : item.score >= 44
                          ? 2
                          : item.score >= 40
                          ? 1
                          : 0),
                    0
                  )) / (data.reduce((a, item) => a + item.courseUnit, 0) ) : 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
