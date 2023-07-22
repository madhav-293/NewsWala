import loading from "./Loading.gif";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src={loading} alt="Loading" />
    </div>
  );
};
export { Spinner };
