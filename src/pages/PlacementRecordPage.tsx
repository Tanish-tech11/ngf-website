import { useState } from "react";

const data = [
  { id: 1, name: "Vinod Kumar", branch: "ME", company: "Imperial Auto", salary: "3 LPA" },
  { id: 2, name: "Satpal Singh", branch: "CSE", company: "Bry-Air", salary: "2.8 LPA" },
  { id: 3, name: "Lalit Arora", branch: "ECE", company: "Indus Timer", salary: "2.4 LPA" },
  { id: 4, name: "Nalin Kumar", branch: "CSE", company: "Wipro", salary: "4.2 LPA" },
  { id: 5, name: "Laxmi Narayan", branch: "CSE", company: "HCL", salary: "5.5 LPA" },
  { id: 6, name: "Abhishek Dhankar", branch: "CSE", company: "Sapient", salary: "5.8 LPA" },
  { id: 7, name: "Agnihotri Sinha", branch: "CSE", company: "SBI", salary: "7.5 LPA" },
];

export default function PlacementRecordsPage() {
  const [search, setSearch] = useState("");

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.company.toLowerCase().includes(search.toLowerCase()) ||
    item.branch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-10 space-y-10">
      <h1 className="text-3xl font-bold">Placement Records</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name, company, branch..."
        className="w-full p-3 border rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">#</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Branch</th>
              <th className="p-3 border">Company</th>
              <th className="p-3 border">Package</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="p-3 border">{item.id}</td>
                <td className="p-3 border">{item.name}</td>
                <td className="p-3 border">{item.branch}</td>
                <td className="p-3 border">{item.company}</td>
                <td className="p-3 border">{item.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
