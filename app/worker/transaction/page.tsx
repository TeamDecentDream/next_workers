"use client";

import Footer from "@/src/components/footer/Footer";
import OnDate from "@/src/components/functional/OnDate";
import Pagination from "@/src/components/functional/Pagination";
import Navbar from "@/src/components/navbar/Navbar";
import TransactionDetail from "@/src/components/transaction/TransactionDetail";

import axios from "axios";
import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  useState,
  useEffect,
} from "react";
import { useSelector } from "react-redux";

interface transaction {
  title: string;
  sellBuy: number;
  client: string;
  amount: number;
}

const GinServerBaseURL = "http://localhost:8080";

const TransactionList: FC = () => {
  const [maxPage, setMaxPage] = useState(-1);
  const [page, setPage] = useState<number>(1);
  const [list, setList] = useState<Array<any>>([]);
  const [transaction, setTransaction] = useState<transaction>({
    title: "",
    sellBuy: 0,
    client: "",
    amount: 0,
  });
  const Auth: any = useSelector<any>((state) => state.authReducer);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .post(
        GinServerBaseURL + "/transaction",
        {
          title: transaction.title,
          amount: transaction.amount,
          sell_buy: transaction.sellBuy,
          client: transaction.client,
        },
        { headers: { Authorization: Auth.accessToken } }
      )
      .then((resp) => {
        alert("등록 성공");
        getTransactionCount()
          .then((resp) => {
            console.log(resp);
            setMaxPage(Math.floor((resp.data.count - 1) / 5) + 1);
          })
          .catch((err) => {
            console.log(err);
          });

        getTransaction(page)
          .then((resp) => {
            console.log(resp.data.transactions);
            setList(resp.data.transactions);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (tId: any) => {
    axios
      .delete(GinServerBaseURL + `/transaction&id=${tId}`, {
        headers: { Authorization: Auth.accessToken },
      })
      .then((resp) => {
        alert("삭제 성공");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTitle = (e: ChangeEvent<any>) => {
    setTransaction((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const handleClient = (e: ChangeEvent<any>) => {
    setTransaction((prevState) => ({
      ...prevState,
      client: e.target.value,
    }));
  };

  const handleAmount = (e: ChangeEvent<any>) => {
    setTransaction((prevState) => ({
      ...prevState,
      amount: parseInt(e.target.value, 10),
    }));
  };

  const handleSell_Buy = (value: number) => {
    setTransaction((prevState) => ({
      ...prevState,
      sellBuy: value,
    }));
  };

  const getTransaction = async (page: number) => {
    return await axios.get(GinServerBaseURL + `/transaction?page=${page}`, {
      headers: { Authorization: Auth.accessToken },
    });
  };

  const getTransactionCount = async () => {
    return await axios.get(GinServerBaseURL + `/transaction/count`, {
      headers: { Authorization: Auth.accessToken },
    });
  };
  useEffect(() => {
    getTransactionCount()
      .then((resp) => {
        console.log(resp);
        setMaxPage(Math.floor((resp.data.count - 1) / 5) + 1);
      })
      .catch((err) => {
        console.log(err);
      });

    getTransaction(page)
      .then((resp) => {
        console.log(resp.data.transactions);
        setList(resp.data.transactions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-w-[1440px] w-full min-h-[900px] flex h-screen">
      <Navbar />

      <main className="min-w-[1140px] w-full h-full flex flex-col">
        <div className="font-bold w-64 text-3xl mx-6 mt-6">거래내역</div>
        <div className="ml-[90%]">
          <OnDate />
        </div>

        <div className="mx-32 mt-4 mb-2 overflow-y-auto h-[760px] p-4 rounded-[20px] relative">
          <div className="flex w-full">
            <form className="w-5/6">
              <fieldset className="border-gray-500 border-solid border-[1px]">
                <legend>거래 내역 입력</legend>
                거래내용 :{" "}
                <input
                  className="w-5/6 my-1 bg-slate-50"
                  type="text"
                  value={transaction.title}
                  onChange={handleTitle}
                />
                <br />
                판매/구매 :{" "}
                <input
                  className="my-1 bg-slate-50"
                  type="radio"
                  name="ages"
                  checked={transaction.sellBuy === 0}
                  onChange={() => {
                    handleSell_Buy(0);
                  }}
                />{" "}
                구매{" "}
                <input
                  type="radio"
                  name="ages"
                  checked={transaction.sellBuy === 1}
                  onChange={() => {
                    handleSell_Buy(1);
                  }}
                />{" "}
                판매
                <br />
                거래처 :{" "}
                <input
                  className="w-5/6 my-1 bg-slate-50"
                  type="text"
                  value={transaction.client}
                  onChange={handleClient}
                />
                <br />
                거래금액 :{" "}
                <input
                  className="w-5/6 my-1 bg-slate-50"
                  type="number"
                  value={transaction.amount}
                  onChange={handleAmount}
                />
                <br />
              </fieldset>
            </form>
            <button
              className="w-1/6 text-[36px] hover:text-cyan-600"
              onClick={handleSubmit}
            >
              입력
            </button>
          </div>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "25%" }}
                >
                  거래내용
                </th>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "9%" }}
                >
                  판매/구매
                </th>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "20%" }}
                >
                  거래처
                </th>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "20%" }}
                >
                  거래금액
                </th>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "10%" }}
                >
                  회계확인
                </th>
                <th
                  className="border border-gray-500 px-4 py-2"
                  style={{ width: "6%" }}
                >
                  삭제
                </th>
              </tr>
            </thead>
            <tbody>
              <TransactionDetail list={list}></TransactionDetail>
            </tbody>
          </table>
          <Pagination
            page={page}
            setPage={setPage}
            maxPage={maxPage}
          ></Pagination>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default TransactionList;
