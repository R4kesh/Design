import React from 'react';

const Nav_Icons = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-[#F5F5F5] h-9 rounded-md px-3 group">
        <svg className="lucide lucide-arrow-left" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        <span className="origin-left scale-0 transition-transform group-hover:scale-100">Back</span>
      </button>
      <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 px-3">
        <svg className="lucide lucide-rocket text-cyan-500 dark:text-cyan-400" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#06B6D4" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
        {/* Dashboard */}
      </button>
      <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#60A5FA] h-9 px-3">
        <svg className="lucide lucide-newspaper text-blue-400 dark:text-blue-600" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#60A5FA" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <path d="M18 14h-8" />
          <path d="M15 18h-5" />
          <path d="M10 6h8v4h-8V6Z" />
        </svg>
        {/* Articles */}
      </button>
      <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FACC14] h-9 px-3">
        <svg className="lucide lucide-sticky-note text-yellow-400 dark:text-yellow-600" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#FACC14" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
          <path d="M15 3v6h6" />
        </svg>
        {/* Notes */}
      </button>
      <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FB923C] h-9 px-3">
        <svg className="lucide lucide-star text-orange-400 dark:text-orange-600" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#FB923C" fill="#FB923C" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        {/* Reviews */}
      </button>
     
      <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#6366F1] h-9 px-3">
  <svg className="lucide lucide-settings text-indigo-500" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#6366F1" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
    <circle cx={12} cy={12} r={3} />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-.99 1.51V21a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-.1a1.65 1.65 0 0 0-.99-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82V15a1.65 1.65 0 0 0-1.51-.99H3a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h.1a1.65 1.65 0 0 0 1.51-.99 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 .99-1.51V3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v.1a1.65 1.65 0 0 0 .99 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.18.44.33.9.33 1.38z" />
  </svg>
</button>

<button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#1D4ED8] h-9 px-3">
  <svg className="lucide lucide-home text-blue-500" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#1D4ED8" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12L12 3l9 9M9 21V9h6v12" />
  </svg>
</button>

<button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#10B981] h-9 px-3">
  <svg className="lucide lucide-check-circle text-green-500" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#10B981" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12l2 2 4-4" />
    <circle cx={12} cy={12} r={10} />
  </svg>
</button>

<button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#EF4444] h-9 px-3">
  <svg className="lucide lucide-trash text-red-500" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#EF4444" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6h18M9 6v12m6-12v12M4 6l1-4h14l1 4" />
  </svg>
</button>

<button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#EF4444] h-9 px-3">
<svg className="lucide lucide-bell text-red-500 dark:text-red-400" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#EF4444" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
  <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
</svg>
</button>

<button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#EF4444] h-9 px-3">


<svg className="lucide lucide-user text-gray-500 dark:text-gray-400" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#6B7280" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
  <circle cx={12} cy={7} r={4} />
</svg>

</button>



<button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#EF4444] h-9 px-3">


<svg className="lucide lucide-search text-blue-500 dark:text-blue-400" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#3B82F6" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
  <circle cx={11} cy={11} r={8} />
  <path d="m21 21-4.35-4.35" />
</svg>

</button>





    </div>
  );
}

export default Nav_Icons;


// import React from 'react';

// const Nav_Icons = () => {
//   return (
//     <div className="flex flex-col items-center gap-6">
//       <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 px-3">
//         <svg className="lucide lucide-arrow-left text-cyan-500" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
//           <path d="m12 19-7-7 7-7" />
//           <path d="M19 12H5" />
//         </svg>
//         <span className="origin-left scale-0 transition-transform group-hover:scale-100">Back</span>
//       </button>
//       <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 px-3">
//         <svg className="lucide lucide-rocket text-cyan-500" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#06B6D4" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
//           <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
//           <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
//           <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
//           <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
//         </svg>
//         Dashboard
//       </button>
//       <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#60A5FA] h-9 px-3">
//         <svg className="lucide lucide-newspaper text-blue-400" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#60A5FA" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
//           <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
//           <path d="M18 14h-8" />
//           <path d="M15 18h-5" />
//           <path d="M10 6h8v4h-8V6Z" />
//         </svg>
//         Articles
//       </button>
//       <button className="cursor-pointer bg-white relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#FACC14] h-9 px-3">
//         <svg className="lucide lucide-sticky-note text-yellow-400" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#FACC14" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
//           <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
//           <path d="M15 3v6h6" />
//         </svg>
//         Notes
//       </button>
//     </div>
//   );
// }

// export default Nav_Icons;

