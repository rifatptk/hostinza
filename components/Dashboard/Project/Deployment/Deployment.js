import Header from "../Settings/Settings1/Header";
import Branches from "./components/Branches";
import Status from "./components/Status";
import Table from "./components/Table";

export default function Deployment() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Header heading={"Deployments"} />
      <hr />
      <div className="mt-5 py-6">
        <div className="flex max-w-lg justify-between">
          <Status />
          <Branches />
        </div>
        <Table/>
      </div>
    </div>
  );
}
