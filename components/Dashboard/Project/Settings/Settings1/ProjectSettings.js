import SettingsSideBar from "./SettingsSideBar";
import Header from "./Header";
import BuildSettings from "./boxComponents/BuildSettings";
import ProjectName from "./boxComponents/ProjectName";
import RootDirectory from "./boxComponents/RootDirectory";
import NodeVersion from "./boxComponents/NodeVersion";
import ProjectId from "./boxComponents/ProjectId";
import TransferProject from "./boxComponents/TransferProject";
import DeleteProject from "./boxComponents/DeleteProject";
import useTranslation from "next-translate/useTranslation";

export default function ProjectSettings() {
  const { t } = useTranslation("common");
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Header heading={t("Project Settings")} />
      <hr />
      <div className="flex flex-col md:flex-row main py-6 mt-5">
        <SettingsSideBar />
        <main className="flex flex-col md:ml-4 w-full">
          <ProjectName
            heading={t("Project Name")}
            paragraph={t("Used to identify your Project on the Dashboard, Vercel CLI, and in the URL of your Deployments")}
          />
          <BuildSettings
            heading={t(" Build & Development Settings")}
            paragraph=" When using a framework for a new project, it will be
                  automatically detected. As a result, several project settings
                  are automatically configured to achieve the best result. You
                  can override them below."
          />
          <RootDirectory
            heading="Root Directory"
            paragraph="The directory within your project, in which your code is
              located. Leave this field empty if your code is not located in
              a subdirectory. A new Deployment is required for your changes
              to take effect."
          />
          <NodeVersion
            heading={"Node.js Version"}
            paragraph="The version of Node.js that is used in the Build Step and for
              Serverless Functions. A new Deployment is required for your
              changes to take effect."
          />
          <ProjectId
            heading="Project ID"
            paragraph={t("Used when interacting with the Vercel API")}
          />
          <TransferProject
            heading={t("Transfer Project")}
            paragraph={t("Get full access to collaborative features, multiple Concurrent Builds, and more powerful Serverless Functions by transferring your Project to a Vercel Team")}
          />
          <DeleteProject
            heading={t("Delete Project")}
            paragraph=" The project will be permanently deleted, including its
                  deployments and domains. This action is irreversible and can
                  not be undone."
          />
        </main>
      </div>
    </div>
  );
}
