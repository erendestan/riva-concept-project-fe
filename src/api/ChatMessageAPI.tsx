import axios from "axios";
import TokenManager from "./TokenManager";

const ChatMessageAPI = {
  getChatHistory: (email) =>
    axios
      .get("http://localhost:8080/chathistory/email/" + email, {
        headers: { Authorization: `Bearer ${TokenManager.getAccessToken()}` },
      })
      .then((response) => response.data),
  // getUserByEmail: (email) =>
  // axios
  //   .get("http://localhost:8080/email/" + email, {
  //     headers: { Authorization: `Bearer ${TokenManager.getAccessToken()}` },
  //   })
  //   .then((response) => response.data),
};

export default ChatMessageAPI;
