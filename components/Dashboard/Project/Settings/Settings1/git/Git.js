import SettingsSideBar from "../SettingsSideBar";
import Header from "../Header";
import ConnectedRepo from "./boxComponents/ConnectedRepo";
import ProductionBranch from "./boxComponents/ProductionBranch";
import DeployHooks from "./boxComponents/DeployHooks";
import IgnoreBuild from "./boxComponents/IgnoreBuild";
import CliPrompt from "./boxComponents/CliPrompt";

export default function Git() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Header heading={"Project Settings"} />
      <hr />
      <div className="flex flex-col md:flex-row main mt-5 py-6">
        <SettingsSideBar />
        <main className="flex flex-col md:ml-4 w-full">
          <ConnectedRepo/>
           <ProductionBranch/>
           <DeployHooks/>
           <IgnoreBuild/>
           <CliPrompt/>
        </main>
      </div>
    </div>
  );
}
