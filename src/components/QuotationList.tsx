
import React, { useState } from 'react';
import ReusableDataTable from './DataTable';
import { TableColumn } from 'react-data-table-component';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface Quotation {
  id: number;
  srNo: string;
  title: string;
  from: string;
  to: string;
  deliveryTime: string;
  price: string;
}

const QuotationList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data
  const quotationData: Quotation[] = [
    {
      id: 1,
      srNo: '01',
      title: 'Steel Beams - 20 Ton',
      from: 'Houston, Texas',
      to: 'Atlanta, Georgia',
      deliveryTime: '2 Days',
      price: '$3,200'
    },
    {
      id: 2,
      srNo: '02',
      title: 'Frozen Food Shipment - 10 Ton',
      from: 'Chicago, Illinois',
      to: 'Orlando, Florida',
      deliveryTime: '3 Days',
      price: '$2,750'
    },
    {
      id: 3,
      srNo: '03',
      title: 'Electronics - 5 Ton',
      from: 'San Francisco, California',
      to: 'Seattle, Washington',
      deliveryTime: '1 Day',
      price: '$1,900'
    },
    {
      id: 4,
      srNo: '04',
      title: 'Furniture - 15 Ton',
      from: 'Dallas, Texas',
      to: 'Denver, Colorado',
      deliveryTime: '2 Days',
      price: '$2,800'
    },
    {
      id: 5,
      srNo: '05',
      title: 'Medical Supplies - 8 Ton',
      from: 'Boston, Massachusetts',
      to: 'New York, New York',
      deliveryTime: '1 Day',
      price: '$1,500'
    }
  ];

  // Define the columns for the data table
  const columns: TableColumn<Quotation>[] = [
    {
      name: 'Sr.No',
      selector: row => row.srNo,
      sortable: true,
      width: '80px'
    },
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      grow: 2
    },
    {
      name: 'From',
      selector: row => row.from,
      sortable: true,
    },
    {
      name: 'To',
      selector: row => row.to,
      sortable: true,
    },
    {
      name: 'Delivery Time',
      selector: row => row.deliveryTime,
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
      right: true,
    },
  ];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    // In a real app you would filter your data or make API calls here
  };

  return (
    <div className="p-6 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">List Of Quotations</h1>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search by anything"
              className="pl-10 pr-4 py-2 border rounded-md w-full md:w-60"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <Button className="bg-logistics-primary hover:bg-logistics-secondary">
            Request
          </Button>
        </div>
      </div>
      
      <div className="bg-white rounded-md shadow">
        <ReusableDataTable
          columns={columns}
          data={quotationData}
          pagination
          paginationPerPage={10}
        />
      </div>
    </div>
  );
};

export default QuotationList;
