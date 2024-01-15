import { Client, Message } from "@stomp/stompjs";

class WebSocketService {
  private stompClient: Client;

  constructor() {
    this.stompClient = new Client({
      brokerURL: "ws://localhost:8080/ws", // Replace with your WebSocket server URL
      debug: (str: string) => {
        console.log(str);
      },
      reconnectDelay: 5000,
    });
  }

  connect = () => {
    console.log("Connecting to WebSocket...");
    this.stompClient.activate();
  };

  onConnect = () => {
    console.log("WebSocket connected!");
  };

  onDisconnect = () => {
    console.log("WebSocket disconnected!");
  };

  subscribeToUserDestination = (
    email: string,
    callback: (message: Message) => void
  ) => {
    const userDestination = `/user/${email}/private`;

    const subscribe = () => {
      this.stompClient.subscribe(userDestination, (response) => {
        callback(response);
      });
    };

    if (this.stompClient.connected) {
      subscribe();
    } else {
      this.stompClient.onConnect = () => {
        subscribe();
      };
    }
  };

  sendMessage = (destination: string, message: any) => {
    if (this.stompClient.connected) {
      this.stompClient.publish({ destination, body: JSON.stringify(message) });
    } else {
      console.warn("STOMP client is not connected. Unable to send message.");
    }
    // this.stompClient.publish({ destination, body: JSON.stringify(message) });
  };

  unsubscribeFromUserDestination = (email: string) => {
    const userDestination = `/user/${email}/private`;

    // Check if the STOMP client is connected before unsubscribing
    if (this.stompClient.connected) {
      this.stompClient.unsubscribe(userDestination);
    } else {
      console.warn("STOMP client is not connected. Unable to unsubscribe.");
    }
  };
}

const webSocketService = new WebSocketService();
export default webSocketService;
