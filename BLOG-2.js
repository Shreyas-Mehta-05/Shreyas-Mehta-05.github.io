
const likeBtn = document.querySelector('.like-btn');
const likeCounter = document.querySelector('.like-counter');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('comment-list');


let likes = parseInt(localStorage.getItem('likes')) || 0;
likeCounter.textContent = likes;


let comments = JSON.parse(localStorage.getItem('comments')) || [];


comments.forEach(comment => {
  displayComment(comment);
});

likeBtn.addEventListener('click', () => {
  likes++;
  likeCounter.textContent = likes;
  localStorage.setItem('likes', likes);
});

document.getElementById('comment-btn').addEventListener('click', () => {
  const comment = commentInput.value.trim();
  if (comment !== '') {
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    displayComment(comment);
    commentInput.value = '';
  }
});

function displayComment(comment) {
  const li = document.createElement('li');
  li.textContent = comment;
  commentList.appendChild(li);
}