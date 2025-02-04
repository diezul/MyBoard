import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
    window.location.href = "/login";
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
