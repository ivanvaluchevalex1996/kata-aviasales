import { v4 as uuidv4 } from "uuid";

function generateKey() {
  return uuidv4();
}

export default generateKey;
