# RockED Assgn

> Courses/Lectures --> Contain lesson thumbnails which display the title, subtitle and course overview

> Lessons --> Contain title, subtitle, description and video URL

> Takeaways --> Contain Conclusion of a lesson which is triggered after the lesson is viewed

## Dependencies

express: 4.17.1
> npm install express

mongoose: 6.0.9
> npm install mongoose


## Business Logic
- Lessons inside a particular course are shown as thumbnails.
- On clicking on a lesson it directs to a page where it displays title, subtitle, description and the video regarding the lesson can be viewed.
- On completing a lesson a takeaway of the lesson is displayed.
- Lessons can be added.
- Takeaways can be added linked to a particular video lesson.
- Courses can be created which can contain multiple lessons.
- Courses can be modified to change the number of lessons linked to them.

# API Documentation
## Course/Lecture APIs
>**Course_Lecture POST** --> To post courses which contain lessons, Lectures contain course overview(courseOverview) and lessons(parts)

>**Course_Lecture GET** --> To get courses details

>**Course_Lecture PATCH** --> To modify existing course and add more lessons

## Lesson APIs
>**lesson POST** --> To post lessons, Lessons contain title(title), subtitle(subTitle), description(description), video URL(videoUrl)

>**lesson GET** --> To get lesson details

## Takeaway APIs
>**takeaway POST** --> To post takeaways to be fetched after completing a particular lesson, Takeeaways contain lessonId(lesson) and takeaway(conclusion)

>**takeaway GET** --> To get takeaway for a particular lesson

