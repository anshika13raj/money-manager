/**
 * Category dropdown component.
 * Allows the user to manually change
 * the displayed category.
 */

import { useState } from "react";

const categories = [
  "Food",
  "Travel",
  "Salary",
  "Shopping",
  "Entertainment",
  "Miscellaneous"
];

function CategoryDropdown({ category }) {

  const [selectedCategory, setSelectedCategory] =
    useState(category);

  return (

    <select
      className="category-dropdown"
      value={selectedCategory}
      onChange={(e) =>
        setSelectedCategory(e.target.value)
      }
    >

      {categories.map((item) => (

        <option
          key={item}
          value={item}
        >
          {item}
        </option>

      ))}

    </select>

  );

}

export default CategoryDropdown;
