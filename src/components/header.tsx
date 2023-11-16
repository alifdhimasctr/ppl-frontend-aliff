"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid rounded>
      <div className="flex justify-end w-full md:order-2">
        <Dropdown
          className="flex justify-end"
          arrowIcon={false}
          inline
          label={
            <Avatar
              className="mr-11"
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
