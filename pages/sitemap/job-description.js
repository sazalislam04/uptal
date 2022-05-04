import { Row ,Col} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import { createClient } from 'contentful'
import { useRouter } from 'next/router';
import Link from "next/link";
import JobDescriptionCard from '../../components/JobDescriptionCard'
import Meta from "../../partial/seo-meta";

export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  const res = await client.getEntries({ content_type: "jobDescription" })

  return {
    props: {
      jobs: res.items,
    },
    revalidate: 1
  }
}

export default function Applyjob({jobs}) {
  const router = useRouter()
    const ClickHandler = (slug) => {
        router.push(`/job-description/${slug}`)
    }
  return (
<div style={{width: "100%"}}>
    <Row className="mx-auto">
    <Meta
            title="Dummy Title"
            description="Dummy Description"
            image="AWS.svg"
        />
            <Navbartwo/>
            <div className="sitemap_hire_section">  
             <Row className="container mx-auto">
            <Link href='/sitemap'><a className="go_back_btn">Go Back</a></Link>
            <p className="sitemap_hire_title">Hire Developers</p>
             <p className="sitemap_based_text">Hire developers based on skill</p>
             <div className="technology_div mt-4">
                {jobs.map(data => {
                    return <JobDescriptionCard key={data.sys.id} data={data} />
                })}
            </div>
             </Row>
        </div>
      <MainFooter/>
    </Row>
</div>
  );
}