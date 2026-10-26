import os
import shutil
from pygments import highlight
from pygments.lexers import PythonLexer, HtmlDjangoLexer
from pygments.formatters import ImageFormatter

dest_dir = r"C:\Users\lakha\OneDrive\Desktop\Django_Peer_Review_Screenshots"
os.makedirs(dest_dir, exist_ok=True)

# 1. 01-models.png
code_models = """class Question(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    grade = models.IntegerField(default=50)

    def __str__(self):
        return "Question: " + self.content

    def is_get_score(self, selected_ids):
        all_answers = self.choice_set.filter(is_correct=True).count()
        selected_correct = self.choice_set.filter(is_correct=True, id__in=selected_ids).count()
        if all_answers == selected_correct:
            return True
        else:
            return False


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    is_correct = models.BooleanField(default=False)


class Submission(models.Model):
    enrollment = models.ForeignKey(Enrollment, on_delete=models.CASCADE)
    choices = models.ManyToManyField(Choice)
"""
img_data = highlight(code_models, PythonLexer(), ImageFormatter(font_name='Consolas', font_size=17, style='friendly', line_numbers=False))
with open(os.path.join(dest_dir, '01-models.png'), 'wb') as f:
    f.write(img_data)

# 2. 02-admin-file.png
code_admin = """from django.contrib import admin
# <HINT> Import any new Models here
from .models import Course, Lesson, Instructor, Learner, Question, Choice, Submission

# <HINT> Register QuestionInline and ChoiceInline classes here


class LessonInline(admin.StackedInline):
    model = Lesson
    extra = 5


class ChoiceInline(admin.StackedInline):
    model = Choice
    extra = 2


class QuestionInline(admin.StackedInline):
    model = Question
    extra = 2


# Register your models here.
class CourseAdmin(admin.ModelAdmin):
    inlines = [LessonInline]
    list_display = ('name', 'pub_date')
    list_filter = ['pub_date']
    search_fields = ['name', 'description']


class QuestionAdmin(admin.ModelAdmin):
    inlines = [ChoiceInline]
    list_display = ['content']


class LessonAdmin(admin.ModelAdmin):
    list_display = ['title']


# <HINT> Register Question and Choice models here

admin.site.register(Course, CourseAdmin)
admin.site.register(Lesson, LessonAdmin)
admin.site.register(Instructor)
admin.site.register(Learner)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice)
admin.site.register(Submission)
"""
img_data = highlight(code_admin, PythonLexer(), ImageFormatter(font_name='Consolas', font_size=15, style='friendly', line_numbers=False))
with open(os.path.join(dest_dir, '02-admin-file.png'), 'wb') as f:
    f.write(img_data)

# 4. 04-course-details.png
code_html = """<!-- Page content -->
<div class="container-fluid">
    <h2>{{ course.name }}</h2>
    <div class="card-columns-vertical">
        {% for lesson in course.lesson_set.all %}
            <div class="card mt-1">
                <div class="card-header"><h5>Lesson {{lesson.order|add:1}}: {{lesson.title}}</h5></div>
                <div class="card-body">{{lesson.content}}</div>
            </div>
        {% endfor %}
    </div>
    {% if user.is_authenticated %}
    </br>
    <button class="btn btn-primary btn-block" data-toggle="collapse" data-target="#exam">Start Exam</button>
    <div id="exam" class="collapse">
        <form id="questionform" action="{% url 'onlinecourse:submit' course.id %}" method="POST">
            {% for question in course.question_set.all %}
            <div class="card mt-1">
                <div class="card-header">
                    <h5>{{ question.content }}</h5>
                </div>
                {% csrf_token %}
                <div class="form-group">
                    {% for choice in question.choice_set.all %}
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" name="choice_{{choice.id}}" class="form-check-input"
                                   id="{{choice.id}}" value="{{choice.id}}">{{ choice.content }}
                        </label>
                    </div>
                    {% endfor %}
                </div>
            </div>
            {% endfor %}
            <input class="btn btn-success btn-block" type="submit" value="Submit">
        </form>
    </div>
    {% endif %}
</div>
"""
img_data = highlight(code_html, HtmlDjangoLexer(), ImageFormatter(font_name='Consolas', font_size=15, style='friendly', line_numbers=False))
with open(os.path.join(dest_dir, '04-course-details.png'), 'wb') as f:
    f.write(img_data)

# 5. 05-views.png
code_views = """# <HINT> Create a submit view to create an exam submission record for a course enrollment,
def submit(request, course_id):
    course = get_object_or_404(Course, pk=course_id)
    user = request.user
    enrollment = Enrollment.objects.get(user=user, course=course)
    submission = Submission.objects.create(enrollment=enrollment)
    choices = extract_answers(request)
    submission.choices.set(choices)
    submission_id = submission.id
    return HttpResponseRedirect(reverse(viewname='onlinecourse:exam_result', args=(course_id, submission_id,)))


# <HINT> A example method to collect the selected choices from the exam form from the request object
def extract_answers(request):
    submitted_anwsers = []
    for key in request.POST:
        if key.startswith('choice'):
            value = request.POST[key]
            choice_id = int(value)
            submitted_anwsers.append(choice_id)
    return submitted_anwsers


# <HINT> Create an exam result view to check if learner passed exam and show their question results and result for each question,
def show_exam_result(request, course_id, submission_id):
    context = {}
    course = get_object_or_404(Course, pk=course_id)
    submission = Submission.objects.get(id=submission_id)
    choices = submission.choices.all()
    total_score = 0
    for choice in choices:
        if choice.is_correct:
            total_score += choice.question.grade
    context['course'] = course
    context['grade'] = total_score
    context['choices'] = choices

    return render(request, 'onlinecourse/exam_result_bootstrap.html', context)
"""
img_data = highlight(code_views, PythonLexer(), ImageFormatter(font_name='Consolas', font_size=15, style='friendly', line_numbers=False))
with open(os.path.join(dest_dir, '05-views.png'), 'wb') as f:
    f.write(img_data)

# 6. 06-urls.png
code_urls = """from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = 'onlinecourse'
urlpatterns = [
    # route is a string contains a URL pattern
    # view refers to the view function
    # name the URL
    path(route='', view=views.CourseListView.as_view(), name='index'),
    path('registration/', views.registration_request, name='registration'),
    path('login/', views.login_request, name='login'),
    path('logout/', views.logout_request, name='logout'),
    # ex: /onlinecourse/5/
    path('<int:pk>/', views.CourseDetailView.as_view(), name='course_details'),
    # ex: /enroll/5/
    path('<int:course_id>/enroll/', views.enroll, name='enroll'),

    # <HINT> Create a route for submit view
    path('<int:course_id>/submit/', views.submit, name='submit'),
    # <HINT> Create a route for show_exam_result view
    path('course/<int:course_id>/submission/<int:submission_id>/result/', views.show_exam_result, name="exam_result"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
"""
img_data = highlight(code_urls, PythonLexer(), ImageFormatter(font_name='Consolas', font_size=15, style='friendly', line_numbers=True))
with open(os.path.join(dest_dir, '06-urls.png'), 'wb') as f:
    f.write(img_data)

# 3. 03-admin-site.png & 7. 07-final.png
shutil.copyfile(r"C:\Users\lakha\OneDrive\Desktop\03-admin-site.png", os.path.join(dest_dir, "03-admin-site.png"))
shutil.copyfile(r"C:\Users\lakha\OneDrive\Desktop\07-final.png", os.path.join(dest_dir, "07-final.png"))

# Also copy all 7 images directly to Desktop root
for img_name in ["01-models.png", "02-admin-file.png", "03-admin-site.png", "04-course-details.png", "05-views.png", "06-urls.png", "07-final.png"]:
    src = os.path.join(dest_dir, img_name)
    dst = os.path.join(r"C:\Users\lakha\OneDrive\Desktop", img_name)
    shutil.copyfile(src, dst)

print("SUCCESS: All 7 screenshots generated and saved!")
