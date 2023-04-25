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
        color: "black",
      }}
    >
      <Row style={{ alignItems: "baseline" }}>
        <text style={{ marginRight: 8 }}>{`Q${index + 1}. `}</text>
        <Latex minRuleThickness={0.05}>{parsedQuestion}</Latex>
      </Row>
      <p>
        <text style={{ marginRight: 8 }}>{`A${index + 1}. `}</text>
        <Latex minRuleThickness={0.05}>{parsedAnswer}</Latex>
      </p>
    </Col>
  );
};
