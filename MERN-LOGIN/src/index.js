import app from "./app.js";
import {connect} from "./db.js";

const PORT = 5000;

connect();
app.listen(PORT, () => console.log(`Servidor on Port ${PORT}`));
