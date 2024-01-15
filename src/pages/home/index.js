import React from "react";
import { Link } from "react-router-dom";
import { webRoutes } from "../../routes/web";

export default function HomeIndex() {
  return (
    <div>
      <Link to={webRoutes.home} className="mx-4">
        Home
      </Link>
      <Link to={webRoutes.dashboard} className="mx-4">
        Dashboard
      </Link>
      <Link to={webRoutes.onlineAddmissionForm} className="mx-4">
        OnlineAddmissionForm
      </Link>
    </div>
  );
}
