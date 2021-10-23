import React, { useState } from "react";
import get from "lodash/get";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_JOB_TITLES } from "../../graphql/query";

import Layout from "../../components/Layout";
import map from "lodash/map";

// const data = [
//   {
//     id: "1234",
//     name: "UI/UX Designer",
//     description: "UI/UX/ Designer",
//     responsiblities: [
//       "Creating User Interfaces",
//       "Create Content",
//       "Create the wow factor",
//     ],
//     report: "Director",
//   },
// ];

const Table = (items) => {
  console.log(items);
  const data = get(items, "items.jobTitles", []);
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider"
                  >
                    Responsibilities
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider"
                  >
                    Reporting to
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map(
                  ({ id, name, description, responsibilities, reportsTo }) => (
                    <tr key={id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-black/80">{name}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-black/80">{description}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <ol class="list-decimal">
                          {map(responsibilities, (values) => (
                            <li className="px-2 my-1 text-xs whitespace-normal leading-5 font-semibold text-black/80">
                              {values}
                            </li>
                          ))}
                        </ol>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black/80">
                        {reportsTo}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function Roles(props) {
  const { loading, error, data } = useQuery(GET_JOB_TITLES);

  if (loading) return <h1>Loading....</h1>;

  return (
    <>
      <section className="relative flex w-screen flex-col overflow-x-hidden overflow-y-hidden">
        {/* <Topbar /> */}
        <div className="p-8">
          <Link href="/roles/add" className="self-end">
            <span className="bg-primary py-[12px] rounded cursor-pointer">
              <span className="px-4 text-white uppercase tracking-normal">
                Create Role
              </span>
            </span>
          </Link>
        </div>
        <div className="flex-1 flex-grow p-8">
          <Table items={data} />
        </div>
      </section>
    </>
  );
}

Roles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
