

// import React from "react";
// import {
//   List,
//   ListItem,
//   ListItemPrefix,
//   ListItemSuffix,
//   Chip,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
// import { Typography } from "@material-tailwind/react";
// import { Card } from "@material-tailwind/react";

// import {
//   PresentationChartBarIcon,
//   ShoppingBagIcon,
//   UserCircleIcon,
//   Cog6ToothIcon,
//   HomeIcon,
//   InboxIcon,
//   PowerIcon,
//   BellIcon,
//   CalendarIcon,
//   ChatBubbleOvalLeftIcon,
//   DocumentTextIcon,
//   ClipboardDocumentListIcon,
//   FolderIcon,
//   BookmarkIcon,
//   AdjustmentsVerticalIcon,
// } from "@heroicons/react/24/solid";
// import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

// export function MultiLevelSidebar({ isExpanded }) {
//     const [open, setOpen] = React.useState(0);
  
//     const handleOpen = (value) => {
//       setOpen(open === value ? 0 : value);
//     };
  
//     return (
//       <Card className="h-auto w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
//         <List>
//           {/* Home Item */}
       
//           {/* Accordion for Patient */}
//           <Accordion
//             open={open === 1}
//             icon={
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
//               />
//             }
//           >
//             <ListItem className="p-0" selected={open === 1}>
//               <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
//                 <ListItemPrefix>
//                   <PresentationChartBarIcon className="h-5 w-5 text-blue-500" />
//                 </ListItemPrefix>
//                 <Typography
//                   color="blue-gray"
//                   className={`mr-auto font-normal ${!isExpanded ? 'hidden sm:block' : ''}`}
//                 >
//                   Patient
//                 </Typography>
//               </AccordionHeader>
//             </ListItem>
//             <AccordionBody className="py-1">
//               <List className="p-0">
//                 <ListItem>
//                   <ListItemPrefix>
//                     <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-gray-500" />
//                   </ListItemPrefix>
//                   Analytics
//                 </ListItem>
//                 <ListItem>
//                   <ListItemPrefix>
//                     <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-gray-500" />
//                   </ListItemPrefix>
//                   Reporting
//                 </ListItem>
//                 <ListItem>
//                   <ListItemPrefix>
//                     <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-gray-500" />
//                   </ListItemPrefix>
//                   Projects
//                 </ListItem>
//               </List>
//             </AccordionBody>
//           </Accordion>
  
//           {/* Accordion for Responsible Party */}
//           <Accordion
//             open={open === 2}
//             icon={
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
//               />
//             }
//           >
//             <ListItem className="p-0" selected={open === 2}>
//               <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
//                 <ListItemPrefix>
//                   <ShoppingBagIcon className="h-5 w-5 text-green-500" />
//                 </ListItemPrefix>
//                 <Typography
//                   color="blue-gray"
//                   className={`mr-auto font-normal ${!isExpanded ? 'hidden sm:block' : ''}`}
//                 >
//                   Responsible Party
//                 </Typography>
//               </AccordionHeader>
//             </ListItem>
//             <AccordionBody className="py-1">
//               <List className="p-0">
//                 <ListItem>
//                   <ListItemPrefix>
//                     <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-gray-500" />
//                   </ListItemPrefix>
//                   Orders
//                 </ListItem>
//                 <ListItem>
//                   <ListItemPrefix>
//                     <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-gray-500" />
//                   </ListItemPrefix>
//                   Products
//                 </ListItem>
//               </List>
//             </AccordionBody>
//           </Accordion>
  
//           {/* Other List Items */}
//           <ListItem>
//             <ListItemPrefix>
//               <InboxIcon className="h-5 w-5 text-purple-500" />
//             </ListItemPrefix>
//             <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Care Team</Typography>
//             <ListItemSuffix>
//               <Chip
//                 value="14"
//                 size="sm"
//                 variant="ghost"
//                 color="blue-gray"
//                 className="rounded-full"
//               />
//             </ListItemSuffix>
//           </ListItem>
  
//           <ListItem>
//             <ListItemPrefix>
//               <UserCircleIcon className="h-5 w-5 text-yellow-500" />
//             </ListItemPrefix>
//             <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Insurance</Typography>
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <BellIcon className="h-5 w-5 text-red-500" />
//             </ListItemPrefix>
//             <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Reference</Typography>
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <CalendarIcon className="h-5 w-5 text-teal-500" />
//             </ListItemPrefix>
//             <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Marketing</Typography>
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <ChatBubbleOvalLeftIcon className="h-5 w-5 text-cyan-500" />
//             </ListItemPrefix>
//             <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Appointments</Typography>
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <DocumentTextIcon className="h-5 w-5 text-indigo-500" />
//             </ListItemPrefix>
//             <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Tasks</Typography>
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <ClipboardDocumentListIcon className="h-5 w-5 text-orange-500" />
//             </ListItemPrefix>
//             <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Transaction Entry</Typography>
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <FolderIcon className="h-5 w-5 text-lime-500" />
//             </ListItemPrefix>
//             <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>History</Typography>
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <BookmarkIcon className="h-5 w-5 text-pink-500" />
//             </ListItemPrefix>
//             <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Memos</Typography>
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <AdjustmentsVerticalIcon className="h-5 w-5 text-gray-500" />
//             </ListItemPrefix>
//             <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Notes</Typography>
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <Cog6ToothIcon className="h-5 w-5 text-sky-500" />
//             </ListItemPrefix>
//             <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Forms</Typography>
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <PowerIcon className="h-5 w-5 text-black" />
//             </ListItemPrefix>
//             <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Log Out</Typography>
//           </ListItem>
//         </List>
//       </Card>
//     );
//   }
  
import React from "react";
import {
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";

import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  PowerIcon,
  BellIcon,
  CalendarIcon,
  ChatBubbleOvalLeftIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  FolderIcon,
  BookmarkIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export function MultiLevelSidebar({ isExpanded }) {
  const [open, setOpen] = React.useState(0);

  // Pagination state for Patient sub-items
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6; // Limit per page
  const patientItems = ["Analytics", "Reporting", "Projects", "Subject", "Result", "Current Status", "Medicine", "Report", "Previous Diagnostic", "Current Doctor", "Supplementary", "Case File"]; // Sub-items for Patient

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = patientItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  // Pagination controls
  const nextPage = () => {
    if (currentPage < Math.ceil(patientItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Card className="h-auto w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <List>
        {/* Home Item */}

        {/* Accordion for Patient */}
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5 text-blue-500" />
              </ListItemPrefix>
              <Typography color="blue-gray" className={`mr-auto font-normal ${!isExpanded ? 'hidden sm:block' : ''}`}>
                Patient
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              {/* Paginated Patient Sub-items */}
              {currentItems.map((item, index) => (
                <ListItem key={index}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-gray-500" />
                  </ListItemPrefix>
                  {item}
                </ListItem>
              ))}
            </List>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="text-blue-500 hover:text-blue-700 disabled:text-gray-400"
              >
                Previous
              </button>
              <span className="text-sm text-gray-500">
                Page {currentPage} of {Math.ceil(patientItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === Math.ceil(patientItems.length / itemsPerPage)}
                className="text-blue-500 hover:text-blue-700 disabled:text-gray-400"
              >
                Next
              </button>
            </div>
          </AccordionBody>
        </Accordion>

        {/* Accordion for Responsible Party */}
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5 text-green-500" />
              </ListItemPrefix>
              <Typography color="blue-gray" className={`mr-auto font-normal ${!isExpanded ? 'hidden sm:block' : ''}`}>
                Responsible Party
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-gray-500" />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-gray-500" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        {/* Other List Items */}
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5 text-purple-500" />
          </ListItemPrefix>
          <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Care Team</Typography>
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5 text-yellow-500" />
          </ListItemPrefix>
          <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Insurance</Typography>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <BellIcon className="h-5 w-5 text-red-500" />
          </ListItemPrefix>
          <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Reference</Typography>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <CalendarIcon className="h-5 w-5 text-teal-500" />
          </ListItemPrefix>
          <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Marketing</Typography>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ChatBubbleOvalLeftIcon className="h-5 w-5 text-cyan-500" />
          </ListItemPrefix>
          <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Appointments</Typography>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <DocumentTextIcon className="h-5 w-5 text-indigo-500" />
          </ListItemPrefix>
          <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Tasks</Typography>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ClipboardDocumentListIcon className="h-5 w-5 text-orange-500" />
          </ListItemPrefix>
          <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Transaction Entry</Typography>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <FolderIcon className="h-5 w-5 text-lime-500" />
          </ListItemPrefix>
          <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>History</Typography>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <BookmarkIcon className="h-5 w-5 text-pink-500" />
          </ListItemPrefix>
          <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Memos</Typography>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <AdjustmentsVerticalIcon className="h-5 w-5 text-gray-500" />
          </ListItemPrefix>
          <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Notes</Typography>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5 text-sky-500" />
          </ListItemPrefix>
          <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Forms</Typography>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5 text-black" />
          </ListItemPrefix>
          <Typography className={`${!isExpanded ? 'hidden sm:block' : ''}`}>Log Out</Typography>
        </ListItem>
      </List>
    </Card>
  );
}
