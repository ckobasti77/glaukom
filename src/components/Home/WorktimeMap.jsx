import React from "react";

import { Map, WorkTime } from "../components";

const WorktimeMap = ({ section2Ref }) => {
  return (
    <section ref={section2Ref} id="worktimeMap" className="flex flex-col-reverse xl:flex-row xl:h-screen xl:items-center ">
      <WorkTime />
      <Map />
    </section>
  );
};

export default WorktimeMap;
