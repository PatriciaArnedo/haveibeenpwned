import React, { useEffect, useState } from "react";
import EmailForm from "./EmailForm";
import ErrorDisplay from "./ErrorDisplay";
import Header from "./Header";
import BreachesTable from "./BreachesTable";

function RootContainer() {
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [breaches, setBreaches] = useState(undefined);

  useEffect(() => {
    if (!email) {
      return;
    }

    fetch(`http://localhost:8080/breaches?email=${email}`).then(
      async (resp) => {
        if (resp.status !== 200) {
          resp
            .json()
            .then((respJson) =>
              setErrorMsg(
                respJson.friendly_error ||
                  "An unknown error has occurred. Please try again."
              )
            );
          return;
        }
        const breaches = (await resp.json()).data;
        console.log("breaches", breaches);

        setBreaches(breaches);
      }
    );
  }, [email]);

  return (
    <div>
      <ErrorDisplay
        open={errorMsg.length > 0}
        onClose={() => setErrorMsg("")}
        msg={errorMsg}
      />

      <Header />
      <EmailForm onSubmit={(submittedEmail) => setEmail(submittedEmail)} />
      <BreachesTable breaches={breaches} />
    </div>
  );
}

export default RootContainer;
