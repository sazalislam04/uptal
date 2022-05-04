import Head from 'next/head'
const Meta = (props) => (      
<Head>

<title>{props.title}</title>
<meta name="description" content={props.description} />
<meta property="og:type" content="website" />
<meta name="og:title" property="og:title" content={props.title} />
<meta name="og:description" property="og:description" content={props.description}/>
<meta property="og:site_name" content="Remote jobs" /> 
<meta property="og:url" content="" />  
<meta name="twitter:card" content="summary" /> 
<meta name="twitter:title" content={props.title} />
<meta name="twitter:description" content={props.desc} />
<meta name="twitter:site" content="" />
<meta name="twitter:creator" content="Imran Alam" />
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="apple-touch-icon" href="/favicon.png" />
<link rel="stylesheet" href={props.css} />
{
props.css &&
<link rel="stylesheet" href={`${props.css}`}/>
}
{
props.image ? (
<meta property="og:image" content={`${props.image}`} />  
) : (
<meta property="og:image" content="https://www.propernoun.co/static/images/proper-noun-social.png" />  
)   
} 
{
props.image &&   
<meta name="twitter:image" content={`${props.image}`} />   
}
{
props.canonical &&
<link rel="canonical" href={`${props.canonical}`} />
}
{
props.js &&   
<script type="text/javascript" src={`${props.js}`}></script>
}
</Head>
)
export default Meta