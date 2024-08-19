import { useState } from "react";

export default function PageCV({
  firstName,
  lastName,
  currentPosition,
  userMail,
  userPhone,
  userLocation,
  eduList,
  expList,
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  function CVList({ type = "education" }) {
    let list = type === "experience" ? expList : eduList;

    let eduItemsList = list.map((item) => {
      let startDate = new Date(item.start).toLocaleString("en", {
        month: "short",
        year: "numeric",
      });
      let endDate = item.end;
      if (endDate !== "Today") {
        endDate = new Date(item.end).toLocaleString("en", {
          month: "short",
          year: "numeric",
        });
      }

      return (
        <div key={item.uuidKey} className="w-fit flex flex-col border-b">
          <div className="break-words font-k2dbold border-b-2 border-b-gray w-fit self-start">
            {item.name}
          </div>
          <div className="break-words font-k2dlight self-start">
            {item.title}
          </div>
          <div className="break-words font-k2dthin self-end">
            {startDate} - {endDate}
          </div>
        </div>
      );
    });
    return eduItemsList;
  }

  return (
    <div className="border w-[95%] xs:w-96 min-h-[32rem] xl:w-[28rem] grid grid-cols-5 bg-bg">
      <div className="min-h-[32rem] bg-gray flex flex-col col-start-1 col-end-3">
        <div className="flex flex-col items-center">
          <div className="rounded-full border-black border border-opacity-20 w-20 h-20 mt-6 bg-placeholder ">
            <label
              htmlFor="upload-image"
              className="w-full h-full flex justify-center items-center cursor-pointer"
            >
              {selectedImage && (
                <img
                  alt="not found"
                  className=" rounded-full w-20 h-20 "
                  src={URL.createObjectURL(selectedImage)}
                />
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={"w-14 " + (selectedImage && "hidden")}
                viewBox="0 -960 960 960"
                fill="#5f6368"
              >
                <path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
              </svg>
              <input
                type="file"
                className="hidden"
                name="upload-image"
                id="upload-image"
                onChange={(event) => {
                  console.log(event.target.files[0]); // Log the selected file
                  setSelectedImage(event.target.files[0]); // Update the state with the selected file
                }}
              />
            </label>
          </div>
          <div className="font-k2dsemibold lg:text-2xl w-[90%] break-words text-center">
            {firstName} {lastName} {!firstName && !lastName && "John Doe"}
          </div>
          <div className="font-k2ditalic text-center lg:text-xl">
            {currentPosition} {!currentPosition && "Marketing Manager"}
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-52">
          <div className="h-[3px] bg-bg w-full"></div>
          <div className="font-k2dregular h-8 w-20 rounded-[40px] absolute bg-bg text-center text-lg flex justify-center items-center">
            Contact
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 pl-2  w-full">
          <div className="flex items-center gap-1 ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
            </span>
            <span className="font-k2dthin text-sm lg:text-lg max-w-[75%] break-words">
              {userMail} {!userMail && "johndoe@gmail.com"}
            </span>
          </div>
          <div className="flex items-center gap-1 ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
            </span>
            <span className="font-k2dthin text-sm lg:text-lg break-words max-w-[75%]">
              {userPhone} {!userPhone && "+1-234-567-8901"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
              </svg>
            </span>
            <span className="font-k2dthin text-md lg:text-lg break-words max-w-[75%]">
              {userLocation} {!userLocation && "World, Milky Way"}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full mt-28 col-start-3 col-end-6 flex flex-col items-center">
        <div className="flex justify-center items-center w-full mb-10">
          <div className="h-[3px] w-full bg-gray "></div>
          <div className="border-gray border bg-bg w-28 h-10 z-10 rounded-[40px] absolute flex justify-center items-center font-k2dlight text-xl">
            Education
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <CVList type="education" />
        </div>
        <div className="flex justify-center items-center w-full mb-10 mt-[31px] lg:mt-[71px] xl:mt-[43px]">
          <div className="h-[3px] w-full bg-gray "></div>
          <div className="border-gray border bg-bg w-28 h-10 z-10 rounded-[40px] absolute flex justify-center items-center font-k2dlight text-xl">
            Experience
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <CVList type="experience" />
        </div>
      </div>
    </div>
  );
}
