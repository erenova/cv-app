export default function PageButton({ isDesktop, isBack, eventClick }) {
  return (
    <button
      onClick={() =>
        (!isDesktop && eventClick("next")) ||
        (!isDesktop && isBack && eventClick("prev"))
      }
      className={
        "w-24 h-14 rounded-xl flex justify-center items-center " +
        (isBack ? "bg-gray2" : "bg-primary")
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 fill-white"
        viewBox="0 -960 960 960"
      >
        {isDesktop ? (
          <path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z" />
        ) : isBack ? (
          <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
        ) : (
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        )}
      </svg>
    </button>
  );
}
