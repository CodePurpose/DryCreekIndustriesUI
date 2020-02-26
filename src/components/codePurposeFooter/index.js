import React from "react";
import { CodePurposeFooterBackground } from "./Styles";

const charcoal = "#000000e3";

const CodePurposeFooter = () => {
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
