import logo from "./assets/logo.svg"
import ring from "./assets/ring.svg"
import moon from "./assets/icons/moon.svg"
import sun from "./assets/icons/sun.svg"
import shopingCart from "./assets/shopping-cart.svg"
import { useContext, useState } from "react"
import CardDetails from "./cine/CardDetails"
import { MovieContext, ThemeContext } from "./context"

export default function Header() {
    const [showCart, setShowCart] = useState(false)
    const {state} = useContext(MovieContext)
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    function handleShowCart(){
        setShowCart(true)
    }
    return (
        <header>
            {showCart && <CardDetails onClose={() => setShowCart(false)}/>}
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={logo} width="139" height="26" alt="" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={ring} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a onClick={() => setDarkMode(darkMode => !darkMode)} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                    <img src={darkMode ? sun : moon} width="24" height="24" alt="" /> 
                            
                        </a>
                    </li>
                    <li>
                        <a onClick={handleShowCart} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={shopingCart}width="24" height="24" alt="" />
                            {state.cartData.length > 0 && <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] p-[2px} h-[30px] w-[30px] text-white text-center ">{state.cartData.length}</span>}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}