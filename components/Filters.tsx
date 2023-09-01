"use client";
import { Select } from "antd";

export const FiltersList = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="flex gap-4 flex-wrap">
      <div className="mb-6 mt-2 flex gap-2 flex-wrap">
        <Select
          defaultValue="Lists"
          style={{ width: 160 }}
          onChange={handleChange}
          options={[
            { value: "curated", label: "Curated Algo" },
            { value: "100-like", label: "Top 100 Liked Questions" },
            { value: "top-interview", label: "Top Interview Questions" },
          ]}
        />
        <Select
          defaultValue="Difficulty"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "easy", label: "Easy" },
            { value: "medium", label: "Medium" },
            { value: "hard", label: "Hard" },
          ]}
        />
        <Select
          defaultValue="Status"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "todo", label: "Todo" },
            { value: "solved", label: "Solved" },
            { value: "attempted", label: "Attempted" },
          ]}
        />
        <Select
          defaultValue="Tags"
          style={{ width: 160 }}
          onChange={handleChange}
          options={[
            { value: "array", label: "Array" },
            { value: "string", label: "String" },
            { value: "hash-table", label: "Hash Table" },
            { value: "dynamic-programming", label: "Dynamic Programming" },
            { value: "sorting", label: "Sorting" },
          ]}
        />
      </div>
    </div>
  );
};
