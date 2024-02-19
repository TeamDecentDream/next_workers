import axios from "axios";
import React , {FC} from "react";
import { useSelector } from "react-redux"

interface TransactionDetailProps {
  list: Array<any>;
  loadTransaction:any;
}

const GinServerBaseURL = "http://localhost:8080";

const TransactionDetail: FC<TransactionDetailProps> = ({ list,loadTransaction }) => {
    const Auth: any = useSelector<any>((state) => state.authReducer);


  const handleDelete = (tId: any) => {
    axios
      .delete(GinServerBaseURL + `/transaction?id=${tId}`, {
        headers: { Authorization: Auth.accessToken },
      })
      .then((resp) => {
        loadTransaction();
        alert("삭제 성공");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {list &&
        list.map((transaction, index) => (
          <tr key={transaction.id}>
            <td className="border border-gray-500 px-4 py-2">{transaction.title}</td>
            <td className="border border-gray-500 px-4 py-2">{transaction.sell_buy===0?"구매":"판매"}</td>
            <td className="border border-gray-500 px-4 py-2">{transaction.client}</td>
            <td className="border border-gray-500 px-4 py-2">{transaction.amount}</td>
            <td className="border border-gray-500 px-4 py-2">{transaction.state===0?"대기":"확인"}</td>
            <td className="border border-gray-500 px-4 py-2">
              <button
                className="w-full h-full border-[1px] border-solid border-red-400 text-red-400 rounded-lg hover:text-white hover:bg-red-400"
                onClick={()=>{handleDelete(transaction.id)}}
              >
                삭제
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default TransactionDetail;
