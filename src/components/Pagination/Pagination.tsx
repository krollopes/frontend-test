import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '20px' }}>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          style={{
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: currentPage === number ? '#0070f3' : '#fff',
            color: currentPage === number ? '#fff' : '#333',
            cursor: 'pointer',
            fontWeight: currentPage === number ? 'bold' : 'normal',
            transition: 'background-color 0.3s',
          }}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
