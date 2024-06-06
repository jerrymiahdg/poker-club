import { useState } from "react";

const Standings = () => {
  const [members, setMembers] = useState([
    { name: "Jeremiah", chips: 29850, meetings: 12 },
    { name: "Jared", chips: 686498, meetings: 18 },
    { name: "Mateos", chips: 35, meetings: 18 },
  ]);

  return (
    <div className="flex justify-center p-20 w-full">
      <div className="text-left max-w-2xl w-full flex flex-col gap-10">
        <h1 className="font-bold text-7xl">Poker Standings</h1>
        <div className="grid grid-cols-4 bg-gradient-to-r from-neutral-200 to-neutral-400 rounded-xl">
          <h1 className="p-3 font-bold border-r border-neutral-400">Place</h1>
          <h1 className="p-3 font-bold border-r border-neutral-400">Member</h1>
          <h1 className="p-3 font-bold border-r border-neutral-400">Chips</h1>
          <h1 className="p-3 font-bold">Meetings</h1>
          {members.map((member, i) => (
            <>
              <h1 className="p-3 border-t border-r border-neutral-400">
                {i + 1}
              </h1>
              <h1 className="p-3 border-t border-r border-neutral-400">
                {member.name}
              </h1>
              <h1 className="p-3 border-t border-r border-neutral-400">
                {member.chips}
              </h1>
              <h1 className="p-3 border-t border-neutral-400">
                {member.meetings}
              </h1>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Standings;
