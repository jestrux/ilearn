import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Analytics() {
  return (
    <section className="flex w-screen flex-col overflow-x-hidden overflow-y-hidden p-2">
      <Topbar />
      <h1>Analytics</h1>
    </section>
  );
}

Analytics.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
