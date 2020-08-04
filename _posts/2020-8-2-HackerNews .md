HackerNews<br />

Hacker News is a social news website focusing on computer science and entrepreneurship.<br /><br />
All the data is come from the hackernews api:[HackerNews API](https://github.com/HackerNews/API). <br />
However this api only provide the basic format of getting data. A example is https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty. This link will access the hackernews with id 8863 and return a json file containing information like "url" , "title" and "time" of the corresponding news. So that all you can access the news by url. <br />
The premise of using this api is that you know the id of news. If you want to search news by title, you should go through all the existing data access the title of them, save them and find the title you are looking for from them. Therefore, simply using hackernews api to search a specified news is very hard. But its very easy to make a list of latest hackernews since this api provide top story function:https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty. <br /><br />

A much easier way to achieve hackernews search is through using the HN Search api:[algolia](https://hn.algolia.com/api).<br />
It is simple to use this api. We can access the urls like:http://hn.algolia.com/api/v1/search?query=foo&tags=story to search the infromation we needed from the api. They also build a website:https://hn.algolia.com/ based on this api.<br /><br />

[hackernews code](https://github.com/boweiww/learn/tree/master/reactjs/hackernews)