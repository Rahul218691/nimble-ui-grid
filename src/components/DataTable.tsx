
import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface DataTableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  title?: string;
  pagination?: boolean;
  paginationPerPage?: number;
  searchable?: boolean;
  searchPlaceholder?: string;
  onSearch?: (searchTerm: string) => void;
  loading?: boolean;
}

const customStyles = {
  headRow: {
    style: {
      backgroundColor: '#00b894',
      color: 'white',
    },
  },
  headCells: {
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
  rows: {
    style: {
      fontSize: '14px',
      '&:nth-child(odd)': {
        backgroundColor: '#f8f9fa',
      },
    },
    highlightOnHoverStyle: {
      backgroundColor: '#e6fffa',
      borderBottomColor: '#00b894',
      outline: '1px solid #00b894',
    },
  },
};

function ReusableDataTable<T>({
  columns,
  data,
  title,
  pagination = true,
  paginationPerPage = 10,
  searchable = false,
  searchPlaceholder = "Search...",
  onSearch,
  loading = false,
}: DataTableProps<T>) {
  const [filterText, setFilterText] = React.useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterText(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="w-full">
      {searchable && (
        <div className="mb-4">
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={filterText}
            onChange={handleSearch}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
      )}
      <DataTable
        columns={columns}
        data={data}
        title={title}
        pagination={pagination}
        paginationPerPage={paginationPerPage}
        progressPending={loading}
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
        responsive
      />
    </div>
  );
}

export default ReusableDataTable;
