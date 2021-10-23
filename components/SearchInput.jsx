import { useQuery } from "@apollo/client";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox";
import { useState } from "react";

function useSearch(query, searchTerm, key = "name") {
  const { loading, error, data } = useQuery(query);
  let results = [];

  console.log("Search data: ", data);
  if(data && data.jobTitles && data.jobTitles.length){
    if(!searchTerm || !searchTerm.length)
      results = data.jobTitles;
    else{
      results = data.jobTitles.filter((res) => res[key].toLowerCase().indexOf(searchTerm.toLowerCase()) != -1)
        .map((res) => ({...res, searchIndex: res[key].toLowerCase().indexOf(searchTerm.toLowerCase())}))
        .sort((a, b) => a.searchIndex - b.searchIndex);
    }
  }

  return [results, loading];
}


function SearchInput({query, placeholder = "Type to search", key="name", onChange}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, loading] = useSearch(query, searchTerm);
    const handleSearchTermChange = (event) => {
      setSearchTerm(event.target.value);
    };
    const handleSelect = (name) => {
      const selectedItem= results.find((res) => res[key] === name);
      onChange(selectedItem);
    };

    return (
      <Combobox aria-label="Search Results" className="w-full"
        onSelect={handleSelect}
      >
        <ComboboxInput
          className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none bg-white"
          placeholder={placeholder}
          onChange={handleSearchTermChange}
          autoFocus
        />
        {results && (
          <ComboboxPopover className="rounded overflow-hidden bg-white shadow-lg border z-20">
            {(!loading && results.length) > 0 ? (
              <ComboboxList>
                {results.map((res) => {
                  return (
                      <ComboboxOption key={res._id} value={res[key]} className="cursor-pointer">
                          <div className="flex items-center px-2 border-t border-gray-300" style={{height: "34px"}}>
                              <span className="ml-2 text-sm">{res[key]}</span>
                          </div>
                      </ComboboxOption>
                  );
                })}
              </ComboboxList>
            ) : (
              <span className="block p-3">
                { loading ? 'Loading...' : 'No results found' }
              </span>
            )}
          </ComboboxPopover>
        )}
      </Combobox>
    );
  }

export default SearchInput;