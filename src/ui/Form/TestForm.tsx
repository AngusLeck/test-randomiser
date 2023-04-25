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
        // background: "white", //new Color("#282c34").darken(0.05).toString(),
        background: new Color("white").darken(0.1).toString(),
        overflow: "scroll",
        width: "100%",
        height: "100%",
        color: new Color("black").lighten(0.1).toString(),
        borderRadius: 10,
      }}
    >
      <Col style={{ alignItems: "baseline", padding: 30, flex: 1 }}>
        <Row style={{ width: "100%" }}>
          <Row style={{ flex: 1 }}>
            <ArgumentInput
              style={{ flex: 1, maxWidth: 144 }}
              argument={{
                __type_name__: "integer",
                name: "length",
                label: "Number of questions",
                default: 1,
                validate: (input) =>
                  !input || input <= 0
                    ? "A test needs at least 1 question"
                    : true,
              }}
            />
          </Row>
          <Row style={{ flex: 4 }}>
            <ArgumentInput
              argument={{
                __type_name__: "string",
                name: "title",
                label: "Title",
                default: `Springfield Elementary 6th Grade Final ${new Date().getFullYear()}`,
              }}
              style={{
                minWidth: 400,
                flex: 1,
              }}
            />
          </Row>
        </Row>
        {questions.map((_, index) => (
          <Question questionNumber={index} />
        ))}
      </Col>
    </Row>
  );
};
