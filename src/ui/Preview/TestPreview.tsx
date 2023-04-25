import { useMemo, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { useReactToPrint } from "react-to-print";
import { Col, Row } from "../Lego";
import { FunctionalComponent } from "../Lego/FunctionalComponent";
import { Test } from "../Test";
import { QuestionPreview } from "./QuestionPreview";
import { PrintButton } from "./PrintButton";
import { Title } from "./Title";

export const TestPreview: FunctionalComponent = ({ ...props }) => {
  const { watch } = useFormContext<Test>();
  const length = watch("length");
  const questions = useMemo(() => [...Array(length)], [length]);
  const printRef = useRef<HTMLDivElement>(null);
  const onPrint = useReactToPrint({ content: () => printRef.current });

  return (
    <>
      <PrintButton
        onPrint={onPrint}
        style={{ top: 60, right: 60, position: "absolute" }}
      />
      <Col
        {...props}
        forwardRef={printRef}
        style={{
          alignItems: "baseline",
          background: "white",
          borderRadius: 10,
          justifyItems: "flex-start",
          width: "100%",
          overflow: "scroll",
          fontSize: "medium",
          color: "black",
        }}
      >
        <Row style={{ width: "100%" }}>
          <Col
            style={{
              flex: 1,
              marginLeft: 40,
              marginRight: 40,
              marginBottom: 60,
              alignItems: "baseline",
            }}
          >
            <Title />
            {questions.map((_, index) => (
              <QuestionPreview key={index} index={index} />
            ))}
          </Col>
        </Row>
      </Col>
    </>
  );
};
