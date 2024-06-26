import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Import your Firebase authentication module

const Home = () => {
    const navigate = useNavigate(); // Access the navigate function for navigation

    const handleLogout = () => {
        // Perform logout actions here
        auth.signOut()
            .then(() => {
                navigate("/User-Authentication"); // Redirect after successful logout
            })
            .catch(error => {
                console.error("Logout error:", error);
            });
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple home page with some random content.</p>
            <Link to="/User-Authentication" onClick={handleLogout}>Logout</Link>
        </div>
    );
}

export default Home;
