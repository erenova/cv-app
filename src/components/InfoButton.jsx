export default function InfoButton({ isDelete, clickFunc, typeVal }) {
  return (
    <button
      type={"button"}
      onClick={() => {
        clickFunc(typeVal);
      }}
      className={
        " flex items-center justify-center rounded drop-shadow-button w-20 h-10 mt-4 " +
        (isDelete ? "bg-gray2" : "bg-primary")
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={"fill-white " + (isDelete ? "w-10 " : "w-10 ")}
        viewBox="0 -960 960 960"
      >
        {isDelete ? (
          <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
        ) : (
          <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        )}
      </svg>
    </button>
  );
}
