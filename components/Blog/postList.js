import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';
export default function PostList({ allPosts }){
    const data = JSON.parse(allPosts);
    console.log(data);
    return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
            {data.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                    <Link href={`blog/post/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                <Date dateString={date} />
                </small>
            </li>
        ))}
    </ul>
</section>
    );
}