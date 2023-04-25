import { ArgumentInput } from "../ArgumentInput";
import { FunctionalComponent } from "../Lego/FunctionalComponent";
import { Col, Row } from "../Lego";
import { alphabet } from "./alphabet";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import random from "random";

export const Question: FunctionalComponent<{ questionNumber: number }> = ({
  questionNumber,
  ...props
}) => {
  const paramNumber = 0;
  const defaultSymbol = alphabet[paramNumber];
  const { watch, setValue } = useFormContext();
  const min = watch(
    `questions.[${questionNumber}].params.[${paramNumber}].range.min`
  );
  const max = watch(
    `questions.[${questionNumber}].params.[${paramNumber}].range.max`
  );

  useEffect(() => {
    setValue(
      `questions.[${questionNumber}].params.[${paramNumber}].value`,
      random.int(min, max)
    );
  }, [max, min, questionNumber, setValue]);

  return (
    <Row {...props} style={{ justifyItems: "flex-start" }}>
      <ArgumentInput
        style={{ width: 50 }}
        argument={{
          __type_name__: "string",
          name: `questions.[${questionNumber}].params.[${paramNumber}].name`,
          label: "param",
          default: defaultSymbol,
        }}
      />
      <ArgumentInput
        style={{ width: 60 }}
        argument={{
          __type_name__: "integer",
          name: `questions.[${questionNumber}].params.[${paramNumber}].range.min`,
          label: "min",
          default: 2,
        }}
      />
      <ArgumentInput
        style={{ width: 60 }}
        argument={{
          __type_name__: "integer",
          name: `questions.[${questionNumber}].params.[${paramNumber}].range.max`,
          label: "max",
          default: 10,
        }}
      />
      <Col>
        <ArgumentInput
          style={{ width: 400, marginTop: 0, paddingTop: 0, flex: 1 }}
          argument={{
            __type_name__: "string",
            name: `questions.[${questionNumber}].question`,
            label: "question",
            default: `If $x^2 - \`${defaultSymbol}**2\` = 0$ find all possible solutions $x$.`,
          }}
        />
        <ArgumentInput
          style={{ width: 400 }}
          argument={{
            __type_name__: "string",
            name: `questions.[${questionNumber}].answer`,
            label: "answer",
            default: "$x = \\pm `a`$",
          }}
        />
      </Col>
    </Row>
  );
};
