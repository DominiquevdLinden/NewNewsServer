module.exports = {
  articles: [
    {
      id: 1,
      title: "AWS 101",
      author: "Wei-Chi Chou",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      categoryId: "devops",
      unixTimeStamp: 1588636800,
      date: "Tuesday, 05 May 2020",
      imgUrl: "https://miro.medium.com/max/4000/1*b_al7C5p26tbZG4sy-CWqw.png",
    },
    {
      id: 2,
      title: "jQuery, still worth it?",
      author: "Alastair Haigh",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      categoryId: "frontend",
      unixTimeStamp: 1588723200,
      date: "Wednesday, 06 May 2020",
      imgUrl:
        "https://yootheme.com/site/images/blog/2010/warp_zoo_and_jquery.jpg",
    },
    {
      id: 3,
      title: "Svelte, it's fast",
      author: "Mario Nezmah",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      categoryId: "frontend",
      unixTimeStamp: 1588896000,
      date: "Friday, 08 May 2020",
      imgUrl: "https://avatars3.githubusercontent.com/u/23617963?s=280&v=4",
    },
    {
      id: 4,
      title: "Trying Docker",
      author: "Simona Winnekes",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      categoryId: "devops",
      unixTimeStamp: 1589068800,
      date: "Sunday, 10 May 2020",
      imgUrl:
        "https://pbs.twimg.com/profile_images/1273307847103635465/lfVWBmiW_400x400.png",
    },
    {
      id: 5,
      title: "Deno 1.0 is Here",
      author: "Manon Bosselut",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      categoryId: "backend",
      unixTimeStamp: 1588982400,
      date: "Saturday, 09 May 2020",
      imgUrl: "https://flaviocopes.com/deno/denologo.png",
    },
    {
      id: 6,
      title: "What is new in Java 14",
      author: "Manon Bosselut",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      categoryId: "backend",
      unixTimeStamp: 1588809600,
      date: "Thursday, 07 May 2020",
      imgUrl:
        "https://cdn.journaldev.com/wp-content/uploads/2020/03/java-14-features.png",
    },
  ],
  comments: [
    {
      id: 1,
      name: "Danny v der Jagt",
      comment: "The whale looks so friendly",
      articleId: 4,
    },
    {
      id: 2,
      name: "Danny v der Jagt",
      comment: "Some good people are trying this already",
      articleId: 5,
    },
    {
      id: 3,
      name: "Rein Op 't Bla",
      comment: "A tool from a more civilized age",
      articleId: 2,
    },
    {
      id: 4,
      name: "Rein Op 't Bla",
      comment: "Svelte, so fasionable right now",
      articleId: 3,
    },
    {
      id: 5,
      name: "Wouter de Vos",
      comment: "Docker is good!",
      articleId: 4,
    },
    {
      id: 6,
      name: "Wouter de Vos",
      comment: "AWSome!",
      articleId: 1,
    },
  ],
};
