import React from 'react'

export default function Courses() {
  return (
    <div className="flex flex-row flex-wrap">
        <div className="mx-3 my-3 w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover w-full h-56" src="https://i.ytimg.com/vi/lq60Vfa_U4U/maxresdefault.jpg" alt="avatar"/>
        
            <div className="py-2 text-center">
                <a href="/DSA" className="text-10xl block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">CS 203</a>
                <a href="/DSA"><button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Attendance
                    </span>
                </button>
                </a>
            </div>
        </div>

        <div className="mx-3 my-3 w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover w-full h-56" src="https://us.123rf.com/450wm/sergeyvasutin/sergeyvasutin1609/sergeyvasutin160900023/62922548-line-art-concept-of-database-management-systemt-dbms-round-banner-for-web-resources-and-programming.jpg?ver=6/" alt="avatar"/>
        
            <div className="py-2 text-center">
                <a href="#" className="text-10xl block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">CS 207</a>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Attendance
                    </span>
                </button>
            </div>
        </div>

        <div className="mx-3 my-3 w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover w-full h-56" src="https://ivyleaguecenter.files.wordpress.com/2015/03/discrete-math.jpg" alt="avatar"/>
        
            <div className="py-2 text-center">
                <a href="#" className="text-10xl block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">CS 201</a>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Attendance
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}
