import { Row ,Col} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import HireCard from "../../components/HireCard";
import { createClient } from 'contentful'
import { useRouter } from "next/router";
import Link from 'next/link'
import Meta from "../../partial/seo-meta";
export async function getStaticProps() {

    const client = createClient({ 
      space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
    })
  
    const res = await client.getEntries({ content_type: "hire" })
  
    return {
      props: {
        hire: res.items,
      },
      revalidate: 1
    }
  }

export default function SitemapHireDevelopers({hire}) {
    const router = useRouter()

    const GoBackHandler = () => {
        router.push('')
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
            <Link href='/sitemap'><a className="go_back_btn">Go Back</a></Link>
            <p className="sitemap_hire_title">Hire Developers</p>
             <p className="sitemap_based_text">Hire developers based on skill</p>
             <div className="technology_div mt-4">
                {hire.map(data => {
                    return <HireCard key={data.sys.id} data={data} />
                })}
            </div>
             </Row>
        </div>
    <MainFooter/>
   
</div>
  );
}
