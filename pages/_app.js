import "../styles/globals.css";
import Navigation from "../ui/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
