import React from "react";
import { CodePurposeFooterBackground } from "./Styles";

const CodePurposeFooter = props => {
  const { charcoal } = props;
  return (
    <CodePurposeFooterBackground color={charcoal}>
      <p>
        Made by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://codepurpose.io/"
        >
          CodePurpose
        </a>
      </p>
    </CodePurposeFooterBackground>
  );
};

export default CodePurposeFooter;
