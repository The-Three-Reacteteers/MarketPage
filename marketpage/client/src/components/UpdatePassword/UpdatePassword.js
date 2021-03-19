import React, { useState } from "react";
import { useAuthContext } from "../../data/AuthProvider";
import "./UpdatePassword.css";

const UpdatePassword = () => {
  const { loading, updatePassword } = useAuthContext();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        updatePassword(password, newPassword).then(success => {
          if (success) {
            setPassword('')
            setNewPassword('')
            alert('Password Changed Successfully!')
          }
        });
      }}
    >
      <h3 className="center-text">Change Password</h3>

      <hr />

      <div className="form-group">
        <label>Current Password</label>
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          required
          disabled={loading}
          className="form-control"
          placeholder="Enter current password"
        />
      </div>
      <div className="form-group">
        <label>New Password</label>
        <input
          value={newPassword}
          onChange={(ev) => setNewPassword(ev.target.value)}
          type="password"
          required
          disabled={loading}
          className="form-control"
          placeholder="Enter new password"
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="btn btn-dark btn-lg btn-block"
      >
        {loading ? "Loading..." : "Change"}
      </button>
    </form>
  );
};

export default UpdatePassword;
