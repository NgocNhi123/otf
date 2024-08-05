import { Feature } from "features";

interface Props {
  feature: Feature;
}

export function Source({ feature }: Props) {
  const [attribute, value] = feature.css.split(": ");

  if (!attribute || !value)
    throw new Error(`unexpected syntax: ${feature.css}`);

  return (
    <>
      <div className="mb-18">
        To use{" "}
        <strong className="font-semibold">{`${feature.name} (${feature.code})`}</strong>{" "}
        in CSS:
      </div>
      <div className="p-24 lt960:p-18 bg-EDF relative shadow-E2E rounded">
        <code>
          <span className="text-718">{attribute}: </span>
          <span className="text-2D3">{value}</span>
        </code>
        <button
          className="absolute right-0 bottom-0 px-9 bg-FFF rounded-ss text-15 italic text-718"
          onClick={() => navigator.clipboard.writeText(feature.css)}
        >
          Copy code
        </button>
      </div>
    </>
  );
}
