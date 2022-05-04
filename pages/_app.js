import "../styles/globals.css";
import "../styles/home.css";
import "../styles/navbar.css";
import "../styles/blog.css";
import "../styles/Footer.css";
import "../styles/blogdetails.css";
import "../styles/foremploye.css";
import "../styles/hire.css";
import "../styles/jobs.css";
import "../styles/sitemap.css";
import "../styles/termAndService.css";
import "../styles/about.css";
import "../styles/contact.css";
import "../styles/interviewQuestion.css";
import "../styles/remoteDevelopersJobs.css";
import "../styles/Event.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ga from '../lib/ga'
import { useRouter } from 'next/router'
import { hotjar } from 'react-hotjar'
import {useEffect, React} from 'react'


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    hotjar.initialize(2912263, 6)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
