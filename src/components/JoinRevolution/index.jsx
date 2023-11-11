import "./style.css";
function JoinRevolution() {
  return (
    <div className="joinRevolution-wrapper">
      <div className="joinRevolution-inner_wrapper">
        <h1>Join our travel revolution</h1>
        <p>
          Sign up to stay in the know - hot new travel spots,
          how we strive to make the world a better place, and all sorts
          of surprises.
        </p>
        <div className="joinRevolution-signUp">
          <input type="text" placeholder="Email" />
          <button className="joinRevolution-signUp_btn">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default JoinRevolution;
