
import LayoutWellness from "./layout/LayoutWellness"
import {useState, useEffect} from "react"
import Quote from "./Quote";


const Home = () => {

    const [data, setData]= useState(null)
    const[randomData, setRandomData] = useState()
    
    useEffect(()=> {

    
    const zenQuotes = () => {
        // const request = require('request-promise');
      try {  
        
       fetch( 'https://zenquotes.io/api/quotes/') // 1
         .then(res=> res.json())
         .then(data=> {
            //  console.log(data)
             setData(data)
         })
        
      }catch(err){
            return err.error ? JSON.parse(err.error) : err;
      }
    
      }
      zenQuotes()
    }, [])

//  console.log(data)
 const getquotes = () => {
   let myArray = []; 
   myArray.push(data)
    const randomQuote = Math.floor(Math.random()*myArray.length);
    // const randomTime = Math.floor(Math.random() *3000);
    const myQuote =myArray[randomQuote]

    // console.log(test)
//     setTimeout(()=> ({
//         myQuote
//     }), randomTime);
    
 }

 

    

    return (
        <>
        <LayoutWellness/>
        {/* {data&&
        // <div>{myQuote.map((quote)=> {
        //     return <Quote key ={quote} quote={quote}/>
        // })}</div>
    } */}
        <h1>Home</h1>
        </>
    )
};

export default Home;