

import Link from "next/link"
import "./style.css"



export default function Home(){

 
   
 return (    <div className=" ">
    <h1>Home Page</h1>
    <Link href="/blog" >Blog</Link>
        <br></br>
    <Link href="/products" >Product</Link>

    </div>)
}