import { useState } from "react"
function Form({ ListItems }) {
    const [item, setItem] = useState("")
    const [quantity , setQuantity] = useState(1)
    const quantityNumbers = Array.from({ length: 20 }, (_, quantityIndex) => quantityIndex + 1)
    
    const newItem = {
        item: item,
        quantity :quantity
    }

    const handleSubmitItem = (event) => {
        event.preventDefault()
        ListItems((previousItems) => [...previousItems, newItem])
        console.log(item);
        setItem("")
        setQuantity(1)
    }

    return (
        <>
            <h2>Wellcome to my first list shopping</h2>
            <form onSubmit ={handleSubmitItem}>
                <input
                    type="text"
                    placeholder="type your items..."
                    value={item}
                    onChange={(event) => {
                        setItem(event.target.value)

                    }}
                />
                <select
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}>
                    {quantityNumbers.map((quantityNumber) =>
                        <option key={quantityNumber} value={quantityNumber}>{quantityNumber}</option>
                    )}
                </select>
                <button type="submit">add</button>
            </form>

        </>
    )
}

export default Form

























// import { useState } from "react"

// function Form({ ListItems }) {
//     const [item, setItem] = useState("")
//     const[quantity , setQuantity] = useState(1)


//     const quantityNumbers = Array.from({ length: 20 }, (_, quantityIndex) => quantityIndex + 1)

//     const newItem = {
//         item: item,
//         quantity: quantity
//     }

//     const handleAddItems = (event) => {
//         console.log(item);
//     }

//     const handleSubmitItem = (event) => {
//         event.preventDefault()
//         ListItems((previousItems) => [...previousItems, newItem])
//         setItem("")
//     }
//     return (
//         <>
//             <h1>This is my first shopping list</h1>
//             <form onSubmit={handleSubmitItem} >
//                 <input
//                     type="text"
//                     placeholder="set your item here...."
//                     value={item}
//                     onChange={(event) => {
//                         setItem(event.target.value)
//                     }}

//                 />
//                 <select onChange={(event)=>setQuantity(event.target.value)}>
//                     {quantityNumbers.map((quantityNumber) =>
//                         <option
//                             value={quantityNumber}
//                             key={quantityNumber}>{quantityNumber}</option>

//                     )}
//                 </select>
//                 <button type="submit" onClick={handleAddItems}>Add</button>
//             </form>

//         </>
//     )
// }
// export default Form




























































// import { useState } from "react"

// function Form({setItems}) {
//     const [item, setItem] = useState("")
//     const [quantity, setQuantity] = useState(1)
//     const quantityNumbers = Array.from({ length: 20 }, ( _ , quantityIndex) => quantityIndex + 1)

// const newItem = {
//             item: item,
//             quantity: quantity
//         }
//     const handleSubmitItem = (event) => {
//         event.preventDefault()
//

//         setItems((previousItems) => [...previousItems, newItem])
//         setItem("")
//         setQuantity(1)
//     }

//     return (
//         <>
//             <h2>set your shopping list here ...</h2>
//             <form onSubmit={handleSubmitItem}>
//                 <input
//                     type="text"
//                     placeholder="item..."
//                     value={item}
//                     onChange={(event) => {
//                         setItem(event.target.value)
//                     }}
//                 />
//                 <select
//                     value={quantity}>
//                     onChange ={(event) => {
//                         setQuantity(Number(event.target.value))
//                     }}

//                     {quantityNumbers.map((quantityNumber) => {
//                         <Option
//                             key={quantityNumber}
//                             value={quantityNumber}> {quantityNumber}</Option>



//                     })}
//                 </select>
//                 <button type="submit">add</button>
//             </form>
//         </>
//     )

// }

// export default Form