import React from "react";
import Usercard from "./components/Usercard";

const App = () => {
  const users = [
    {
      name: "Sumana Chakraborty",
      role: "Software Engineer",
      img: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      desc: "Passionate about crafting clean and efficient code.",
    },

    {
      name: "Mona Dutta",
      role: "UI/UX Designer",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=60",
      desc: "Designing modern and user-friendly interfaces.",
    },
    {
      name: "Rahul Sen",
      role: "Frontend Developer",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=60",
      desc: "Turning creative ideas into pixel-perfect web apps.",
    },
    {
      name: "Priya Roy",
      role: "Backend Engineer",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=60",
      desc: "Loves working with APIs, databases, and server-side logic.",
    },
    {
      name: "Rohit Das",
      role: "DevOps Specialist",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=60",
      desc: "Automating workflows and improving app performance.",
    },

    {
      name: "Abhishek Sharma",
      role: "Full Stack Developer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=60",
      desc: "Working across frontend and backend technologies.",
    },
    {
      name: "Riya Bose",
      role: "Product Manager",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=60",
      desc: "Bridging tech, design, and business for better user experience.",
    },
    {
      name: "Kunal Ghosh",
      role: "Cybersecurity Analyst",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=600&q=60",
      desc: "Protecting systems and users from digital threats.",
    },
  ];

  return (
    <div className="user-cards">
      {users.map((user, index) => (
        <Usercard key={index} user={user} />
      ))}
    </div>
  );
};

export default App;
