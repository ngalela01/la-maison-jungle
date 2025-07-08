import {plantList} from '../datas/plantList';


function ShoppingList() {
    const categories=[];
    plantList.forEach((plant)=>{
        if(!categories.includes(plant.category)){
            categories.push(plant.category)
        }
    })
   
    return (
        <ul>
            {categories.map((cat)=> (
                <li key={cat}>{cat}</li>
            ))}
        </ul>
    )
}

export default ShoppingList;