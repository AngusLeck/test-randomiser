import { useFormContext } from "react-hook-form";
import { FunctionalComponent } from "../Lego/FunctionalComponent";

export const Title: FunctionalComponent = () => {
  const { watch } = useFormContext<{ title: string }>();
  const title = watch("title");
  return (
    <p
      style={{
        alignSelf: "center",
        fontSize: "large",
        fontFamily: "fantasy",
        marginBottom: 30,
        marginTop: 50,
      }}
    >
      {title}
    </p>
  );
};
