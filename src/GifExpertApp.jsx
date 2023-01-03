import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/gifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }
    console.log(newCategory);
    // categories.push('Valorant')
    setCategories([...categories, newCategory]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={onAddCategory}
        // setCategories={setCategories}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
