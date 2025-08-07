interface EmailTemplateProps {
  firstName: string;
  otp: string;
}

const EmailTemplate = ({ firstName, otp }: EmailTemplateProps) => {
  return (
    <div>
      <h1>Welcome, {firstName}</h1>
      <p>
        Your One Time Password code is: <strong>{otp}</strong>
      </p>
    </div>
  );
};

export default EmailTemplate;
