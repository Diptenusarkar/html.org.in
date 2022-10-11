## html.org.in is an open-source HTML learning website.
### So What does it mean?
Basically, we created this website for you. You don't need to take any subscription and no need to see any unwanted ads. We respect your privacy, so we do not track you or we don't sell any kind of your personal data. We store only one cookie for dark/light theme.

### How will you contribute?
Before you contribute, you need to know there is more than one step.
1. **First Step** 
    - You need to create a folder on `HTML` folder.
     - Then create a folder with `html_yourname`.
     - Create an `index.html` file.
2. **Second Step**
    - Copy `copy.html` file
    - Now it's your time. To make it.
  
**Okay, it looks good. Now the question is how to add a video tutorial?** <br>
Well, this is really very good question. For that, you need to copy this code:

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

For more information, please look into the `copy.html` file.
