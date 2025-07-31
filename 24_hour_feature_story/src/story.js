export function renderStories(stories) {
    clearStories();
    stories.forEach(story => {
        renderStory(story);
    });
}

function clearStories() {
    document.querySelector('#story-wrapper').innerHTML = '';
}

export function renderStory(story) {
    const image = document.createElement('img');
    image.src = story.image;
    image.className = 'border w-10 h-10 rounded-full flex justify-center';
    document.querySelector('#story-wrapper').appendChild(image);
}