import Link from "next/link";
import { useRouter } from "next/router";
import { Row } from "react-bootstrap";
import style from '../styles/Home.module.css'
export default function Filteritem() {
  const router = useRouter();

  return (
    <div className="filter_bar mb-3 mx-auto">
      <div className="container">
        <div>
          <p className={style.filter_title} style={{
            marginLeft:'0'
          }}>FILTER BY CATEGORY</p>
        </div>
        <div className="filter-text-container pb-3 filter_items" >
          <Link href="/blog">
            <a className={router.route === '/blog' ? 'anchor-texttwo' : 'anchor-text'} style={{
            marginLeft:'0'
          }}>All</a>
          </Link>
          <Link href="/blog/category/remote-work">
            <a className={router.route === '/blog/category/remote-work' ? 'anchor-texttwo' : 'anchor-text'}>Remote Work</a>
          </Link>
          <Link href="/blog/category/hiring-tips">
            <a className={router.route === '/blog/category/hiring-tips' ? 'anchor-texttwo' : 'anchor-text'}>Hiring Tips</a>
          </Link>
          <Link href="/blog/category/employer-branding">
            <a className={router.route === '/blog/category/employer-branding' ? 'anchor-texttwo' : 'anchor-text'}>Employer Branding</a>
          </Link>
          <Link href="/blog/category/digital-workplace">
            <a className={router.route === '/blog/category/digital-workplace' ? 'anchor-texttwo' : 'anchor-text'}>Digital Workplace</a>
          </Link>
          <Link href="/blog/category/diversity-inclusion">
            <a className={router.route === '/blog/category/diversity-inclusion' ? 'anchor-texttwo' : 'anchor-text'}>Diversity and Inclusion</a>
          </Link>
        </div>
      </div>
      <hr className="horizontal-line" />
    </div>
  );
}
