import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput";

export const GET_JOB_TITLES = gql`
  query {
    jobTitles {
      _id
      name
      description
      reportsTo
      responsibilities
    }
  }
`;

function PickRole({role, onChange}){
    const [value, setValue] = useState(role);
    useEffect(() => {
        if(value && value !== role)
            onChange(value);
    }, [value]);

    return (
        <div style={{width: "320px"}}>
            { value && (        
                <div className="flex items-center w-full py-2 px-4 rounded border border-gray-300 focus:outline-none bg-white">
                    <span className="text-sm">{value.name}</span>

                    <button className="ml-auto text-blue-900 text-xs p-0" onClick={() => {setValue(null); onChange(null)}}>
                        Change
                    </button>
                </div>
            )}

            { !value && 
                <SearchInput
                    query={GET_JOB_TITLES}
                    onChange={setValue} 
                /> 
            }
        </div>
    );
}

export default PickRole;