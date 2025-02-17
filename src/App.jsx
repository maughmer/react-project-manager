import ProjectContextProvider from "./store/projects-context";

import Layout from "./components/Layout";

export default function App() {
  return (
    <ProjectContextProvider>
      <Layout />
    </ProjectContextProvider>
  )
}
