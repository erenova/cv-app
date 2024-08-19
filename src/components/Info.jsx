import { useState } from "react";
import { InputBox } from "./InputBox";
import InfoButton from "./InfoButton";

export function Info({
  title,
  infoType,
  boxHeight,
  setGeneralFuncs,
  setEducationFuncs,
  setExperienceFuncs,
  clearInfo,
}) {
  const [status, setStatus] = useState(false);

  function handleClick() {
    setStatus(!status);
  }

  return (
    <div
      className={
        "bg-secondary w-64 flex flex-col border rounded-[10px] mt-4 duration-500 overflow-hidden " +
        (status === false ? "h-14" : boxHeight)
      }
    >
      <div onClick={handleClick} className="grid grid-cols-3  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 place-self-center mt-2"
          viewBox="0 -960 960 960"
          fill="#5f6368"
        >
          {infoType === "general" ? (
            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
          ) : infoType === "education" ? (
            <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
          ) : (
            <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
          )}
        </svg>

        <div className="font-k2dregular text-3xl text-center self-center drop-shadow-text select-none mt-2 cursor-pointer">
          {title}
        </div>
      </div>
      <div className=" w-full border-b-2 border-bg"></div>
      <div className="flex flex-col  items-center mt-4 h-full overflow-hidden">
        {infoType === "general" ? (
          <>
            <InputBox
              eventFunc={setGeneralFuncs.setFirstName}
              id="first-name"
              label="First Name"
            />

            <InputBox
              eventFunc={setGeneralFuncs.setLastName}
              id="last-name"
              label="Last Name"
            />
            <InputBox
              eventFunc={setGeneralFuncs.setCurrentPosition}
              id="current-position"
              label="Current Position"
            />
            <InputBox
              eventFunc={setGeneralFuncs.setUserMail}
              id="user-mail"
              label="Mail"
              type="email"
              required
            />
            <InputBox
              eventFunc={setGeneralFuncs.setUserPhone}
              id="user-phone"
              label="Phone"
              type="tel"
              maxDigit="20"
            />
            <InputBox
              eventFunc={setGeneralFuncs.setUserLocation}
              id="user-location"
              label="Location"
            />
          </>
        ) : infoType === "education" ? (
          <>
            <InputBox
              eventFunc={setEducationFuncs.setSchoolName}
              id="school-name"
              label="School Name"
            />
            <InputBox
              eventFunc={setEducationFuncs.setStudyName}
              id="study-title"
              label="Title Of Study"
            />
            <InputBox
              eventFunc={setEducationFuncs.setStudyStart}
              id="study-date"
              label="Date Of Study"
              type="month"
            />
            <InputBox
              eventFunc={setEducationFuncs.setStudyEnd}
              id="study-end"
              label="End Of Study (opt)"
              type="month"
            />
            <div className="w-full flex justify-center gap-8">
              <InfoButton
                typeVal="education"
                clickFunc={setEducationFuncs.createObj}
                isDelete={false}
              />
              <InfoButton
                clickFunc={clearInfo}
                type="education"
                isDelete={true}
              />
            </div>
          </>
        ) : infoType === "experience" ? (
          <>
            <InputBox
              eventFunc={setExperienceFuncs.setCompanyName}
              id="company-name"
              label="Company Name"
            />
            <InputBox
              eventFunc={setExperienceFuncs.setPositionName}
              id="position-name"
              label="Position Name"
            />
            <InputBox
              eventFunc={setExperienceFuncs.setPositionStart}
              id="job-date"
              label="Start Date"
              type="month"
            />
            <InputBox
              eventFunc={setExperienceFuncs.setPositionEnd}
              id="job-end"
              label="End Date (opt)"
              type="month"
            />
            <div className="w-full flex justify-center gap-8">
              <InfoButton
                typeVal="experience"
                clickFunc={setExperienceFuncs.createObj}
                isDelete={false}
              />
              <InfoButton
                clickFunc={clearInfo}
                type="experience"
                isDelete={true}
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
