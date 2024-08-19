import { useState } from "react";
import { Info } from "./Info";
import PageButton from "./PageButton";
import PageCV from "./PageCV";
import { v4 as uuid } from "uuid";

export default function App() {
  const [pageState, setPageState] = useState("prev");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentPosition, setCurrentPosition] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userLocation, setUserLocation] = useState("");
  //! Education States
  const [schoolName, setSchoolName] = useState("");
  const [studyName, setStudyName] = useState("");
  const [studyStart, setStudyStart] = useState("");
  const [studyEnd, setStudyEnd] = useState("");

  const [educationList, setEducationList] = useState([]);

  //! Experience States

  const [companyName, setCompanyName] = useState("");
  const [positionName, setPositionName] = useState("");
  const [positionStart, setPositionStart] = useState("");
  const [positionEnd, setPositionEnd] = useState("");

  const [experienceList, setExperienceList] = useState([]);

  console.log(educationList);
  console.log(experienceList);
  function createObj(type) {
    const uuidKey = uuid();

    if (type === "education") {
      if (schoolName && studyName && studyStart) {
        let studyEndVal = studyEnd;
        if (!studyEnd) studyEndVal = "Today";
        setEducationList([
          ...educationList,
          {
            name: schoolName,
            title: studyName,
            start: studyStart,
            end: studyEndVal,
            uuidKey,
          },
        ]);
        setSchoolName("");
        setStudyName("");
        setStudyStart("");
        setStudyEnd("");
        document.querySelector(`#school-name`).value = "";
        document.querySelector(`#study-title`).value = "";
        document.querySelector(`#study-date`).value = "";
        document.querySelector(`#study-end`).value = "";
      }
    } else if (type === "experience") {
      if (companyName && positionName && positionStart) {
        let positionEndVal = positionEnd;
        if (!positionEnd) positionEndVal = "Today";
        setExperienceList([
          ...experienceList,
          {
            name: companyName,
            title: positionName,
            start: positionStart,
            end: positionEndVal,
            uuidKey,
          },
        ]);
        setCompanyName("");
        setPositionName("");
        setPositionStart("");
        setPositionEnd("");
        document.querySelector(`#company-name`).value = "";
        document.querySelector(`#position-name`).value = "";
        document.querySelector(`#job-date`).value = "";
        document.querySelector(`#job-end`).value = "";
      }
    }
  }
  function clearInfo(type = "experience") {
    if (type === "education") {
      setEducationList([]);
      document.querySelector(`#school-name`).value = "";
      document.querySelector(`#study-title`).value = "";
      document.querySelector(`#study-date`).value = "";
      document.querySelector(`#study-end`).value = "";
    } else if (type === "experience") {
      setExperienceList([]);
      document.querySelector(`#company-name`).value = "";
      document.querySelector(`#position-name`).value = "";
      document.querySelector(`#job-date`).value = "";
      document.querySelector(`#job-end`).value = "";
    }
  }
  function onButtonClick(page) {
    setPageState(page);
    console.log(page);
  }

  return (
    <>
      <div className="flex flex-col gap-24 ">
        <div className="flex text-center justify-center lg:justify-normal lg:pl-20 gap-8  lg:bg-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 hidden lg:block"
            viewBox="0 -960 960 960"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q14-36 44-58t68-22q38 0 68 22t44 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-670q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-246q54-53 125.5-83.5T480-360q83 0 154.5 30.5T760-246v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM280-200h400v-10q-42-35-93-52.5T480-280q-56 0-107 17.5T280-210v10Zm200-320q-25 0-42.5-17.5T420-580q0-25 17.5-42.5T480-640q25 0 42.5 17.5T540-580q0 25-17.5 42.5T480-520Zm0 17Z" />
          </svg>
          <h1 className="text-4xl text-black font-k2dregular text-center mt-4">
            CV-Application
          </h1>
        </div>
        <div className="lg:flex lg:justify-center ">
          <div
            className={
              "flex flex-col justify-center items-center w-full lg:w-40 absolute top-40 lg:top-auto lg:-translate-x-[200%] transition-transform duration-500 " +
              (pageState === "next" && "-translate-x-full")
            }
          >
            {/* GENERAL */}
            <Info
              setGeneralFuncs={{
                setFirstName,
                setLastName,
                setCurrentPosition,
                setUserLocation,
                setUserMail,
                setUserPhone,
              }}
              title="General"
              infoType="general"
              boxHeight="h-[390px]"
            />
            {/* EDUCATION */}
            <Info
              setEducationFuncs={{
                setSchoolName,
                setStudyName,
                setStudyStart,
                setStudyEnd,
                createObj,
              }}
              clearInfo={() => {
                clearInfo("education");
              }}
              title="Education"
              infoType="education"
              boxHeight="h-[340px]"
            />
            {/* EXPERIENCE */}
            <Info
              setExperienceFuncs={{
                setCompanyName,
                setPositionName,
                setPositionStart,
                setPositionEnd,
                createObj,
              }}
              clearInfo={() => {
                clearInfo("experience");
              }}
              title="Experience"
              infoType="experience"
              boxHeight="h-[340px]"
            />
            <div className="w-64 mt-4 h-14 justify-end mb-4 lg:flex hidden"></div>
            <div className="w-64 flex mt-4 h-14 justify-end mb-4 lg:hidden">
              <PageButton eventClick={onButtonClick} isDesktop={false} />
            </div>
          </div>
          <div className="hidden lg:block translate-x-full lg:mr-40 xl:mr-0 mb-10 xs:w-96">
            <PageCV
              firstName={firstName}
              lastName={lastName}
              currentPosition={currentPosition}
              userMail={userMail}
              userPhone={userPhone}
              userLocation={userLocation}
              eduList={educationList}
              expList={experienceList}
            />
          </div>
        </div>
      </div>
      <div
        className={
          "flex flex-col justify-center items-center w-full duration-500 transition-transform lg:hidden " +
          (pageState === "prev" ? "translate-x-full fixed" : "absolute")
        }
      >
        <PageCV
          firstName={firstName}
          lastName={lastName}
          currentPosition={currentPosition}
          userMail={userMail}
          userPhone={userPhone}
          userLocation={userLocation}
          eduList={educationList}
          expList={experienceList}
        />
        <div className="flex justify-between xs:w-96 mt-4 mb-4 w-[95%]">
          <PageButton
            eventClick={onButtonClick}
            isDesktop={false}
            isBack={true}
          />
        </div>
      </div>
    </>
  );
}
