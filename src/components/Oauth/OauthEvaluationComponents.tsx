import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";

interface OauthEvaluationComponentsProps {
  list: Array<any>;
  loadMember: any;
}

const OauthEvaluationComponents: FC<OauthEvaluationComponentsProps> = ({
  list,
  loadMember,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {list &&
        list.map((member, index) => (
          <tr key={member.id}>
            <td className="border border-gray-500 px-4 py-2">{member.name}</td>
            <td className="border border-gray-500 px-4 py-2">{member.email}</td>
            <td className="border border-gray-500 px-4 py-2">
              {member.address}
            </td>
            <td className="border border-gray-500 px-4 py-2">
              {member.authorities[0].Role}
            </td>
            <td className="border border-gray-500 px-4 py-2">
              {member.confirmDate}
            </td>
            <td className="border border-gray-500 px-4 py-2">
              <Link
                href={{
                  pathname: "/worker/evaluation/input",
                  query: { member: JSON.stringify(member) },
                }}
                // as={`/worker/evaluation/input`}
              >
                <button className="mt-1 w-full h-full text-lg p-1 border-[1px] border-solid border-blue-400 text-blue-400 rounded-lg hover:text-white hover:bg-blue-400">
                  평가하기
                </button>
              </Link>
            </td>
          </tr>
        ))}
    </>
  );
};

export default OauthEvaluationComponents;
