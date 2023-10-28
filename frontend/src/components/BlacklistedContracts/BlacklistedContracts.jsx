import React, { useEffect, useState } from "react";
import { GetAllBlacklistedContracts } from "../../Api/reportContract";

const BlacklistedContracts = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const { data } = await GetAllBlacklistedContracts();
    setdata(data.blacklisted_contracts);
    console.log(data.blacklisted_contracts);
  };

  return (
    <>
      <div className="mt-10">
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <div class="py-3 px-4">
                  <div class="relative max-w-xs">
                    <label
                      for="hs-table-with-pagination-search"
                      class="sr-only"
                    >
                      Search
                    </label>
                    <input
                      type="text"
                      name="hs-table-with-pagination-search"
                      id="hs-table-with-pagination-search"
                      class="p-3 pl-10 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="Search for items"
                    />
                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                      <svg
                        class="h-3.5 w-3.5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="overflow-hidden">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th scope="col" class="py-3 px-4 pr-0">
                          <div class="flex items-center h-5">
                            <input
                              id="hs-table-pagination-checkbox-all"
                              type="checkbox"
                              class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            />
                            <label
                              for="hs-table-pagination-checkbox-all"
                              class="sr-only"
                            >
                              Checkbox
                            </label>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                          Contract Id
                        </th>
                      
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                          Reason
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    {data &&
                        data.map((item) => (
                          <tr key={item.ContractAddress}>
                            <td className="py-3 pl-4">
                              <div className="flex items-center h-5">
                                <input
                                  id={`hs-table-pagination-checkbox-${item.ContractAddress}`}
                                  type="checkbox"
                                  className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                />
                                <label
                                  htmlFor={`hs-table-pagination-checkbox-${item.ContractAddress}`}
                                  className="sr-only"
                                >
                                  Checkbox
                                </label>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                              {item.ContractAddress}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                              {item.UserAddress}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {item.reason}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a
                                className="text-blue-500 hover:text-blue-700"
                                href={`https://etherscan.io/address/${item.ContractAddress}`}
                                target="_blank"
                              >
                                More Info
                              </a>
                            </td>
                          </tr>
                        ))}
                   
                    </tbody>
                  </table>
                </div>
                <div class="py-1 px-4">
                  <nav class="flex items-center space-x-2">
                    <a
                      class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
                      href="#"
                    >
                      <span aria-hidden="true">«</span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full"
                      href="#"
                      aria-current="page"
                    >
                      1
                    </a>
                    <a
                      class="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
                      href="#"
                    >
                      2
                    </a>
                    <a
                      class="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
                      href="#"
                    >
                      3
                    </a>
                    <a
                      class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
                      href="#"
                    >
                      <span class="sr-only">Next</span>
                      <span aria-hidden="true">»</span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlacklistedContracts;
