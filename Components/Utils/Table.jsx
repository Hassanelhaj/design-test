import React from "react";
import TableRow from "./table/TableRow";
import TableHeader from "./table/TableHeader";

const Table = () => {
  return (
    <nav>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <TableHeader/>
                
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 text-start">
                 
                    <TableRow/>
                    <TableRow/>
                    

                    

                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Table;
