import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FunctionalComponent } from "./Lego/FunctionalComponent";
import { Test } from "./Test";
import { TestForm } from "./Form/TestForm";
import { TestPreview } from "./Preview/TestPreview";
import { Row } from "./Lego/Row";
import { Col } from "./Lego/Col";

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
