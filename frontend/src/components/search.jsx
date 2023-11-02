import React,{useState}from "react";
import "./search.css";

const Search = (props) => {

 
  return (
    <div class="form-control">
      <input
        placeholder="Enter Your Contract Number/username/userId"
        class="input"
        onChange={props.HandleChange}
        name="value"
        type="text"
      />
      <button
      onClick={props.searchforval}
        type="button"
        class="ml-5 py-4 px-6 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
