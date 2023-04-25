import { FunctionalComponent } from "../Lego/FunctionalComponent";

interface TextInputProps {
  value: string;
  onChange: (value: string | null) => void;
  label: string;
  error?: string;
}

export const TextInput: FunctionalComponent<TextInputProps> = ({
  value,
  onChange,
  label,
  error,
  style,
  ...props
}) => {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        marginRight: 12,
        ...style,
      }}
    >
      <div
        style={{
          fontSize: "small",
          alignSelf: "baseline",
          paddingBottom: 4,
        }}
      >
        {label}
      </div>
      <input
        type="text"
        value={value ?? ""}
        style={{ padding: 4, borderColor: error ? "red" : undefined }}
        onChange={({ target: { value } }) => onChange(value)}
      />
      <div
        style={{
          fontSize: 12,
          color: "gray",
          padding: 4,
          alignSelf: "baseline",
          height: 12,
        }}
      >
        {error}
      </div>
    </div>
  );
};
