class FetchData {
  getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Error takes place: " + res.status);
    }

    return res.json();
  };
  getPost = async () => await this.getResourse("db/database.json");
}

class Twitter {
  constructor({ listElem }) {
    const fetchData = new FetchData();
    this.tweets = new Posts();
    this.elements = {
      listElem: document.querySelector(listElem),
    };
    fetchData.getPost().then((data) => {
      data.forEach((item) => {
        this.tweets.addPost(item);
      });
    });
    console.log(this.tweets);
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
  addPost(tweets) {
    this.posts.push(tweets);
  }
  deletePost(id) {}
  likePost(id) {}
}

class Post {
  constructor({ id, userName, nickname, postDate, text, img, likes = 0 }) {
    this.id = id ? id : this.generateID();
    this.userName = userName;
    this.nickname = nickname;
    this.postDate = postDate ? new Date(postDate) : new Date();
    this.text = text;
    this.img = img;
    this.likes = likes;
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

  generateID() {
    return (
      Math.random().toString(32).substring(2, 9) + (+new Date()).toString(32)
    );
  }
  getDate() {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return this.postDate.toLocaleString("uk-Uk", options);
  }
}

const twitter = new Twitter({
  listElem: ".tweet-list",
});
