import React from "react";
import { GoogleSignin } from "react-google-signin";

class GoogleSignin extends React.Component {
  render() {
    return (
      <GoogleSignin
        clientId="YOUR_CLIENT_ID"
        onSignIn={(user) => {
          // הנה הקוד שלך לטיפול באירוע ההתחברות
        }}
        onSignOut={() => {
          // הנה הקוד שלך לטיפול באירוע היציאה
        }}
      />
    );
  }
}

export default GoogleSignin;
