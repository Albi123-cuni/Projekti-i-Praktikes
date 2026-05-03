import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Rreth dyqanit tone</h1>

        <p style={styles.text}>
          Mire se vini ne dyqanin tone online! Ne ofrojme produkte cilesore me cmime te arsyeshme per te gjithe klientet tane.
        </p>

        <p style={styles.text}>
          Qellimi yne eshte te sjellim eksperiencen me te mire te blerjes, duke ofruar produkte te zgjedhura me kujdes dhe sherbim te shpejte.
        </p>

        <p style={styles.text}>
          Ne besojme ne cilesi, besim dhe kenaqesi te klientit.
        </p>

        <button style={styles.button}>Shiko produktet</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    width: "60%",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  title: {
    color: "#222",
    marginBottom: "20px"
  },
  text: {
    color: "#555",
    fontSize: "18px",
    marginBottom: "15px"
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default About;