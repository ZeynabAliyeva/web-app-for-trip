import errorPhoto from "../../assets/images/notFound.jpeg";
import "./style.css"
function Error() {
  return <img src={errorPhoto} alt="Not Found" className="error-photo"/>;
}

export default Error;
