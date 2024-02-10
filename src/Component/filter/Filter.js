import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [noteFilter, setNoteFilter] = useState("");
  const handleTitleFilter = (e) => {
    setTitleFilter(e.target.value);
    onFilter({ title: e.target.value, note: noteFilter });
  };
  const handleNoteFilter = (e) => {
    setNoteFilter(e.target.value);
    onFilter({ title: titleFilter, note: e.target.value });
  };
  return (
    <div>
      <input
        type="search"
        placeholder="mettez un titre"
        value={titleFilter}
        onChange={handleTitleFilter}
      />
      <input
        type="number"
        value={noteFilter}
        onChange={handleNoteFilter}
        min="2"
        max="5"
      />
    </div>
  );
};

export default Filter;
