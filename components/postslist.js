export async function getServerSideProps() {
    let res = await fetch("http://localhost:3000/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let allPosts = await res.json();
    return {
      props: { allPosts },
    };
  }

export default function PostList(){
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    <h2 className={utilStyles.headingLg}>Blog</h2>
    <ul className={utilStyles.list}>
        {allPosts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                <Date dateString={date} />
                </small>
            </li>
        ))}
    </ul>
</section>
}