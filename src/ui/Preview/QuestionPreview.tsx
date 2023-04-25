import { useFormContext } from "react-hook-form";
import Latex from "react-latex";
import { Col, Row } from "../Lego";
import { FunctionalComponent } from "../Lego/FunctionalComponent";
import { evaluateExpression } from "./evaluateExpression";

export const QuestionPreview: FunctionalComponent<{ index: number }> = ({
  index,
  ...props
}) => {
  const { watch } = useFormContext();
  const question = watch(`questions.[${index}]`);

  if (!question) return null;
  const { params } = question;
  if (!params) return null;
  const questionText = question.question;
  const answerText = question.answer;
  const parsedQuestion = evaluateExpression(params)(questionText);
  const parsedAnswer = evaluateExpression(params)(answerText);

  return (
    <Col
      {...props}
      style={{
        alignItems: "baseline",
        width: "100%",
      }}
    >
      <Row style={{ alignItems: "baseline" }}>
        <text style={{ marginRight: 8 }}>{`Q${index + 1}. `}</text>
        <Latex minRuleThickness={0.05}>{parsedQuestion}</Latex>
      </Row>
      <Box />
      <p>
        <text style={{ marginRight: 8 }}>{`A${index + 1}. `}</text>
        <Latex minRuleThickness={0.05}>{parsedAnswer}</Latex>
      </p>
    </Col>
  );
};

const Box: FunctionalComponent = ({ children, style, ...props }) => {
  return (
    <Row style={{ width: "100%" }}>
      <div
        {...props}
        style={{
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "black",
          marginTop: 30,
          flex: 1,
          height: 300,
          ...style,
        }}
      >
        {children}
      </div>
    </Row>
  );
};
