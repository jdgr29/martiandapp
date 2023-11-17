import React from "react";

// Text input which can show error underneath if not valid
const ValidatedTextInput = ({
  setName,
  inputName,
  inputId,
  placeholder,
  errorMessage,
}: {
  setName: Function;
  inputName: string;
  inputId: string;
  placeholder: string;
  errorMessage?: string;
}) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        name="mname"
        id="mname"
        placeholder="Martian"
        className="m-4 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
      {errorMessage && <p className="">{errorMessage}</p>}
    </div>
  );
};

export default ValidatedTextInput;
