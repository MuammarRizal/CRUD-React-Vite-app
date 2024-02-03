import { useState } from "react";
import TodoList from "./components/Todo-list";
import Header from "./components/header";

function App() {
  const [isRefresh, setIsRefresh] = useState(true);

  const setRefresh = (status) => {
    setIsRefresh(status);
  };
  return (
    <>
      <div className="App">
        <div className="content">
          <Header setRefresh={setRefresh} />
          <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
        </div>
      </div>
    </>
  );
}

export default App;
