import React from "react";
import { useRouter } from "next/router";
import QuestionsList from "../../components/Questions/QuestionsList";

const TestIdPage = () => {
  const router = useRouter();

  const { name } = router.query;
  const { id } = router.query;
  

  return <div className="container">
    {id}
    {name}
    <QuestionsList />
    
  </div>;
};

export default TestIdPage;
