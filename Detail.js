import { generalStudyData } from '../../data/generalStudyData';


export default function Detail({detailHead, detailPara}){
    return(
        <div className="dark:text-white text-gray-800 m-4 p-2 boder ">
             {/*{Object.entries(generalStudyData).map(() => (*/}
            <h1 className="text-2xl font-bold inline-block">
                {detailHead}
            </h1>
            <p className="text-sm ">
                {detailPara}
            </p>
        </div>
    )
}