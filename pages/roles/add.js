import React, { useState } from "react";
import { CREATE_JOB_TITLE } from "../../graphql/query";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import map from "lodash/map";
import size from "lodash/size";
import Layout from "../../components/Layout";
import PickRole from "./PickRole";
import isEmpty from "lodash/isEmpty";

export default function Settings() {
  const [createJobTitle, { loading, error }] = useMutation(CREATE_JOB_TITLE);

  const [values, setValues] = useState({
    name: "",
    description: "",
    responsibilities: [],
  });

  const [reportsTo, setReportsTo] = useState(null);

  const [items, setItems] = useState({
    1: "",
    2: "",
    3: "",
  });

  const handleSubmit = (data) => {
    if (reportsTo == null)
    data.reportsTo = reportsTo;
    
    console.log("Submit: ", data);
    createJobTitle({ variables: data });
  };

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  // if (data) return window.alert("Confirm");

  return (
    <div className="px-6 mt-4">
      <Link href="/roles">
        <span className="py-1 px-2 rounded cursor-pointer inline-flex items-center text-black/75 tracking-normal bg-white border border-black/25">
          <svg className="w-4 mr-2" viewBox="0 0 24 24">
            <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
          </svg>
          Back To Roles
        </span>
      </Link>
      <div className="py-4">
        <h1 className="text-black text-2xl mb-2">Create New Role</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            var data = map(items, (value, key) => value);
            values.responsibilities = data;
            values.reportsTo = "6128ded05685fd2a7842a52a";
            handleSubmit({ ...values });
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <label htmlFor="role" className="text-lg">
              Role Name
            </label>
            <input
              id="role"
              type="text"
              className="text-black p-2 block w-[30vw] border border-gray-300 rounded"
              placeholder="UX/UI Designer"
              onChange={(e) => {
                setValues({ ...values, name: e.target.value });
              }}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-lg">
              Description
            </label>
            <textarea
              id="description"
              type="text"
              className="text-black p-2 block w-[40vw] border border-gray-300 rounded"
              placeholder="UX/UI Designer"
              onChange={(e) => {
                setValues({ ...values, description: e.target.value });
              }}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-lg">
              Responsibilities
            </label>
            <ol className="list-outside pl-6 list-decimal space-y-2">
              {map(items, (item, index) => (
                <li key={index}>
                  <div className="flex">
                    <input
                      type="text"
                      value={items[index]}
                      className="text-black p-2 block w-[30vw] border border-gray-300 rounded"
                      onChange={(e) => {
                        e.preventDefault();
                        setItems({
                          ...items,
                          [index]: e.target.value,
                        });
                      }}
                    />
                  </div>
                </li>
              ))}
            </ol>
            <button
              type="button"
              className="flex items-center mt-3 py-2 rounded border-none bg-transparent text-sm text-primary"
              onClick={() => {
                if (size(items) == 5) return;
                
                setItems({ ...items, [size(items) + 1]: "" });
              }}
            >
              <svg
                className="h-5 mr-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Add Responsibility
            </button>
          </div>
          <div>
            <label htmlFor="description" className="text-lg">
              Reporting to:
            </label>
            <div className="flex">
              <PickRole 
                role={reportsTo}
                onChange={setReportsTo}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary flex px-5 py-2 rounded text-white/90"
          >
            Save Role
          </button>
        </form>
      </div>
    </div>
  );
}

Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
