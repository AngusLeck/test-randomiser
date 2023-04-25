import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { ArgumentInput } from "../ArgumentInput";
import { Col, Row } from "../Lego";
import { FunctionalComponent } from "../Lego/FunctionalComponent";
import { Test } from "../Test";
import { Question } from "./Question";
import Color from "ts-color-class";

export const TestForm: FunctionalComponent = ({ children, ...props }) => {
  const { watch, getValues } = useFormContext<Test>();
  const length = watch("length");
  console.log(getValues());
  const questions = useMemo(() => [...Array(length)], [length]);

  return (
    <Row
      style={{
        background: new Color("#282c34").darken(0.05).toString(),
        overflow: "scroll",
        width: "100%",
        height: "100%",
      }}
    >
      <Col style={{ alignItems: "baseline", padding: 30 }}>
        <ArgumentInput
          argument={{
            name: "length",
            __type_name__: "integer",
            label: "number of questions",
            default: 1,
            validate: (input) =>
              !input || input <= 0 ? "A test needs at least 1 question" : true,
          }}
        />
        {questions.map((_, index) => (
          <Question questionNumber={index} />
        ))}
      </Col>
    </Row>
  );
};
