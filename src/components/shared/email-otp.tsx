import React from "react";

interface EmailOTPProps {
  code: string | number;
}

const EmailOTP = ({ code }: EmailOTPProps) => {
  return (
    <div>
      <h2 className="text-lg font-medium">
        Welcome, your code is: <span className="text-primary">{code}</span>
      </h2>
    </div>
  );
};

export default EmailOTP;
