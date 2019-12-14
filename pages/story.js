import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import { Layout } from '../components'

class Story extends React.Component {

    static async getInitialProps({ req, res, query }) {
        let story;
        try {
            const storyId = query.id;
            const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
            story = await response.json();// Parsing the response data into JSON and storing it in a var
        } catch (err) {
            console.log(err);
            story = null;
        }

        return { story };
    }

    render() {

        const { story } = this.props;
        if (!story) {
            return <Error statusCode={503} />
        }

        return (
            <Layout title={story.title} backButton={true}>
                <main>
                    <h1 className="story-title">
                        <a href={story.url}>{story.title}</a>
                    </h1>
                    <div className="story-details">
                        <strong>{story.points} points</strong>
                        <strong>{story.comments_count} comments</strong>
                        <strong>{story.time_ago}</strong>
                    </div>
                </main>
                <style jsx>
                    {`
                        main{
                            padding: 1em;
                        }
                        .story-title{
                            font-size: 1.3rem;
                            margin: 0;
                            font-weight: 350;
                            padding-bottom: 0.5rem;
                        }
                        .story-title a{
                            color: #333;
                            text-decoration: none;
                        }
                        .story-title a:hover{
                            text-decoration: underline;
                        }
                        .story-details{
                            font-size: 0.8rem;
                            margin-bottom: 1rem;
                            border-bottom: 1px solid rgba(0,0,0,0.1);
                            padding-bottom: 1rem;
                        }
                        .story-details a{
                            color: #f60;
                        }
                    `}
                </style>
            </Layout>
        )
    }
}
export default Story;