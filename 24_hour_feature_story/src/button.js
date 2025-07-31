import { renderStories, renderStory } from './story.js';

export function setupAddButton(stories) {
    const button = document.createElement('button');
    button.textContent = '+';
    button.className = 'border text-2xl w-10 h-10 rounded-full flex justify-center ';
    button.id = 'add-button';
    button.addEventListener('click', () => {
        const newStory = {
            id: stories.length + 1,
            image: 'https://picsum.photos/500/500?random=' + (stories.length + 1),
        }
        // stories.push(newStory);
        // renderStories(stories);
        renderStory(newStory);
    });
    document.querySelector('#app').appendChild(button);
    const storyWrapper = document.createElement('div');
    storyWrapper.id = 'story-wrapper';
    storyWrapper.className = 'flex gap-1 items-center';
    document.querySelector('#app').appendChild(storyWrapper);
}