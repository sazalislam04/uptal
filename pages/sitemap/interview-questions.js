import { Row ,Col} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import { createClient } from 'contentful'
import { useRouter } from 'next/router';
import QuestionCard from '../../components/QuestionCard';
import Meta from "../../partial/seo-meta";


export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  const res = await client.getEntries({ content_type: "interviewQuestions" })

  return {
    props: {
      jobs: res.items,
    },
    revalidate: 1
  }
}



export default function InterviewQuestion({jobs}) {
  const router = useRouter()

  const GoBackHandler = () => {
      router.push('/sitemap')
  }
  return (
<div style={{width: "100%"}}>
 
 <Navbartwo/>
 <Meta
            title="Dummy Title"
            description="Dummy Description"
            image="AWS.svg"
        />
     <div className="sitemap_hire_section">  
          <Row className="container mx-auto">
              <p onClick={GoBackHandler} className="go_back_btn">Go Back</p>
         <p className="sitemap_hire_title">Interview questions and answers</p>
          <p className="sitemap_based_text">Based on skill</p>
          <div className="technology_div mt-4">
             {jobs.map(data => {
               return  <QuestionCard key={data.sys.id} data={data} />
            })}
         </div>
         
          </Row>
     </div>
 <MainFooter/>

</div>
  );
}

// {jobs.map((job)=>(
//     <Col onClick={()=>{ClickHandler(job.fields.slug)}} key={job.sys.id}>
//       <img src={'https:' + job.fields.skillLogo.fields.file.url}></img>
//       <p>{job.fields.skill}</p>
//     </Col>)
  
// )}