"use client";
import React from "react";
import BaseLayout_dpt from "@/components/BaseLayout/BaseLayout_dpt";
import { PiStudentFill } from "react-icons/pi";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";
import CountUp, { Number } from "@/components/Number";

export default function page() {
  return (
    <BaseLayout_dpt>
      <div className="count_member_container">
        <div className="count_member">
          <div className="count_member-icon">
            <PiStudentFill />
          </div>
          <div class="flex-row justify-end">
            <div className="count_member-name">MAHASISWA</div>
            <div className="count_member-count">
              <CountUp end={780} />
            </div>
          </div>
        </div>

        <div className="count_member">
          <div className="count_member-icon">
            <PiChalkboardTeacherFill />
          </div>
          <div class="flex-row justify-end">
            <div className="count_member-name">DOSEN</div>
            <div className="count_member-count">
              <CountUp end={75} />
            </div>
          </div>
        </div>

        <div className="count_member">
          <div className="count_member-icon">
            <FaSchool />
          </div>
          <div class="flex-row justify-end">
            <div className="count_member-name">DEPARTEMEN</div>
            <div className="count_member-count">
              <CountUp end={7} />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout_dpt>
  );
}
