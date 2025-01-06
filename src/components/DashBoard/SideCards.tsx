import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

export function SideCards({ selectedSection }) {
  const [sidebarContent, setSidebarContent] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Fetch data using Axios
  useEffect(() => {
    axios
      .get('SidebarContent.json') // Replace with your JSON file path
      .then((response) => {
        setSidebarContent(response.data);

        // Filter items for the specific section
        const section = response.data.find(
          (item) => item.title === selectedSection
        );
        setSelectedItems(section?.items || []); // Handle no matches gracefully
      })
      .catch((error) =>
        console.error('Error loading sidebar content:', error)
      );
  }, [selectedSection]);

  // Calculate pagination details
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = selectedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(selectedItems.length / itemsPerPage);

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col gap-3">
      {currentItems.map((item, index) => (
        <Card key={index} className="w-72 h-40">
          <CardBody className="p-4">
            <Typography variant="h6" color="blue-gray" className="mb-1">
              {item}
            </Typography>
            <Typography className="text-sm">
              This is a description related to {item}.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 px-4">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-1"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button className='text-black'
            key={index + 1}
            size="sm"
            variant={currentPage === index + 1 ? 'filled' : 'text'}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}
