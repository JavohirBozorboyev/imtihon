import React from 'react'
import QuestionsItem from './QuestionsItem'

function QuestionsList() {
  return (
    <div className=' container flex flex-col flex-wrap lg:flex-row pb-[65px] px-0 '>
      <QuestionsItem />
      <QuestionsItem />
      <QuestionsItem />
    </div>
  );
}

export default QuestionsList