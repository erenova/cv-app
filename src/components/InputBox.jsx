export function InputBox({
  label,
  type = "text",
  maxDigit = "",
  eventFunc,
  id,
}) {
  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor={id}>{label}</label>
        <input
          onInput={(event) => {
            eventFunc && eventFunc(event.target.value);
          }}
          id={id}
          type={type}
          maxLength={maxDigit}
          className="bg-bg border border-brown w-32"
        />
      </div>
    </div>
  );
}
