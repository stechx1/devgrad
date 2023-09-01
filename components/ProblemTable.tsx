import Link from "next/link";
import { FiltersList } from "./Filters";
import { Pagination } from "antd";
import { problems } from "@/data/problems";

export const ProblemTable = () => {
  return (
    <>
      <FiltersList />
      <div className="overflow-x-auto">
  <table className="min-w-full">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">ID</th>
        <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Title</th>
        <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Difficulty</th>
        <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Solutions</th>
        <th className="px-2 py-1 sm:px-4 sm:py-2 text-left">Acceptance</th>
      </tr>
    </thead>
    <tbody>
      {problems.map((problem, i) => (
        <tr key={problem.id + i} className="border-t border-gray-200">
          <td className="px-2 py-1 sm:px-4 sm:py-2">{problem.id}</td>
          <td className="px-2 py-1 sm:px-4 sm:py-2">
            <Link href={`/problems/${problem.id}`}>
              <p className="text-blue-600 hover:underline">
                {problem.title}
              </p>
            </Link>
          </td>
          <td className="px-2 py-1 sm:px-4 sm:py-2">{problem.difficulty}</td>
          <td className="px-2 py-1 sm:px-4 sm:py-2">{problem.solutions}</td>
          <td className="px-2 py-1 sm:px-4 sm:py-2">{problem.acceptance}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      <div className="my-4 text-center">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>
  );
};
