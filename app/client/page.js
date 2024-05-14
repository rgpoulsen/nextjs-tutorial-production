"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-7xl mb-8 font-bold">{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(+1)}>
        increase
      </button>
    </div>
  );
};

export default ClientPage;
