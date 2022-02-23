import React from "react";
import { useRouter } from "next/router";
import QuestionsList from "../../components/Questions/QuestionsList";

const TestIdPage = () => {
  const router = useRouter();
  

  return <div className="container">
    {router.query.id}
    
  </div>;
};

export default TestIdPage;
