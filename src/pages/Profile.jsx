
import Footer from "../components/Footer";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Profile</h1>

      {user ? (
        <>
          <p>Welcome 👋</p>
          <p>Email: {user.email}</p>

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>You are not logged in</p>
      )}
      <Footer />
    </div>
  );
}