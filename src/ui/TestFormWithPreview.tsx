import { FormProvider, useForm } from "react-hook-form";
import { TestForm } from "./Form/TestForm";
import { Col, Row } from "./Lego";
import { FunctionalComponent } from "./Lego/FunctionalComponent";
import { TestPreview } from "./Preview/TestPreview";
import { Test } from "./Test";

export const TestFormWithPreview: FunctionalComponent = ({
  children,
  ...props
}) => {
  const form = useForm<Test>({ reValidateMode: "onChange", mode: "onChange" });
  const height = window.innerHeight;
  const width = window.innerWidth;

  return (
    <FormProvider {...form} {...props}>
      <Row style={{ width, height }}>
        <Col style={{ margin: 40, marginRight: 20 }}>
          <TestForm />
        </Col>
        <Col style={{ margin: 40, marginLeft: 20 }}>
          <TestPreview />
        </Col>
      </Row>
    </FormProvider>
  );
};
