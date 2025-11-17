

function App() {
    const userName = "Aditya";
    console.log("App Component");
    Header(userName);     
}

function Header(userName) {
    console.log("Header Component - received:", userName);
    Navbar(userName);     
}

function Navbar(userName) {
    console.log("Navbar Component - received:", userName);
    UserProfile(userName);  
}

function UserProfile(userName) {
    console.log("UserProfile Component - final output:");
    console.log(`Welcome, ${userName}!`);
}

App();
