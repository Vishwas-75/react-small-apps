import React from "react";

type CustomPaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const CustomPagination: React.FC<CustomPaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            padding: "8px 12px",
            backgroundColor: currentPage === page ? "#007bff" : "#f0f0f0",
            color: currentPage === page ? "#fff" : "#000",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default CustomPagination;
