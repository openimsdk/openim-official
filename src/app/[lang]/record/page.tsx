import prisma from "@/parisma";
import React from "react";

const Record = async ({
  searchParams: { auth },
}: {
  searchParams: { auth?: string };
}) => {
  if (auth !== "openim") {
    return (
      <div className="flex w-full justify-center">
        <div className="alert alert-error my-48 w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Unauthorized!</span>
        </div>
      </div>
    );
  }

  const contacts = await prisma.contactUser.findMany();
  return (
    <div className="my-24 flex w-full justify-center">
      <div className="overflow-x-auto" data-theme="dark">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Website</th>
              <th>Users</th>
              <th>Comments</th>
              <th>CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr className="hover" key={contact.id}>
                <th>{contact.id}</th>
                <th>{contact.name}</th>
                <th>{contact.email}</th>
                <th>{contact.company}</th>
                <th>{contact.website}</th>
                <th>{contact.users}</th>
                <th>{contact.comments}</th>
                <th>{contact.createdAt.toDateString()}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Record;
