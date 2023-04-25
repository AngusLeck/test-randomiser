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
    <Row {...props} style={{ width: "100%" }}>
      <Row style={{ flex: 1 }}>
        <ArgumentInput
          style={{ width: 40, resize: "none" }}
          argument={{
            __type_name__: "string",
            name: `questions.[${questionNumber}].params.[${paramNumber}].name`,
            label: "Param",
            default: params[0].name,
          }}
        />
        <ArgumentInput
          style={{ width: 40 }}
          argument={{
            __type_name__: "integer",
            name: `questions.[${questionNumber}].params.[${paramNumber}].range.min`,
            label: "Min",
            default: params[0].range.min,
          }}
        />
        <ArgumentInput
          style={{ width: 40 }}
          argument={{
            __type_name__: "integer",
            name: `questions.[${questionNumber}].params.[${paramNumber}].range.max`,
            label: "Max",
            default: params[0].range.max,
          }}
        />
      </Row>
      <Col style={{ alignItems: "baseline", width: "100%", flex: 4 }}>
        <Row style={{ width: "100%" }}>
          <ArgumentInput
            style={{
              minWidth: 400,
              marginTop: 0,
              paddingTop: 0,
              flex: 1,
            }}
            argument={{
              __type_name__: "string",
              name: `questions.[${questionNumber}].question`,
              label: "Question",
              default: question,
            }}
          />
        </Row>
        <Row style={{ width: "100%" }}>
          <ArgumentInput
            style={{ minWidth: 400, flex: 1 }}
            argument={{
              __type_name__: "string",
              name: `questions.[${questionNumber}].answer`,
              label: "Answer",
              default: answer,
            }}
          />
        </Row>
      </Col>
    </Row>
  );
};
