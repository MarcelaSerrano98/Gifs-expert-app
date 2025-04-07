import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  const onAddCategories = (newCategory) => {
    newCategory = newCategory.trim();
    // if (!newCategory) {
    //   setError("No puedes agregar una categoría vacía.");
    //   return;
    // }

    if (categories.includes(newCategory)) {
      setError(`La Categoría "${newCategory}" ya fue REGISTRADA.`);
      return;
    }
    setError("");
    // console.log(newCategory);
    // categories.push('valorant')
    // setCategories( [...categories, 'valorant']) esta para que el nuevo elemento aparezca al final
    setCategories([newCategory, ...categories])
  }

  // console.log(categories)
  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategories} />

      {error && <p style={{ color: "red" }}>{error}</p>}


      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category} />
        ))
      }
    </>
  )
}

export default GifExpertApp
