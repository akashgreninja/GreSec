import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div class="form-control">
      <input
        placeholder="Enter Your Contract Number/username/userId"
        class="input"
        name="text"
        type="text"
      />
    </div>
  );
};

export default Search;
