import { problems } from "@/data/problems";
import { Collapse, Tag } from "antd";
import Link from "next/link";

export const Description = ({
  problem,
}: {
  problem: {
    heading: string;
    difficulty: string;
    statement: React.ReactNode;
    examples: React.ReactNode;
  };
}) => {
  const difficultyColorClass = (difficulty: string) => {
    if (difficulty === "Easy") {
      return "text-green-500";
    } else if (difficulty === "Medium") {
      return "text-yellow-500";
    } else if (difficulty === "Hard") {
      return "text-red-500";
    }
  };

  const items = [
    {
      key: "1",
      label: "Similar Questions",
      children: (
        <div className="flex flex-col gap-2">
          {problems.map((problem, i) => (
            <div className="flex justify-between" key={problem.id + i}>
              <Link
                href="/problems/1"
                className="cursor-pointer font-bold text-black"
              >
                {problem.title}
              </Link>
              <p className={`${difficultyColorClass(problem.difficulty)}`}>
                {problem.difficulty}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: "Related Topics",
      children: (
        <div>
          <Tag>Array</Tag>
          <Tag>Hash Table</Tag>
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col">
      <h2>{problem.heading}</h2>
      <div className="my-4">
        <p className="text-green-500">{problem.difficulty}</p>
      </div>
      <div className="flex flex-col space-y-2">
        <div>{problem.statement}</div>
        <div>{problem.examples}</div>
      </div>

      <div className="mt-12 flex gap-4">
        <div className="flex gap-2">
          <p className="text-sm text-gray-600">Accepted</p>
          <p className="font-bold">10.6 M</p>
        </div>
        <div className="text-gray-400">|</div>
        <div className="flex gap-2">
          <p className="text-sm text-gray-600">Submissions</p>
          <p className="font-bold">21 M</p>
        </div>
        <div className="text-gray-400">|</div>
        <div className="flex gap-2">
          <p className="text-sm text-gray-600">Acceptence Rate</p>
          <p className="font-bold">50.5 %</p>
        </div>
      </div>
      <Collapse ghost items={items} />
    </div>
  );
};
