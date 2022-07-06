import Navigation from "./navigation";

function Container({ children }) {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
}

export default Container
