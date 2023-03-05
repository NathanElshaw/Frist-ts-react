import React, { FC } from "react";
interface props {
  input: string;
  secondInput: string;
}

const FirstProp: FC<props> = (prop) => {
  return (
    <>
      <div>
        {prop.input}
        <br />
        {prop.secondInput}
      </div>
    </>
  );
};
export default FirstProp;
