from django.test import TestCase
from .models import Instructor, Learner, Course, Lesson, Enrollment, Question, Choice

# Create your tests here.
class InstructorTestCase(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username="test", password="12test12", email="test@example.com"
        )
        self.user.save()
        self.instructor = Instructor(user=self.user, full_time=True, total_learners=1)
        self.instructor.save()

    def tearDown(self):
        # Clean up run after every test method.
        self.user.delete()


class LearnerTestCase(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username="test", password="12test12", email="test@example.com"
        )
        self.user.save()
        self.learner = Learner(
            user=self.user, occupation="STUDENT", social_link="https://facebook.com"
        )
        self.learner.save()

    def tearDown(self):
        # Clean up run after every test method.
        self.user.delete()


class CourseTestCase(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username="test", password="12test12", email="test@example.com"
        )
        self.user.save()
        self.course = Course(
            name="Online Course",
            image="sampleimage.jpg",
            description="sample description",
            pub_date=date.today(),
            instructors=selff.user,
            users=self.user,
            total_enrollment=2,
        )
        self.course.save()

    def tearDown(self):
        # Clean up run after every test method.
        self.user.delete()


class LessonTestCase(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username="test", password="12test12", email="test@example.com"
        )
        self.user.save()
        self.course = Course(
            name="Online Course",
            image="sampleimage.jpg",
            description="sample description",
            pub_date=date.today(),
            instructors=selff.user,
            users=self.user,
            total_enrollment=2,
        )
        self.course.save()
        self.lesson = Lesson(
            title="Sample Lesson", course=self.course, content="sample content"
        )
        self.lesson.save()

    def tearDown(self):
        # Clean up run after every test method.
        self.user.delete()


class EnrollmentTestCase(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username="test", password="12test12", email="test@example.com"
        )
        self.user.save()
        self.course = Course(
            name="Online Course",
            image="sampleimage.jpg",
            description="sample description",
            pub_date=date.today(),
            instructors=selff.user,
            users=self.user,
            total_enrollment=2,
        )
        self.course.save()
        self.enrollment = Enrollment(user=self.user, course=self.course)
        self.enrollment.save()

    def tearDown(self):
        # Clean up run after every test method.
        self.user.delete()


class QuestionTestCase(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username="test", password="12test12", email="test@example.com"
        )
        self.user.save()
        self.course = Course(
            name="Online Course",
            image="sampleimage.jpg",
            description="sample description",
            pub_date=date.today(),
            instructors=selff.user,
            users=self.user,
            total_enrollment=2,
        )
        self.course.save()
        self.lesson = Lesson(
            title="Sample Lesson", course=self.course, content="sample content"
        )
        self.lesson.save()
        self.question = Question(
            lesson=self.lesson, question_text="Sample Question 1", question_grade=2
        )
        self.question.save()

    def tearDown(self):
        # Clean up run after every test method.
        self.user.delete()


class ChoiceTestCase(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username="test", password="12test12", email="test@example.com"
        )
        self.user.save()
        self.course = Course(
            name="Online Course",
            image="sampleimage.jpg",
            description="sample description",
            pub_date=date.today(),
            instructors=selff.user,
            users=self.user,
            total_enrollment=2,
        )
        self.course.save()
        self.lesson = Lesson(
            title="Sample Lesson", course=self.course, content="sample content"
        )
        self.lesson.save()
        self.question = Question(
            lesson=self.lesson, question_text="Sample Question 1", question_grade=2
        )
        self.question.save()
        self.choice = Choice(
            question=self.question, choice_text="Choice 1", is_correct=True
        )
        self.choice.save()

    def tearDown(self):
        # Clean up run after every test method.
        self.user.delete()
