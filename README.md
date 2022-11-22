# **html.org.in** is an open-source HTML learning website.
## So what does it mean?
Basically, we created this website for anyone who wants to learn HTML. This website is free-to-use and is maintained by the open-source community.

There is no subscription required to use the website.
And there are no ads on the website.

We respect your privacy, so we do not track and do not sell any of your personal data.  
We only store one cookie, which saves your preference of dark or light theme.

## How can you contribute?
This section discusses how to contribute to the learning content of this project, whether that is adding new content which addresses a new topic, or updating existing content that is already on the website.

### How can you contribute a new tutorial?
This section descibes how to add a new tutorial to the website.

1. Create a sub-folder within the `html` folder.
2. Name this sub-folder using the format `html_topic`.
    - For example, the **HTML Introduction** topic folder is named `html_intro`.
3. Create an `index.html` file inside of the sub-folder you just created.
4. Open the `copy.html` file in the repository's main directory.
5. Copy the HTML contents of the `copy.html` file into your newly-created `html_topic/index.html` file.
    - `copy.html` contains the basic structure that topic webpages follow in this project. It includes the HTML code for the metadata, header, footer and navigation buttons.
    - Edit the `<main>` element to add your tutorial content to the webpage.
    - Note that there are two `<div class="navigation-link">` elements within `<main>`. These two `<div>` elements contain the navigation buttons.

**Adding a video to the topic page**  
If you would like to add a video to the topic's webpage, see the code below:

```html
<div class="video__plyr">
    <video id="player" playsinline controls crossorigin data-poster="/path/to/poster.jpg">
    <source src="./cdn/video/Codes - 360.mp4" type="video/mp4" size="360" />
    <source src="./cdn/video/Codes - 540.mp4" type="video/mp4" size="576" />
    <source src="./cdn/video/Codes - 720.mp4" type="video/mp4" size="720" />
    <source src="./cdn/video/codes - 1080.mp4" type="video/mp4" size="1080" />
    </video>
</div>
```

To embed a video on the page:
- Add a `<div>` to the `index.html` file for your topic. Ensure that the `<div>`'s structure is similar to the one above.
- Inside the `<div>`, add one `<source>` element for each resolution/quality you will have for the video.
    - In the example above, the video is available in four resolutions so there are four `<source>` elements.
- Set the `src` attribute of the `<source>` element to a string containing the filepath/URL to the video.
    - In the example above, the video files are located in `./cdn/video/`, where `cdn` exists in the same directory as the topic's `index.html` file.

For more information on the HTML structure of topic webpages, please look into the `copy.html` file.
