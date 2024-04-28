"use client";
import CardCollection from "../../../components/collections/CardCollection"
import ButtonCollection from "../../../components/collections/ButtonCollection";
import AlertNote from "../../../components/collections/alertNote";
import SalesBoard from "../../../components/collections/SalesBoard";
import Transactions from "../../../components/collections/transactions";


export default function Dashboard() {

  return (
    <div className="container mx-auto border-[1px] border-gray-50 rounded-[5px] h-full my-10">
      <AlertNote />
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <ButtonCollection />
      <CardCollection />
      <div className="flex justify-between mt-4">
        <Transactions />
        <SalesBoard />
      </div>
    </div>


  );
}







