function StoryList() {
    return (
        <div>
            <h1>Hacker News Clone</h1>
            {
                stories.map(story => (< h2 key={story.id}> {story.title}</h2>))
            }
        </div >
    )
}

export default StoryList;