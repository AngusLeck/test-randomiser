import random from "random";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ArgumentInput } from "../ArgumentInput";
import { Col, Row } from "../Lego";
import { FunctionalComponent } from "../Lego/FunctionalComponent";
import { examples } from "./examples";

export const Question: FunctionalComponent<{ questionNumber: number }> = ({
  questionNumber,
  ...props
}) => {
  const paramNumber = 0;
  const { params, question, answer } =
    examples[questionNumber % examples.length];
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
          default: params[0].name,
        }}
      />
      <ArgumentInput
        style={{ width: 60 }}
        argument={{
          __type_name__: "integer",
          name: `questions.[${questionNumber}].params.[${paramNumber}].range.min`,
          label: "min",
          default: params[0].range.min,
        }}
      />
      <ArgumentInput
        style={{ width: 60 }}
        argument={{
          __type_name__: "integer",
          name: `questions.[${questionNumber}].params.[${paramNumber}].range.max`,
          label: "max",
          default: params[0].range.max,
        }}
      />
      <Col>
        <ArgumentInput
          style={{ width: 400, marginTop: 0, paddingTop: 0, flex: 1 }}
          argument={{
            __type_name__: "string",
            name: `questions.[${questionNumber}].question`,
            label: "question",
            default: question,
          }}
        />
        <ArgumentInput
          style={{ width: 400 }}
          argument={{
            __type_name__: "string",
            name: `questions.[${questionNumber}].answer`,
            label: "answer",
            default: answer,
          }}
        />
      </Col>
    </Row>
  );
};
