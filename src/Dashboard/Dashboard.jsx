import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { artistas } from "../ProductSmock";


const DashBoard = () => {
  const rellenar = () => {
    artistas.forEach((artist) => {
      let refProduct = collection(db, "artistas");
      addDoc(refProduct, artist);
    });
  };
  return <button onClick={rellenar}>Rellenar base de datos</button>;
};

export default DashBoard;
