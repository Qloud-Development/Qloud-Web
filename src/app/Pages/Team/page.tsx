'use client'

import { useState } from "react";

export default function Home() {
  // Tasks State
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", inCharge: "John", status: "Pending" },
    { id: 2, name: "Task 2", inCharge: "Jane", status: "Completed" },
  ]);

  // Members State
  const [members, setMembers] = useState([
    { id: 1, name: "John", avatar: "/avatar1.png" },
    { id: 2, name: "Jane", avatar: "/avatar2.png" },
  ]);

  // Chat Messages State
  const [messages, setMessages] = useState([
    { id: 1, sender: "John", content: "Hello Team!" },
    { id: 2, sender: "Jane", content: "Hi John!" },
  ]);

  // Milestones for Timeline
  const milestones = ["Idea", "Development", "Launch", "Scale"];
  const [currentStep, setCurrentStep] = useState(2);

  // Handlers
  const addMember = () => {
    const newName = prompt("Enter the name of the new member:");
    if (newName) {
      const newId = members.length + 1;
      setMembers([
        ...members,
        { id: newId, name: newName, avatar: `/avatar${newId}.png` },
      ]);
    }
  };

  const removeMember = (id: number) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const sendMessage = (message: string) => {
    const newMessage = {
      id: messages.length + 1,
      sender: "You",
      content: message,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-8">Team Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Task Table */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Tasks</h2>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="border-b p-2">Task</th>
                <th className="border-b p-2">In Charge</th>
                <th className="border-b p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td className="border-b p-2">{task.name}</td>
                  <td className="border-b p-2">{task.inCharge}</td>
                  <td className="border-b p-2">{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Member List */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Team Members</h2>
          <div className="grid grid-cols-2 gap-4">
            {members.map((member) => (
              <div key={member.id} className="flex items-center space-x-2">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-10 h-10 rounded-full"
                />
                <span>{member.name}</span>
                <button
                  onClick={() => removeMember(member.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addMember}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add Member
          </button>
        </div>

        {/* Timeline */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Timeline</h2>
          <div className="flex items-center justify-between">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-8 h-8 rounded-full ${
                    index <= currentStep ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
                <p className="text-sm mt-2">{milestone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Box */}
        <div className="bg-white shadow-lg rounded-lg p-4 col-span-2">
          <h2 className="text-lg font-semibold mb-4">Chat</h2>
          <div className="max-h-60 overflow-y-scroll">
            {messages.map((msg) => (
              <p key={msg.id}>
                <strong>{msg.sender}: </strong>
                {msg.content}
              </p>
            ))}
          </div>
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value.trim()) {
                  sendMessage(e.currentTarget.value);
                  e.currentTarget.value = "";
                }
              }}
            />
            <button
              onClick={() => {
                const input = document.querySelector(
                  "input[type='text']"
                ) as HTMLInputElement;
                if (input && input.value.trim()) {
                  sendMessage(input.value);
                  input.value = "";
                }
              }}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
