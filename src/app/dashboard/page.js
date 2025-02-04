'use client';

import { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        window.location.href = "/login";
      })
      .catch((error) => console.error("Logout error:", error));
  };

  if (!user) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Logged in as: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
