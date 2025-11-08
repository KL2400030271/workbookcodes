import {Link} from "react-router-dom";
const HomePage =()=>{
    return(
        <div className="min-h-screen bg-blue-100">
            <nav className="flex justify-between items-center bg-pink-200 p-4 text-red">
                <div className="flex items-center">
                    <img src="c:\Users\M V S Sai Aditya\Downloads\kllogo.png" alt="kllogo" className="w-20 mr-3"/>
                    <h1 className="text-2xl font-bold">Product Management System</h1>
                </div>
                <div className="flex gap-4">
                    <Link to="/signin" className="hover:underline">SignIn</Link>
                    <Link to="/signup">SignUp</Link>
                    <Link to="/aboutus">AboutUs</Link>
                </div>
            </nav>
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dignissimos fuga facere repellendus minus nesciunt magnam debitis incidunt consectetur et? Consectetur quis ad quae, et quisquam aut earum labore enim!</p>
            </div>
        </div>
    )
}
export default HomePage;