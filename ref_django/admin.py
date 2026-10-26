from django.contrib import admin

# <HINT> Import any new Models here
from .models import Course, Lesson, Instructor, Learner, Question, Choice

# <HINT> Register QuestionInline and ChoiceInline classes here
class LessonInline(admin.StackedInline):
    model = Lesson
    extra = 5


class QuestionInLine(admin.StackedInline):
    model = Question
    extra = 1


class ChoiceInLine(admin.StackedInline):
    model = Choice
    extra = 1


# Register your models here.
class CourseAdmin(admin.ModelAdmin):
    inlines = [LessonInline]
    list_display = ("name", "pub_date")
    list_filter = ["pub_date"]
    search_fields = ["name", "description"]


class LessonAdmin(admin.ModelAdmin):
    list_display = ["title"]


class QuestionAdmin(admin.ModelAdmin):
    inline = [ChoiceInLine]
    list_display = ["course", "question_text", "question_grade"]
    list_filter = ["course"]
    search_fields = ["question_text"]


class ChoiceAdmin(admin.ModelAdmin):
    list_display = ["question", "choice_text", "is_correct"]
    list_filter = ["question"]
    search_fields = ["choice_text"]


# <HINT> Register Question and Choice models here

admin.site.register(Course, CourseAdmin)
admin.site.register(Lesson, LessonAdmin)
admin.site.register(Instructor)
admin.site.register(Learner)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice, ChoiceAdmin)
