import ReactDOM from "react-dom/client";

function App() {
  return <div>Hi from App</div>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
