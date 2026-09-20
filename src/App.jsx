import { useState } from "react"
import Form from "./Form"
import List from "./List"
function App() {

    const [items , setItems] = useState([])
    return (
       <>
            <Form ListItems = { setItems} />
            <List Items = {items} />
        </>
    )
}
export default App


























// import { useState } from "react"
// import Form from "./Form"
// import List from "./List"

// function App() {
//     const [items,setItems] = useState([])
//     return (
//         <>
//             <Form ListItems = {setItems} />
//             <List Items={ items} />
//     </>  
//     )
// }

// export default App







































































//آموزش props ,
// یادگیریmap()
// انتقال داده از مادر به فرزند

// const initialItem = [
//     { item : 'item 1' , quantity : 2},
//     { item : 'item 2' , quantity : 3},
//     { item: 'item 3', quantity: 34 }
//  ]

// function App() {
//     const name1 ='student'
//     return (
//         <Item name={ name1} />
// اینکار (props)هستش
//     )
// }

//     function Item({name}) {
//         return (
//             <>
            
//             {initialItem.map((item, index) =>
//                 <div key={index}>
//                     <h3>{item.item}</h3>
//                     <span>{item.quantity}</span>
//                     <div>{name }</div>
//                 </div>
//             )}
                
//         </> 
//         )
//     }

// export default App
// ارسال تابع یا کامپوننت به کامپوننت های دیگه
///////////////////////////////////////////////////////






































































// export default function App() {
//     return (
//         <div style={{ textAlign: 'center', marginTop: '50px' }}>
//             <h1>سلام ، به ری اکت خوش اومدی</h1>
//             <p style={{ fontSize: '20px'}}>تبریک برای ورودت به دنیای ری اکت</p>
//         </div>
//     )
// }
// import { useState } from 'react';
// function App() {
//     const [count, setCount] = useState(0)
//     return (
//         <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
//             <h1>برنامه شمارنده</h1>
//             <p style={{ fontSize: '24px' }}> مقدار فعلی:<strong>{ count}</strong></p>
//             <button
//                 onClick={() => setCount(count + 1)}
//                 style={{ fontSize: '16px', padding: '10px', cursor: 'pointer' }}>
//                 افزایش عدد
//             </button>
//         </div>
//     );
// }
// export default App;
// import { useState } from 'react';
// function App() {
//     const[isOn, setIsOn] = useState(false);
//     return (
//         <div style={{
//             textAlign: 'center',
//             marginTop: '50px',
//             fontFamily: 'sans-serif',
//             backgroundColor: isOn ? '#e8f5e9' : ' #ffebee',
//             padding: '40px',
//             borderRadius: ' 10px',
//             maxWidth: '400px',
//             margin: '50px auto'
//         }}>
//             <h1>وضعیت لامپ</h1>
//             <p style={{ fontSize: '24px', }}><strong>{isOn ? 'On' : 'Off'} </strong>لامپ در حال حاضر</p>
//             <button
//                 onClick={() => setIsOn(!isOn)}
//                 style={{
//                     padding: '10px 20px',
//                     fontSize: '16px',
//                     cursor: 'pointer',
//                     backgroundColor: isOn ? '#d32f2f ' : '#388e3c' ,
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '5px'
//                 }}
              
//             >
//                   {isOn ? 'turn off'  : 'turn off'}
//             </button>

//         </div>
//     );
// }
// export default App