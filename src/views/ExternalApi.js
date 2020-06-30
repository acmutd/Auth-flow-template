import React, { useState } from "react";
import { Button } from "reactstrap";
import Highlight from "../components/Highlight";
import { useAuth0 } from "@auth0/auth0-react";


const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  //this needs to be rewritten using axios/promises instead of async/await
  //spike task for when we have free time
  const callApi = async () => {
    try {
      const data = {
        name: "ACM Education",
        organization: "ACM",
        randomField: "hello-world"
      };
      const token = await getAccessTokenSilently();
      const response = await fetch(`https://us-central1-acm-core.cloudfunctions.net/api/createTestDivision`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      console.log(responseData);

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="mb-5">
        <h1>External API</h1>
        <p>
          Ping firebase cloud functions through the ACM Cloud Api button. It may take a few extra seconds the first time. Cloud functions have a cold start boot time.
        </p>

        <Button color="primary" className="mt-5" onClick={callApi}>
          ACM Cloud Api
        </Button>
      </div>

      <div className="result-block-container">
        <div className={`result-block ${showResult && "show"}`}>
          <h6 className="muted">Result</h6>
          <Highlight>{JSON.stringify(apiMessage, null, 2)}</Highlight>
        </div>
      </div>
    </>
  );
};

export default ExternalApi;
