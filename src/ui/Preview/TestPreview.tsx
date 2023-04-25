import { useMemo, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { useReactToPrint } from "react-to-print";
import { Col } from "../Lego";
import { FunctionalComponent } from "../Lego/FunctionalComponent";
import { Test } from "../Test";
import { QuestionPreview } from "./QuestionPreview";

export const TestPreview: FunctionalComponent = ({ ...props }) => {
  const { watch } = useFormContext<Test>();
  const length = watch("length");
  const questions = useMemo(() => [...Array(length)], [length]);
  const printRef = useRef<HTMLDivElement>(null);
  const onPrint = useReactToPrint({ content: () => printRef.current });

  return (
    <>
      <input
        type="button"
        onClick={onPrint}
        name="Print"
        style={{ top: 60, right: 60, position: "absolute", width: 100 }}
      />
      <Col
        {...props}
        forwardRef={printRef}
        style={{
          alignItems: "baseline",
          background: "white",
          justifyItems: "flex-start",
          width: "100%",
          overflow: "scroll",
          fontSize: "medium",
        }}
      >
        <div style={{ padding: 30 }}>
          {questions.map((_, index) => (
            <QuestionPreview key={index} index={index} />
          ))}
        </div>
      </Col>
    </>
  );
};
