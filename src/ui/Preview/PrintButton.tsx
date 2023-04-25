import { FunctionalComponent } from "../Lego/FunctionalComponent";

export const PrintButton: FunctionalComponent<{ onPrint: () => void }> = ({
  onPrint,
  style,
}) => (
  <input
    type="submit"
    onClick={onPrint}
    value="Print"
    style={{
      ...style,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 8,
      paddingRight: 8,
    }}
  />
);
