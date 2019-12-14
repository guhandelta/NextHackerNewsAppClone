// React library will not be required to be imported, when working with Next.js
import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import { Layout, StoryList } from '../components'

class index extends React.Component {

    static async getInitialProps() {
        let stories;
        try {
            const response = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
            stories = await response.json(); // Parsing the JSON Data
        }
        catch (err) {
            console.log(err);
            stories = []; // Not to throw any weird error on the page, while tryin to loop oer something that's empty/non-iterable
        }

        return {
            stories
        };
    }

    render() {
        const { stories } = this.props;

        if (stories.length === 0) {
            return <Error statusCode={503} />
        }

        return ( 
            <Layout title="Hacker Next" description="A Hacker News clone made with Next.js">
                <StoryList stories={stories} />
            </Layout>
        );
    }
}
export default index;