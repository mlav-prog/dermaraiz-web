import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function GithubPagesRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");

    if (redirect && redirect.startsWith("/")) {
      navigate(redirect, { replace: true });
    }
  }, [location.search, navigate]);

  return null;
}

export default GithubPagesRedirect;
