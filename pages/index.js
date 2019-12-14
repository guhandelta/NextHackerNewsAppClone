// React library will not be required to be imported, when working with Next.js
import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import Link from 'next/link'
import { Layout, StoryList } from '../components'

class index extends React.Component {

    static async getInitialProps({ req, res, query }) {//destructurizing the context object => req/res from erver, query param from url
        //query => can be used to dynamically change the endpoint, that's currently being accessed, based on the page that was requested

        let stories, page;
        try {
            // calc the page value with the request data
            page = Number(query.page) || 1;
            // if the user is in the homepage and has not requested any pages before, the query param won't be available in the- 
            //-context obj, so the page is given the value of 1 at that time & if not, the page number is extracted from the query-
            //- param and since it would be a string {page: 3}, it is converted to a number
            const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
            stories = await response.json(); // Parsing the JSON Data
        }
        catch (err) {
            console.log(err);
            stories = []; // Not to throw any({page + 1}) weird error on the page, while tryin to loop oer something that's empty/non-iterable
        }

        return { page, stories };
    }

    render() {
        const { page, stories } = this.props;

        if (stories.length === 0) {
            return <Error statusCode={503} />
        }

        return (
            <Layout title="Hacker Next" description="A Hacker News clone made with Next.js">
                <StoryList stories={stories} />
                <footer>
                    <Link href={`/?page=${page + 1}`}>
                        <a className="next-link">
                            Next Page({page + 1})
                        </a>
                    </Link>
                </footer>
                <style jsx>{`
                    footer{
                        padding: 1em;
                    }
                    footer a{
                        font-weight: bold;
                        color: #000;
                        text-decoration: none; 
                    }
                `}</style>
            </Layout>
        );
    }
}
export default index;