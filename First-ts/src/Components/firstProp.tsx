import React, { FC } from "react";
interface props {
  input: string;
  secondInput: string;
}

const FirstProp: FC<props> = (prop): JSX.Element => {
  return (
    <>
      {prop.input}
      <br />
      {prop.secondInput}
    </>
  );
};
export default FirstProp;
