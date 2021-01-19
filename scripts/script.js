class Twitter {
  constructor({ listElem }) {
    this.tweets = new Posts();
    this.elements = {
      listElem: document.querySelector(listElem),
    };
  }
  renderPosts() {}
  showUserPosts() {}
  showLikesPosts() {}
  showAllPost() {}
  openModal() {}
}

class Posts {
  constructor({ posts = [] } = {}) {
    this.posts = posts;
  }
  addPost(tweet) {
    const post = new Posts(tweet);
    this.tweets.push(post);
  }
  deletePost(id) {}
  likePost(id) {}
}

class Post {
  constructor(param) {
    this.id = param.id;
    this.userName = param.userName;
    this.nickname = param.nickname;
    this.postDate = param.postDate;
    this.text = param.text;
    this.img = param.img;
    this.likes = param.likes;
    this.liked = false;
  }
  changeLike() {
    this.like = !this.liked;
    if (this.liked === true) {
      this.liked++;
    } else {
      this.liked--;
    }
  }
}

const twitter = new Twitter({
  listElem: ".tweet-list",
});

console.log(twitter);
