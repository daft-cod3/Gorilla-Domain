import { generalQuestionsStudy } from "../data/generalQuestionsData";
import Block from './components/Block';
import RoadSign from './components/RoadSign'
import Detail from './components/Detail'
import { generalStudyData } from '../data/generalStudyData'


export default function GeneralQuestionsStudy() {
  return (
    <main className="mt-10 p-10 dark:bg-gray-900 dark:text-white">
      <div>
        <h1 className="text-2xl font-bold mb-6">
          General Questions Study
        </h1>
      </div>


      <div className="flex flex-wrap justify-center gap-6 m-2 p-6">
      <Block
      luckyHeader="Theory Study Notes"
      luckyPara="Study for your theory NTSA exams and sharpen your skils in the quiz page."
      route=""
      />
      <Block
      luckyHeader="Road Signs"
      luckyPara="Study for the road signs using our components,visual aid and audio services"
      route=""
      />
      <Block
      luckyHeader="General rules of the road"
      luckyPara="Study the general rules of the road to prepare for the quizes"
      route=""
      />
      </div>

        <div>
          <Detail/>
        </div>

      <div className="flex flex-wrap justify-center gap-6">
        <RoadSign
          signName="Steep descent ahead"
          signDetail="This indicates a steep descending road ahead"
          signIcon="/general-quiz/sign2.jpg"
        />
        <RoadSign
         signName="No Road Works Ahead"
         signDetail="This indicates the road ahead is being worked on."
         signIcon="/general-quiz/sign4.jpg"
        />
        <RoadSign
         signName="No Left Turns"
         signDetail="This indicates no driver should turn left"
         signIcon="/general-quiz/sign3.jpg"
        />
         <RoadSign
         signName="No Entry"
         signDetail="This indicates no driver  should proceed beyond this point"
         signIcon="/general-quiz/sign1.jpg"
        />
      </div>
  </main>
  );
}


{/*
     
        {generalQuestionsStudy.map((item, index) => (
          <StudyContentBlock
            key={index}
            title={item.title}
            content={item.content}
            
          />
        ))}
*/}