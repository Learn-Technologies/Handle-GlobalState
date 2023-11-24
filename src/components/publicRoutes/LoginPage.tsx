import React from "react";
import { authStoreHelper } from "../pullstate/store";

function LoginPage() {
  return (
    <div>
      login
      <button onClick={() => authStoreHelper.setLoggedIn(true)}>
        click to login a user
      </button>
    </div>
  );
}

export default LoginPage;
