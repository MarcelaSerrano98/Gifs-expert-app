import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target})=>{
        // console.log(event.target.value)
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        // setCategories([categories => [inputValue, ...categories]])
        if( inputValue.trim().length < 1 ) return;
        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
        
    }


  return (
    <form onSubmit={onSubmit}>

        <input type="text" 
        placeholder="Buscar Gift" 
        value={inputValue}
        onChange={ onInputChange}>
        </input>
   
    </form>
  )
}


